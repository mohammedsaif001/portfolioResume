import React from 'react'
import aboutData from '../../data/about.json'

function Info() {
    return (
        <div className="about__info grid">
            {aboutData.stats.map((stat) => (
                <div className="about__box" key={stat.id}>
                    <i className={`${stat.icon} about__icon`}></i>
                    <h3 className="about__title">{stat.title}</h3>
                    <span className="about__subtitle">{stat.subtitle}</span>
                </div>
            ))}
        </div>
    )
}

export default Info