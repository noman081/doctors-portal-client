import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoinments = () => {
    const [user] = useAuthState(auth);
    const [bookings, setBookings] = useState([]);
    const email = user?.email;
    const url = `http://localhost:5000/booking?email=${email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    return (
        <div className='lg:mx-12 sm:mx-6 mt-12'>
            <h1 className="text-2xl">My Appoinment</h1>
            <div className="overflow-x-auto mt-6">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Services</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            bookings.map((booking, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{booking.patientName}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.slot}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinments;