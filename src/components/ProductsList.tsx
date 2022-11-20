import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IProduct } from '../utils/types';
import { useGlobalContext } from '../store/AppProvider';
import ProductPreview from './ProductPreview';

const theme = createTheme();

type ProductsArray = IProduct[];

const ProductsList = () => {
    const { loading, products, setCurrentProduct } = useGlobalContext();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Products
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                            Products
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            We provide a variety of awesome products
                        </Typography>
                    </Container>
                </Box>
                <Container sx={{ py: 2 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {products.map((product) => (
                            <ProductPreview key={product.id} product={product} setCurrentProduct={setCurrentProduct} />
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    OKarakas Design
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                    Order and forget
                </Typography>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
};

export default ProductsList;
