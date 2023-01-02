import React from 'react';

const SingleReview = (props) => {
    const { name, review, ratings } = props.product;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h4>Review: {review}</h4>
            <h5>Ratings: {ratings}</h5>
        </div>
    );
};

export default SingleReview;