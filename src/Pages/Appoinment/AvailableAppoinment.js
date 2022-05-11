import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='mt-36'>
            <h1 className="text-secondary text-xl text-center font-bold">Available Appointments On {format(date, 'PP')}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 mt-24'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment} />)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} />}
        </div>
    );
};

export default AvailableAppoinment;