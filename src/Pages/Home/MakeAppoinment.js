import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppoinment = () => {
    return (
        <section className='flex justify-center items-center mt-36 bg-doctor text-white bg-cover sm:p-8 '>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 sm:p-8 xs:p-8'>
                <h2 className='text-primary text-xl'>Appoinment</h2>
                <h1 className='text-4xl'>Make an Appoinment Today</h1>
                <p className='mb-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;