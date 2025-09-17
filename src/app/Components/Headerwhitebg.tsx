'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Headerwhitebg() {
  const pathname = usePathname();

  // 1. UPDATE THIS LINE: Add the special class only for the '/office' page, otherwise add nothing.
  const paddingClass = pathname === '/office' ? 'office-page-padding' : '';

  return (
    // 2. The className logic remains the same. It will now add 'office-page-padding' or an empty string.
    <div className={`container-fluid gap-3 navbar-container header-white-bg ${paddingClass}`}>
      <Link className="navbg" href="/">
        <Image src="/images/secondlogo.svg" width={194.3} height={38} alt="Search Logo" priority/>
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
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body justify-content-end">
          <ul className="navbar-nav list-inline-bg menu custom-ml">
            {[
              { href: '/office', label: 'office' },
              { href: '/works', label: 'Works' },
              { href: '/news', label: 'News' },
              { href: '/contact', label: 'contact' },
            ].map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  className={`nav-link-grey ${pathname === href ? 'nav-link-grey-active' : 'nav-link-black'}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}