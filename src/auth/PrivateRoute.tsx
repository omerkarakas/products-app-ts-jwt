import Login from '../routes/Login';

type Props = {
    component: (props: any) => JSX.Element;
    componentProps?: { [key: string]: any };
};
const PrivateRoute = ({ component: Component, componentProps }: Props) => {
    const token = localStorage.getItem('authToken');

    if (!token) {
        return <Login />;
    }

    return (
        <>
            <Component {...componentProps} />
        </>
    );
};

export default PrivateRoute;
