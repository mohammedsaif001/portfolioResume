import React, { useState } from 'react'
import './recommendations.css'
import recommendationsData from '../../data/recommendations.json'
import { motion } from 'framer-motion'

const Recommendations = () => {
    const [expandedId, setExpandedId] = useState(null)

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id)
    }

    const truncateText = (text, maxLength = 200) => {
        if (text.length <= maxLength) return text
        return text.substring(0, maxLength) + '...'
    }

    return (
        <section className="recommendations section" id="recommendations">
            <h2 className="section__title gradient-text">{recommendationsData.sectionTitle}</h2>
            <span className="section__subtitle">
                {recommendationsData.sectionSubtitle}
            </span>

            <div className="recommendations__container container">
                <div className="recommendations__grid">
                    {recommendationsData.recommendations.map((rec, index) => (
                        <motion.div
                            className="recommendation__card glass"
                            key={rec.id}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                            <div className="recommendation__header">
                                <div className="recommendation__info">
                                    <h3 className="recommendation__name">{rec.name}</h3>
                                    <p className="recommendation__position">{rec.position}</p>
                                    <p className="recommendation__relationship">{rec.relationship}</p>
                                </div>
                            </div>
                            
                            <div className="recommendation__body">
                                <p className="recommendation__text">
                                    {expandedId === rec.id ? rec.text : truncateText(rec.text)}
                                </p>
                                {rec.text.length > 200 && (
                                    <button 
                                        className="recommendation__toggle"
                                        onClick={() => toggleExpand(rec.id)}
                                    >
                                        {expandedId === rec.id ? 'Show Less' : 'Read More'}
                                    </button>
                                )}
                            </div>
                            
                            <div className="recommendation__footer">
                                <i className="uil uil-calendar-alt"></i>
                                <span className="recommendation__date">{rec.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Recommendations
