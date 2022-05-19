import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import DoctorRow from './DoctorRow';
const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery('allDoctors', () => fetch('http://localhost:5000/doctor').then(res => res.json()));
    const [deleteDoctor, setDeleteDoctor] = useState(null);
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='mt-10'>
            <h2 className='text-2xl text-center'>We have total {doctors.length} doctors</h2>
            <div className="overflow-x-auto px-10 py-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow key={doctor._id} doctor={doctor} index={index} refetch={refetch} setDeleteDoctor={setDeleteDoctor} />)
                        }
                    </tbody>
                </table>
            </div>
            {deleteDoctor && <DeleteModal
                refetch={refetch}
                deleteDoctor={deleteDoctor}
                setDeleteDoctor={setDeleteDoctor} />}
        </div>
    );
};

export default ManageDoctors;