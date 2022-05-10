import React from 'react';

const Review = ({ review }) => {
    const { name, city, img, description } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
            </div>
            <div className='flex items-center px-7 pb-7'>
                <figure className='border-2 border-primary rounded-full p-1'>
                    <img src={img} alt="Shoes" />
                </figure>
                <div className='ml-4'>
                    <h2 className="card-title">{name}</h2>
                    <p>{city}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;