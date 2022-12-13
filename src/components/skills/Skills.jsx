import React from 'react'
import Skill1 from './Skill1'
import Skill2 from './Skill2'
import "./skills.css"

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">
                My Technical Level
            </span>
            <div className="skills__container container grid">
                <Skill2 />
                <Skill1 />
            </div>
        </section>
    )
}

export default Skills