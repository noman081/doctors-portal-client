import React from 'react';

const InfoCard = ({ img, info }) => {
    const { title, description, bgClass } = info;
    return (
        <div className={`card lg:card-side shadow-xl text-white p-3 ${bgClass}`}>
            <figure>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;