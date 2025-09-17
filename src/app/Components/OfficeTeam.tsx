'use client';

import Image from "next/image"; 
import OfficeTeam from "../assets/Images/officeteam.webp";
export default function team() {
    return (
        <div>
            <div className="row mb-5">
                <div className="col-md-3 Desc">
                    <div className="justify-content-start">
                        <h4 className="Team-Title">
                            Team
                        </h4>
                    </div>

                </div>
                <div className="col-md-9 Desc">
                    <div className="justify-content-start">
                        <p className="Team-p">
                            SE-ARCH is driven by a dynamic team of leaders from esteemed educational backgrounds, bringing together diverse talent and authentic creativity. Their professionalism ensures disciplined timelines, seamless coordination with clients, consultants, and contractors, and fosters strong internal collaboration. A spirit of camaraderie and leadership cultivates a positive studio culture, while precision, attention to detail, and deep market insight enable a holistic, high-quality output. This shared sense of responsibility empowers SE-ARCH to function as a unified, coherent practice.
                        </p>
                    </div>

                </div>
            </div>
            <div className="row">
                <Image src={OfficeTeam} alt="Search Logo" className="img-fluid mt-3"/>
            </div>
            
        </div>
    );
}