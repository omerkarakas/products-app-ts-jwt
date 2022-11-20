import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IComment, IProduct } from '../utils/types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import { Rating } from '@mui/material';

type Props = {
    product: IProduct;
    addComment: (product: IProduct, comment: IComment) => void;
};

const Product = ({ product, addComment }: Props) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <CardMedia
                    component="img"
                    sx={{
                        pt: '10px',
                        width: '30%',
                    }}
                    image={'images/' + product.img}
                    alt="random"
                />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography gutterBottom variant="h2" component="h2">
                        {product.productName}
                    </Typography>
                    <Typography>{product.productDescription}</Typography>
                    <br />
                    <Typography variant="h3">${product.price}</Typography>
                    <br />
                    <Typography variant="h4">Average Rating:{product.averageRating?.toFixed(1)}</Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                        <Rating name="read-only" value={product?.averageRating} precision={0.1} readOnly />
                    </div>

                    <br />
                    <Typography>Arrival Date: {product.productArrivalDate}</Typography>
                    <br />
                    <Typography>Number of Comments: {product.comments?.length}</Typography>
                    <br />
                    <Typography variant="h4">Product Summary</Typography>
                    <Typography>{product.productSummary}</Typography>
                </div>
            </div>

            <TabContext value={value}>
                <Box sx={{ width: '100%', bgcolor: 'background.paper', paddingTop: '50px' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Detailed Information" value="1" />
                        <Tab label={`Comments(${product.comments?.length})`} value="2" />
                    </Tabs>
                </Box>
                <TabPanel value="1">{product?.productDetail}</TabPanel>
                <TabPanel value="2">
                    <AddComment product={product} addComment={addComment} />
                    <CommentsList comments={product.comments} />
                </TabPanel>
            </TabContext>
        </div>
    );
};

export default Product;
