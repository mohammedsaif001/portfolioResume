import React from 'react'
import "./footer.css"
import navigationData from '../../data/navigation.json'
import socialData from '../../data/social.json'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">{navigationData.logo}</h1>
                <ul className="footer__list">
                    {navigationData.links.map(link => (
                        // Simply exclude Home/Contact if desired, or show all. 
                        // Showing all is safer for "dynamic" requirement.
                        // But usually 'Home' link in footer isn't common if title links there.
                        // Let's just show all for now as it makes it fully data driven.
                        <li className="footer__link" key={link.id}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="footer__social ">
                    {socialData.links.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            className="footer__social-icon footer__social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.ariaLabel}
                        >
                            <i className={link.icon}></i>
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    )
}

export default Footer