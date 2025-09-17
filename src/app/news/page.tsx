'use client';
import Footer from "../Components/Footer"
import Headerwhitebg from "../Components/Headerwhitebg"
import Navbar from '../Components/Navbarwork';
import PressRelease from '../Components/PressRelease';
import Videos from '../Components/PressVideos';
import Publications from '../Components/Publication';
import styles from '../assets/styles/Header.module.css'


export default function works() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="full">
            <main className="content-wrapper">
                <header className={`${styles.header} bg-white fixed`}>
                    <nav className="navbar navbar-news navbar-expand-lg">
                        <Headerwhitebg />
                    </nav>
                    <nav className="section-navbar mt-2 navbar-expand-lg">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse justify-content-end">
                                <Navbar scrollToSection={scrollToSection} />
                            </div>
                        </div>
                    </nav>
                </header>


                <div className="content-news">
                    <PressRelease />
                    <Videos />
                    <Publications />
                </div>
            </main>
            <Footer />
        </div>
    );
}
