import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info';

const Home = () => {
    return (
        <div className='bg-chair bg-cover'>
            <Banner />
            <Info />
        </div>
    );
};

export default Home;