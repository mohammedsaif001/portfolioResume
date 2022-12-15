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
        <section className="services section" id="services">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Work Experience & Personal Projects</span>

            <div className="services__container container grid">
                <div className="services__content ">
                    <div>
                        <i className="uil uil-web-grid services__icon">
                        </i>
                        <h3 className="services__title">Nviera Project</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "services__modal active__modal" : "services__modal"}>
                        <div className='services__modal-content '>
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Nviera Project</h3>
                            <p className="services__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem officiis molestias. Recusandae deleniti enim magni illo aliquam corrupti provident.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon">
                        </i>
                        <h3 className="services__title">Medical Image <br />Denoising</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right services__button-icon" ></i>
                    </span>
                    <div className={toggleState === 2 ? "services__modal active__modal" : "services__modal"}>
                        <div className='services__modal-content '>
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Medical Image Denoising</h3>
                            <p className="services__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem officiis molestias. Recusandae deleniti enim magni illo aliquam corrupti provident.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon">
                        </i>
                        <h3 className="services__title">News <br /> Flash</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 3 ? "services__modal active__modal" : "services__modal"}>
                        <div className='services__modal-content '>
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">News Flash</h3>
                            <p className="services__modal-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem officiis molestias. Recusandae deleniti enim magni illo aliquam corrupti provident.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Cretae Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
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