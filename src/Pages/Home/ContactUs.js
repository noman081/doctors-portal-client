import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <section className='bg-doctor bg-cover text-white mt-36 px-8 py-16'>
            <div className='text-center'>
                <h3 className="text-xl text-primary font-bold">Contact Us</h3>
                <h1 className="text-4xl">Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5 mt-6'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContactUs;