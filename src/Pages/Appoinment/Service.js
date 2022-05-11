import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-secondary font-bold">{name}</h2>
                <p>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-400'>Try another date</span>
                    }
                </p>
                <p>{slots.length} spaces available</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} class="btn btn-secondary text-white uppercase">Book Appoinment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;