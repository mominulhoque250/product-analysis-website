import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Review = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/31cb8c5b-1bfc-4ffc-8b1f-73d959c6b070')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2>Customer Reviews({products.length})</h2>
            {
                products.map(product => <SingleReview key={product.id} product={product}></SingleReview>)
            }
        </div>
    );
};

export default Review;