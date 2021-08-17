import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// const products =[
//     { id:1, name: 'Shoes', description: 'Running shoes.', price: '$5', image:"https://www.snipes.es/dw/image/v2/BDCB_PRD/on/demandware.static/-/Sites-snse-master-eu/default/dwfcfd2fb3/1946133_P.jpg?sw=780&sh=780&sm=fit&sfrm=png"},
//     { id:2, name: 'MacBook', description: 'Apple macbook', price: '$10', image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603332211000"}

// ]

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
 
}
export default Products;