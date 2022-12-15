import React, { useState } from 'react'
import "./project.css"
const Project = () => {
    const [toggleState, setToggleState] = useState(0)
    const [isToggle, setIsToggle] = useState(false)
    const toggleTab = (index) => {
        setToggleState(index)
        if (index > 0) {
            setIsToggle(true)
        } else {
            setIsToggle(false)
        }
    }

    isToggle ? document.body.style.overflow = 'hidden' : document.body.style.removeProperty('overflow');

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Work Experience & Personal Projects</span>

            <div className="projects__container container grid">
                <div className="projects__content ">
                    <div>
                        <i className="uil uil-web-grid projects__icon">
                        </i>
                        <h3 className="projects__title">Nviera Project</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "projects__modal active__modal" : "projects__modal"}>
                        <div className='projects__modal-content '>
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">Nviera Project</h3>
                            <p className="projects__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem officiis molestias. Recusandae deleniti enim magni illo aliquam corrupti provident.
                            </p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects__content">
                    <div>
                        <i className="uil uil-arrow projects__icon">
                        </i>
                        <h3 className="projects__title">Medical Image <br />Denoising</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right projects__button-icon" ></i>
                    </span>
                    <div className={toggleState === 2 ? "projects__modal active__modal" : "projects__modal"}>
                        <div className='projects__modal-content '>
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">Medical Image Denoising</h3>
                            <p className="projects__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem officiis molestias. Recusandae deleniti enim magni illo aliquam corrupti provident.
                            </p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects__content">
                    <div>
                        <i className="uil uil-edit projects__icon">
                        </i>
                        <h3 className="projects__title">News <br /> Flash</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>
                    <div className={toggleState === 3 ? "projects__modal active__modal" : "projects__modal"}>
                        <div className='projects__modal-content '>
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">News Flash</h3>
                            <p className="projects__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem officiis molestias. Recusandae deleniti enim magni illo aliquam corrupti provident.
                            </p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project