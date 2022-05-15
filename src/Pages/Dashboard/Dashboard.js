import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile bg-slate-100">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <Outlet />
            </div>

            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='mb-2'><Link to='/dashboard'>My Appoinments</Link></li>
                    <li><Link to='/dashboard/review'>My Reviews</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;