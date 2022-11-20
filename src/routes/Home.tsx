import '../index.css';
import { useNavigate, Route } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('authToken');
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
                <h3 className="m-3">ShopX</h3>
                <button type="submit" className="buttons" onClick={logout}>
                    Logout
                </button>
            </div>
            <div className="container">
                <div
                    className="row d-flex justify-content-center align-items-center text-center"
                    style={{ height: '100vh' }}
                >
                    <ProductsList />
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Home;
