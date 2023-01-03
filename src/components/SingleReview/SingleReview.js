import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import "../SingleReview/SingleReview.css";

const SingleReview = (props) => {
    const { name, review, ratings } = props.product;
    return (
        <div>

            <CardGroup className='singlereview'>
                <Card>

                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Review: {review}<br></br>
                            Ratings: {ratings}
                        </Card.Text>

                    </Card.Body>

                </Card>
                <Card>

                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Review: {review}<br></br>
                            Ratings: {ratings}
                        </Card.Text>

                    </Card.Body>

                </Card>
                <Card>

                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Review: {review}<br></br>
                            Ratings: {ratings}
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );
};

export default SingleReview;