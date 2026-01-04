import React from 'react'
import skills1 from '../../constant/Skills1'
import SkillsSection from './SkillsSection'

const Skill1 = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Tools/Libraries</h3>
            <div className="skills__box">
                <div className="skills__group">

                    {skills1.map((skill) => (
                        <SkillsSection key={skill.id} skill={skill.skill} exp={skill.exp} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skill1

