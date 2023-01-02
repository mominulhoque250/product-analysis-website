import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Review = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/08a1174d-380c-4474-bea8-d8f22e33ecef')
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