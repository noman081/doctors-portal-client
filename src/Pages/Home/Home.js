import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <div className='bg-chair bg-cover'>
                <Banner />
                <Info />
            </div>
            <Services />
            <MakeAppoinment />
            <Testimonial />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;