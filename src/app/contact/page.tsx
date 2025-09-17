    'use client';
    import Footer from "../Components/Footer"
    import Headerwhitebg from "../Components/Headerwhitebg"
    import styles from '../assets/styles/Header.module.css'
    import ContactHero from '../Components/Contacthero';
    import ContactForm from '../Components/Contactform';


    export default function works() {
        return (
            <section>
                <header className={`${styles.header} bg-white fixed`}>
                    <nav className="navbar navbar-news navbar-expand-lg">
                        <Headerwhitebg />
                    </nav>
                </header>
                <ContactHero />
                <ContactForm />
                <Footer />
            </section>
        );
    }
