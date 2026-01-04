import { motion } from 'framer-motion'
import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ toggleState, toggleTab, title, modalTitle, descriptionBulletin, icon, link, toggleTabValue }) => {
    
    // Create the modal content
    const modalContent = (
        <div
            className={
                toggleState === toggleTabValue
                    ? "projects__modal active__modal"
                    : "projects__modal"
            }
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${toggleTabValue}`}
        >
            <div className="projects__modal-content ">
                <button
                    className="uil uil-times projects__modal-close"
                    onClick={() => toggleTab(0)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
                            e.preventDefault();
                            toggleTab(0);
                        }
                    }}
                    aria-label="Close modal"
                    type="button"
                ></button>
                <h3 className="projects__modal-title" id={`modal-title-${toggleTabValue}`}>{modalTitle}</h3>
                <ul className="projects__modal-projects grid">
                    {descriptionBulletin.map((desc, index) => (
                        <li className="projects__modal-project" key={index}>
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">
                                {desc}
                            </p>
                        </li>
                    ))}
                    {link && <li className="projects__modal-project">
                        <i className="uil uil-check-circle projects__modal-icon"></i>
                        <p className="projects__modal-info">
                            To view this website on github,&nbsp;
                            <a
                                href={`${link}`}
                                style={{ color: "black" }}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View project on GitHub"
                            >
                                Click here.
                            </a>
                        </p>
                    </li>}
                </ul>
            </div>
        </div>
    );

    return (
        <motion.div 
            className="projects__content glass"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: toggleTabValue * 0.1 }}
            whileHover={{ y: -5 }}
        >
            <div>
                <i className={`uil ${icon} projects__icon`}></i>
                <h3 className="projects__title">{title}</h3>
            </div>
            <button 
                className="projects__button" 
                onClick={() => toggleTab(toggleTabValue)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleTab(toggleTabValue);
                    }
                }}
                aria-label={`View more details about ${title}`}
                type="button"
            >
                View More
                <i className="uil uil-arrow-right projects__button-icon"></i>
            </button>
            
            {/* Render modal using Portal to escape the motion.div transform context */}
            {ReactDOM.createPortal(modalContent, document.body)}
        </motion.div>
    )
}
export default Modal