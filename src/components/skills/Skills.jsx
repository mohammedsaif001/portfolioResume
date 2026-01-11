import React from 'react'
import "./skills.css"
import skillsData from '../../data/skills.json'
import SkillsSection from './SkillsSection'
import { motion } from "framer-motion"

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title gradient-text">{skillsData.sectionTitle}</h2>
            <span className="section__subtitle">
                {skillsData.sectionSubtitle}
            </span>
            <div className="skills__container container grid">
                {skillsData.categories.map((category, index) => (
                    <motion.div
                        className="skills__content glass"
                        key={category.id}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05, duration: 0.1 }}
                        whileHover={{ scale: 1.02 }}
                    >
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
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Skills