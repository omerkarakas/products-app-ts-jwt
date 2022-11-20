import React, { useState, useContext, useEffect, createContext, FC } from 'react';
import { IComment, IProduct } from '../utils/types';
import axios from 'axios';
import { AppContext } from './AppContext';
import { setupInterceptorsTo } from '../utils/interceptors';
import { format } from 'date-fns';
import { toastSuccess } from '../utils/functions';

export const PRODUCTS_API_URL = process.env.REACT_APP_PRODUCTS_API_URL || 'http://localhost:5000/products';
export const USERS_API_URL = process.env.REACT_APP_USERS_API_URL || 'http://localhost:5000/users';
const NUMBER_OF_DAYS_TO_ARRIVE = 7;

export const AppProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState([] as IProduct[]);
    const [loading, setLoading] = useState(false);
    const [accessToken, setAccessToken] = useState(localStorage.getItem('authToken'));

    const [currentProduct, setCurrentProduct] = useState({} as IProduct);
    const [averageRating, setAverageRating] = useState(0);

    const axiosInstance = setupInterceptorsTo(
        axios.create({
            baseURL: PRODUCTS_API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    );

    const addComment = (product: IProduct, comment: IComment) => {
        setLoading(true);
        let comments: IComment[] = [comment, ...product?.comments];
        let averageRating: number | undefined = getAverageRating(comments);
        let productToUpdate = { ...product, comments, averageRating };
        // console.log('new product:', productToUpdate);
        try {
            axios
                .put(PRODUCTS_API_URL + '/' + product.id, productToUpdate)
                .then((response) => {
                    setCurrentProduct(productToUpdate);
                    setProducts((prev) => {
                        return prev.map((product) => {
                            return product.id === productToUpdate.id ? productToUpdate : product;
                        });
                    });
                    toastSuccess('Comment saved');
                })
                .catch((error) => {});
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const getAverageRating = (comments: IComment[]) => {
        let averageRating: number | undefined;
        if (comments.length > 0) {
            averageRating = comments.reduce((a, b) => a + b.score, 0) / comments.length;
        }
        return averageRating;
    };

    const fetchAndSetProducts = async () => {
        setLoading(true);
        try {
            axiosInstance
                .get(PRODUCTS_API_URL)
                .then((response) => {
                    // console.log('product data:', response.data);
                    let productsResponse = response.data as IProduct[];
                    let newProducts: IProduct[] = productsResponse.map((product) => {
                        let averageRating: number | undefined = getAverageRating(product?.comments);
                        let arrivalDate: Date = new Date();
                        arrivalDate.setDate(arrivalDate.getDate() + NUMBER_OF_DAYS_TO_ARRIVE);
                        return { ...product, productArrivalDate: format(arrivalDate, 'MM.dd.yyyy'), averageRating };
                    });

                    if (newProducts) {
                        setProducts(newProducts);
                    }
                })
                .catch((error) => {});
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // console.log('fetching');
        if (accessToken) {
            fetchAndSetProducts();
        }
    }, [accessToken]);

    return (
        <AppContext.Provider
            value={{ setAccessToken, loading, products, currentProduct, setCurrentProduct, addComment, averageRating }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
