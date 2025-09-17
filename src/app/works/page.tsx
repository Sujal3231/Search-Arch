import WorkCards from "../Components/WorkCards";
import Footer from "../Components/Footer";
import Headerwhitebg from "../Components/Headerwhitebg";
import styles from "../assets/styles/Header.module.css";

export default function Works() {
  return (
    <div>
      <header className={`${styles.header} fixed bg-white wide-container`}>
        <div className="Navigation-wrapper container-nav">
          <nav className="navbar navbar-expand-lg">
            <Headerwhitebg />
          </nav>
        </div>
      </header>

      <WorkCards />
      
      <Footer />
    </div>
  );
}