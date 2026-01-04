import React, { useState, useEffect } from 'react'
import "./header.css"
import navigationData from '../../data/navigation.json'

function Header() {
    // Toggle Menu
    const [toggle, setToggle] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")

    // Change Background Header
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header")
            // If scroll is higher than 80 viewport height, add the scroll-header class
            if (window.scrollY >= 80) {
                header?.classList.add("scroll-header")
            } else {
                header?.classList.remove("scroll-header")
            }
        }

        window.addEventListener("scroll", handleScroll)

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">{navigationData.logo}</a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {navigationData.links.map((link) => (
                            <li className="nav__item" key={link.id}>
                                <a
                                    href={link.href}
                                    onClick={() => setActiveNav(link.href)}
                                    className={activeNav === link.href ? "nav__link active-link" : "nav__link"}
                                >
                                    <i className={`uil ${link.icon} nav__icon`}></i>{link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="uil uil-times nav__close"
                        onClick={() => setToggle(false)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setToggle(false);
                            }
                        }}
                        aria-label="Close navigation menu"
                        type="button"
                    ></button>
                </div>
                <button
                    className="nav__toggle"
                    onClick={() => setToggle(!toggle)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setToggle(!toggle);
                        }
                    }}
                    aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={toggle}
                    type="button"
                >
                    <i className="uil uil-apps"></i>
                </button>
            </nav>
        </header>
    )
}

export default Header