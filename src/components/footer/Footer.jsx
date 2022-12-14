import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Mohammed Saif</h1>
                <ul className="footer__list">
                    <li className="footer__link"><a href="#about">About</a></li>
                    <li className="footer__link"><a href="#skills">Skills</a></li>
                    <li className="footer__link"><a href="#qualification">Qualification</a></li>
                </ul>

                <div className="footer__social ">
                    <a href="https://www.instagram.com/mohammedsaif001/" className="footer__social-icon footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mohammedsaif001/" className="footer__social-icon footer__social-link" target="_blank">
                        <i className="bx uil-linkedin-alt"></i>
                    </a>
                    <a href="https://twitter.com/mohammed001saif" className="footer__social-icon footer__social-link" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer