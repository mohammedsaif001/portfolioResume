import React from 'react'

function Info() {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bxs-book-bookmark about__icon'></i>
                <h3 className="about__title">Education Qualification</h3>
                <span className="about__subtitle">B.Tech CSE</span>

            </div>
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Software Engineer</h3>
                <span className="about__subtitle">
                    ReactJs Developer
                </span>
            </div>
            <div className="about__box">
                <i className='bx bx-plus-medical about__icon'></i>

                <h3 className="about__title">Community Volunteer</h3>
                <span className="about__subtitle">
                    Heal Bengaluru
                </span>
            </div>

        </div>
    )
}

export default Info