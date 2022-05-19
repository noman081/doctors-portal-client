import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
    const { name, email } = deleteDoctor;
    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    setDeleteDoctor(null);
                    toast.success(`Doctor ${name} deleted successfully`);
                    refetch();
                }
                else {
                    toast.error('Failed to delete doctor');
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you  want to delete {name}?</h3>
                    <p class="py-4">Remember we can't recover doctor without adding him manually...</p>
                    <div class="modal-action">
                        <button onClick={handleDelete} className="btn btn-error">Delete</button>
                        <label for="my-modal-6" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;