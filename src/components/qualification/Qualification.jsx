import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(2)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="qualification section" id="skills">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Achievements</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.Tech Computer Science & Engneering</h3>
                                <span className="qualification__subtitle"> Presidency University
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i>
                                    2018-2022
                                </div>
                            </div>
                            <div><span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div><span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">II PUC</h3>
                                <span className="qualification__subtitle"> Huda National PU College
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i>
                                    2017-2018
                                </div>

                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">S.S.L.C</h3>
                                <span className="qualification__subtitle">Huda National School
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i>
                                    2015-2016
                                </div>

                            </div>
                            <div><span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle"> Nviera Technologies Pvt Ltd
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i>
                                    July 2022 - Present
                                </div>

                            </div>
                            <div><span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div><span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    ERT Volunteer (Covid-19) | Community Volunteer</h3>
                                <span className="qualification__subtitle"> Heal Bengaluru
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i>
                                    April 2021 - June 2022
                                </div>

                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Fundraiser</h3>
                                <span className="qualification__subtitle">Muskurahat Foundation
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i>
                                    February 2022 - March 2022
                                </div>

                            </div>
                            <div><span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div><span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Covid Warrior</h3>
                                <span className="qualification__subtitle"> Heal Bengaluru
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                    </i>
                                    April 2021 - June 2022
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification