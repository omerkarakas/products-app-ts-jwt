import React, { useState, useContext, useEffect, createContext } from 'react';
import { IComment, IProduct } from '../utils/types';

interface IProductContext {
    setAccessToken: (accessToken: string) => void;
    loading: boolean;
    products: IProduct[];
    currentProduct: IProduct;
    setCurrentProduct: (product: IProduct) => void;
    addComment: (product: IProduct, comment: IComment) => void;
    averageRating: number;
}

const initialState: IProductContext = {
    setAccessToken: (accessToken: string) => {},
    loading: false,
    products: [] as IProduct[],
    currentProduct: {} as IProduct,
    setCurrentProduct: (product: IProduct) => {},
    addComment: (product: IProduct, comment: IComment) => {},
    averageRating: 0,
};

export const AppContext = createContext<IProductContext>(initialState);
