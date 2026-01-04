import React from 'react'
import "./skills.css"
import skillsData from '../../data/skills.json'
import SkillsSection from './SkillsSection'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">{skillsData.sectionTitle}</h2>
            <span className="section__subtitle">
                {skillsData.sectionSubtitle}
            </span>
            <div className="skills__container container grid">
                {skillsData.categories.map((category) => (
                    <div className="skills__content" key={category.id}>
                        <h3 className="skills__title">{category.title}</h3>
                        <div className="skills__box">
                            <div className="skills__group">
                                {category.skills.map((skill) => (
                                    <SkillsSection
                                        key={skill.id}
                                        skill={skill.skill}
                                        exp={skill.exp}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills