import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-secondary font-bold">{name}</h2>
                <p>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-400'>Try another date</span>
                    }
                </p>
                <p>{slots.length} spaces available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0} className="btn btn-secondary text-white uppercase">Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;