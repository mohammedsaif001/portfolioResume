import React from 'react'
import skills2 from '../../constant/Skills2'
import SkillsSection from './SkillsSection'

const Skill2 = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Technical Expertise</h3>
            <div className="skills__box">
                <div className="skills__group">
                    {skills2.map((skill) => (
                        <SkillsSection key={skill.id} skill={skill.skill} exp={skill.exp} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Skill2