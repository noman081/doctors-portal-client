import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <div className='bg-chair bg-cover'>
                <Banner />
                <Info />
            </div>
            <Services />
        </div>
    );
};

export default Home;