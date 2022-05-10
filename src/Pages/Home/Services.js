import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
import ServicesBanner from './ServicesBanner';
const Services = () => {
    const services = [
        {
            id: 1,
            name: "Fluoride Treatment",
            img: fluoride,
            description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities."
        },
        {
            id: 2,
            name: "Cavitiy Filling",
            img: cavity,
            description: "A tooth filling is a procedure wherein the damaged and decayed part of a tooth is removed and the area is filled with a replacement material to protect against further damage and to restore the tooth's appearance and function."
        },
        {
            id: 3,
            name: "Teeth Whitening",
            img: whitening,
            description: "Teeth whitening is a simple process. Whitening products contain one of two tooth bleaches (hydrogen peroxide or carbamide peroxide). These bleaches break stains into smaller pieces, which makes the color less concentrated and your teeth brighter."
        },
    ]
    return (
        <div className='mt-32 px-12'>
            <h2 className="text-primary text-center text-xl font-bold">Our Services</h2>
            <h2 className="text-accent text-center text-4xl">Service We Provide</h2>

            <div className='mt-16 grid grid-cols-1 gap-5 mx-auto lg:grid-cols-3'>
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }
            </div>

            <ServicesBanner />
        </div>
    );
};

export default Services;