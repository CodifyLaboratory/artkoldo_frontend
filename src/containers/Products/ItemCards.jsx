import React from 'react';
import {products} from './ListofProducts'
import './ItemCards.css'
import {ProductItem} from './product-items/ProductItem'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Card} from 'react-bootstrap';



export default function ItemCards() {
    return (
        <>
        <div className="Item-Cards">
            {products.map(product => <ProductItem product={product} key={product.id} />)}
        </div>
        </>
    )
}

