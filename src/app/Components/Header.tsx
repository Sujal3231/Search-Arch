'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '../assets/styles/Header.module.css';

export default function Header() {
  return (
    <header className={`${styles.header} fixed header-transparent wide-container`}>
      <div className="Navigation-wrapper container-nav">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid navbar-container">
            <Link className="navbar-brand me-3" href="/">
              <Image src="/images/searchlogo.svg" width={194} height={35} alt="Search Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                {/* UPDATED: Links now have a simple className */}
                <ul className="navbar-nav list-inline menu custom-ml ">
                  <li className="nav-item">
                    <Link className="nav-link" href="/office">
                      office
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/works">
                      Works
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/news">
                      News
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/contact">
                      contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}