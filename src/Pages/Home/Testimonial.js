import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: "Winson Harry",
            city: 'Dhaka',
            img: people1,
            description: "I went to Doctors Portal to do deep cleaning and everyone treats customers Amazing I recommend you to visit this dental care specially They are great in time management be on time will get service on time I wish there is more than 5 star I would give them 👌👏."
        },
        {
            id: 2,
            name: "Farzana Lubna",
            city: 'Dhaka',
            img: people2,
            description: "Awesome place and wonderful people!! Dr. G , hygienists and the entire staff made sure I was well taken care of!!."
        },
        {
            id: 3,
            name: "Maksuda Rumu",
            city: 'Dhaka',
            img: people3,
            description: "Definitely the most gentle, neat and safe Dental Care I have ever encountered. Thank you so much Dr.G and all the lovely staff members. <3"
        },
    ]
    return (
        <div className='mt-20 px-12'>
            <h3 className='text-xl text-primary font-bold'>Testimonials</h3>
            <h1 className='text-4xl text-accent'>What Our Patient Says</h1>
            <div className='mt-16 grid grid-cols-1 gap-5 mx-auto lg:grid-cols-3'>
                {
                    reviews.map(review => <Review key={review.id} review={review} />)
                }
            </div>
        </div>
    );
};

export default Testimonial;