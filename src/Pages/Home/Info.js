import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Info = () => {
    const clockInfo = {
        title: 'Opening Hours',
        description: 'Opening at 9 AM and close at 10 PM',
        bgClass: 'bg-primary'
    };
    const markerInfo = {
        title: 'Visit our Location',
        description: 'Brooklyn, NY 10036, United States',
        bgClass: 'bg-accent'
    };
    const phoneInfo = {
        title: 'Contact us now',
        description: 'Phone- +122-333-444-555',
        bgClass: 'bg-primary'
    }
    return (
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 px-12">
            <InfoCard img={clock} info={clockInfo} />
            <InfoCard img={marker} info={markerInfo} />
            <InfoCard img={phone} info={phoneInfo} />
        </div>

    );
};

export default Info;