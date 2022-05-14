import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const formatedDate = format(date, 'PP');

    const [user, loading] = useAuthState(auth);
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const phone = event.target.phone.value;
        console.log(slot);
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patientName: user.displayName,
            patientEmail: user.email,
            phone
        };
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data);
                    toast.success(`Appoinment for ${name} on ${formatedDate} at ${slot} has taken successfully`);
                }
                else {
                    console.log(data);
                    toast.error(`Appoinment for ${booking.treatment} on ${booking.date} at ${booking.slot} has already taken`);
                }
            })
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-accent text-xl font-semibold">{name}</h3>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 justify-items-center gap-3 mt-5'>
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone" required className="input input-bordered w-full max-w-xs" name='phone' />
                        <input type="submit" placeholder="Submit" className="input input-bordered w-full max-w-xs btn btn-accent" />

                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingModal;