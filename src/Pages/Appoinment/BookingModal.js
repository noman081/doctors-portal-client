import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
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
                            <option disabled selected>Select Time</option>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Submit" className="input input-bordered w-full max-w-xs btn btn-accent" />

                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingModal;