import '../index.css';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../store/AppProvider';
import Product from '../components/Product';
import { ToastContainer } from 'react-toastify';

const ProductPage = () => {
    const navigate = useNavigate();
    const { currentProduct, addComment } = useGlobalContext();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingLeft: 50,
                    paddingRight: 50,
                }}
            >
                <div>
                    <button type="submit" className="buttons" onClick={() => navigate('/home')}>
                        Back
                    </button>
                </div>
                <div>
                    <button type="submit" className="buttons" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
            <div className="container">
                <div
                    className="row d-flex justify-content-center align-items-center text-center"
                    style={{ height: '100vh' }}
                >
                    <Product product={currentProduct} addComment={addComment} />
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default ProductPage;
