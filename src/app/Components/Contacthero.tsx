'use client';

import React from 'react';
import Bakground from '../assets/Images/Work/bg-contact.png';

const ContactHero = () => {
    return (
        <section
            className="hide-on-mobile background-container justify-content-end"
            style={{
                backgroundImage: `url(${Bakground.src})`,
                backgroundPosition: '50%',
                backgroundSize: 'cover',
                width: '100%',
            }}
        >
            <div className="px-0">
                <div className="d-flex justify-content-around">
                    {/* Phone */}
                    <div className="logo-item">
                        <img src="/images/call.svg" alt="Phone Logo" className="logo-item-image mb-2" />
                        <p className="mb-3 text-white">Phone:</p>
                        <h6 className='text-content'>+91 22 666 33 555</h6>
                    </div>

                    {/* Location */}
                    <div className="logo-item">
                        <img src="/images/location.svg" alt="Location Logo" className="logo-item-image mb-2" />
                        <p className="mb-3 text-white">Location:</p>
                        <h6 className='text-content'>
                            601 Lodha Supremus, Senapati Bapat Marg, Lower Parel, Mumbai 400013, India.
                        </h6>
                    </div>

                    {/* Email */}
                    <div className="logo-item">
                        <img src="/images/mail.svg" alt="Mail Logo" className="logo-item-image mb-2" />
                        <p className="mb-3 text-white">Email:</p>
                        <h6 className='text-content'>info@se-arch.com</h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
