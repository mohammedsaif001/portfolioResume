import React, { useState, useEffect } from 'react'
import "./header.css"

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
                <a href="index.html" className="nav__logo">Mohammed Saif</a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === '#home' ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className={activeNav === '#about' ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav("#about")}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className={activeNav === '#skills' ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav("#skills")}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li> <li className="nav__item">
                            <a href="#projects" className={activeNav === '#projects' ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav("#projects")}>
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" className={activeNav === '#qualification' ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav("#qualification")}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Qualification
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className={activeNav === '#contact' ? "nav__link active-link" : "nav__link"} onClick={() => setActiveNav("#contact")}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
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