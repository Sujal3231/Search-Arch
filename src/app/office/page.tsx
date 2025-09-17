import Header from "../Components/Headerwhitebg"
import OfficeAbout from "../Components/OfficeAbout"
import OfficeTeam from "../Components/OfficeTeam"
import OfficeLeadership from "../Components/OfficeLeadership"
import OfficeClients from "../Components/OfficeClients"
import OfficeTestinomials from "../Components/OfficeTestinomials"
import OfficeAccolades from "../Components/OfficeAccolades"
import Footer from "../Components/Footer"
import Headerwhitebg from "../Components/Headerwhitebg"
import styles from "../assets/styles/Header.module.css"

export default function Office() {
  return (
    <div>
      <div className="about-section py-5">
        <header className={`${styles.header} fixed bg-white wide-container`}>
          <div className="Navigation-wrapper container-nav">
            <nav className="navbar navbar-expand-lg">
            <Headerwhitebg />
            </nav>
          </div>
        </header>
        <div className="container">
          <div className="align-about">
            <OfficeAbout />
            <OfficeTeam />
            <OfficeLeadership />
            <OfficeClients />
            <OfficeTestinomials />
            <OfficeAccolades />

          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
