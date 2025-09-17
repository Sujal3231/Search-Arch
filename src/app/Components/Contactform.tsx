'use client';
import locationIcon from '../assets/Images/Work/locationblack.svg';
import React from 'react';

const ContactForm = () => {
    return (<div>
        <div className="custom-row custom-padding1">
            {/* Left Column: Form */}
            <div className="col-lg-6 enquiry col-12 mb-4 mb-lg-0">
                <h2 className="fw-bold h2-custom mb-2">Send Enquiry</h2>
                <p className="mb-4">Reach out to us for any inquiry</p>
                <form>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control form-fields"
                            placeholder="Full name"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control form-fields"
                            placeholder="Your email"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="tel"
                            className="form-control form-fields"
                            placeholder="Phone number"
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control form-fields"
                            placeholder="Message"
                            rows={8}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn submit-btn btn-primary w-100 fw-bold">
                        Submit Enquiry
                    </button>
                </form>
            </div>

            {/* Right Column: Map */}
            <div className="col-6 d-none d-lg-block">
                <div>
                    <iframe
                        src="https://www.google.com/maps?q=Studio+for+Environment+and+Architecture,+601+Lodha+Supremus,+Senapati+Bapat+Marg,+Lower+Parel,+Mumbai+400013&output=embed"
                        width="100%"
                        height="550px"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Se-arch Architects Map"
                    ></iframe>
                </div>
            </div>
        </div>
        <div className="custom2-row custom-padding1">
            {/* Header */}
            <h2 className="fw-bold h2-custom text-center mb-1">Career Openings</h2>

            {/* Career Openings List */}
            <div className="career-opening pt-5 pb-3 border-bottom">
                {/* Replaced d-flex with Bootstrap's row */}
                <div className="row align-items-end">

                    {/* Left Column: Takes up 8 of 12 columns on medium screens and up */}
                    <div className="col-md-8">
                        <div className='padding-left'>
                            <h5 className="fw-bold mb-1">Lead Interior Designer</h5>
                            <p className="mb-0 opening">Interior Design</p>
                            <p className="mb-0 opening">01 Apr 2025</p>
                        </div>
                    </div>

                    {/* Right Column: Takes up 4 of 12 columns on medium screens and up */}
                    <div className="col-md-4">
                        {/* Aligns content to the right edge of the column */}
                        <div className="text-end">
                            <div className="d-flex align-items-center justify-content-end mb-3">
                                <img
                                    src={locationIcon.src}
                                    alt="Location"
                                    className="me-2"
                                    style={{ width: '16px', height: '16px' }}
                                />
                                <span>Mumbai</span>
                            </div>
                            <button className="btn btn-outline-dark">Submit CV</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="career-opening pt-5 pb-3 border-bottom">
                {/* Replaced d-flex with Bootstrap's row */}
                <div className="row align-items-end">

                    {/* Left Column: Takes up 8 of 12 columns on medium screens and up */}
                    <div className="col-md-8">
                        <div className='padding-left'>
                            <h5 className="fw-bold mb-1">Sr Architect</h5>
                            <p className="mb-0 opening">Planning, Drawing</p>
                            <p className="mb-0 opening">01 Apr 2025</p>
                        </div>
                    </div>

                    {/* Right Column: Takes up 4 of 12 columns on medium screens and up */}
                    <div className="col-md-4">
                        {/* Aligns content to the right edge of the column */}
                        <div className="text-end">
                            <div className="d-flex align-items-center justify-content-end mb-3">
                                <img
                                    src={locationIcon.src}
                                    alt="Location"
                                    className="me-2"
                                    style={{ width: '16px', height: '16px' }}
                                />
                                <span>Goa</span>
                            </div>
                            <button className="btn btn-outline-dark">Submit CV</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
};

export default ContactForm;
