import React from 'react';

const Footer = () => {
    return (
        <div className='bg-footer bg-contain text-black'>
            <footer className="footer p-10">
                <div>
                    <span className="footer-title uppercase">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title uppercase">Oral Health</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title uppercase">Our Address</span>
                    <p>New York - 101010 Hudson</p>
                </div>
            </footer>
            <p className="text-center">Copyright &copy; Abdullah Al Noman, 2022 || All Rights Reserved</p>
        </div>
    );
};

export default Footer;