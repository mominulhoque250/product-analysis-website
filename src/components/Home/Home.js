import React from 'react';
import ProfilePicture from "../../image/bf79e46c1e523a1bd91e5dc3308fb907.jpg";
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';

import "./Home.css";

const Home = () => {
    return (
        <div className='home'>
            <div className='heading'>
                <h1>Review This Book</h1>
                <h1>Help other.</h1>
                <p>Nobody likes to spend money on a new book only to face that overwhelming feeling of disappointment when it doesn't live up to your expectations.</p>
            </div>
            <div>
                <img src={ProfilePicture} alt='book'></img>
            </div>
            <Reviews></Reviews>
        </div>

    );
};

export default Home;