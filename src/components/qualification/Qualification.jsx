import React, { useState } from 'react'
import "./qualification.css"
import qualificationData from '../../data/qualification.json'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(qualificationData.defaultTab === 'experience' ? 2 : 1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const renderQualificationData = (items) => {
        return items.map((item, index) => (
            <div className="qualification__data" key={item.id}>
                {item.position === 'left' && (
                    <>
                        <div>
                            <h3 className="qualification__title">{item.title}</h3>
                            <span className="qualification__subtitle">
                                {item.institution || item.company}
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>&nbsp;
                                {item.period}
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </>
                )}
                {item.position === 'right' && (
                    <>
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">{item.title}</h3>
                            <span className="qualification__subtitle">
                                {item.institution || item.company}
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>&nbsp;
                                {item.period}
                            </div>
                        </div>
                    </>
                )}
            </div>
        ))
    }

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">
                {qualificationData.sectionIcon && <i className={`${qualificationData.sectionIcon} section__title-icon`}></i>}
                {qualificationData.sectionTitle}
            </h2>
            <span className="section__subtitle">{qualificationData.sectionSubtitle}</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    {qualificationData.tabs.map((tab, index) => (
                        <div
                            key={tab.id}
                            className={toggleState === index + 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                            onClick={() => toggleTab(index + 1)}
                        >
                            <i className={`uil ${tab.icon} qualification__icon`}></i> {tab.label}
                        </div>
                    ))}
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {renderQualificationData(qualificationData.education)}
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {renderQualificationData(qualificationData.experience)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification