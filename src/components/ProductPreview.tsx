import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { IProduct } from '../utils/types';
import Rating from '@mui/material/Rating';

type Props = {
    product: IProduct;
    setCurrentProduct: (product: IProduct) => void;
};

const ProductPreview = ({ product, setCurrentProduct }: Props) => {
    const navigate = useNavigate();

    return (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="img"
                    sx={{
                        // 16:9
                        pt: '10px',
                    }}
                    image={'images/' + product.imgSmall}
                    alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.productName}
                    </Typography>
                    <Typography>This is a media card. You can use this section to describe the content.</Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Rating name="read-only" value={product?.averageRating} precision={0.25} readOnly />

                    <Button
                        size="small"
                        onClick={() => {
                            setCurrentProduct(product);
                            navigate('/product');
                        }}
                    >
                        Details
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductPreview;
