import React, { useState } from 'react'
import './recommendations.css'
import recommendationsData from '../../data/recommendations.json'
import { motion, AnimatePresence } from 'framer-motion'

const Recommendations = () => {
    const [selectedRec, setSelectedRec] = useState(null)

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .substring(0, 2)
    }

    const truncateText = (text, maxLength = 150) => {
        if (text.length <= maxLength) return text
        return text.substring(0, maxLength) + '...'
    }

    const openModal = (rec) => {
        setSelectedRec(rec)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setSelectedRec(null)
        document.body.style.overflow = 'auto'
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
                            transition={{ delay: index * 0.08, duration: 0.4 }}
                        >
                            <div className="recommendation__quote-icon">
                                <i className="uil uil-quote-left"></i>
                            </div>
                            
                            <div className="recommendation__text-container">
                                <p className="recommendation__text">
                                    {truncateText(rec.text)}
                                </p>
                            </div>

                            {rec.text.length > 150 && (
                                <button 
                                    className="recommendation__read-more"
                                    onClick={() => openModal(rec)}
                                >
                                    <span>Read Full Recommendation</span>
                                    <i className="uil uil-arrow-right"></i>
                                </button>
                            )}

                            <div className="recommendation__divider"></div>

                            <div className="recommendation__author">
                                <div className="recommendation__avatar">
                                    {getInitials(rec.name)}
                                </div>
                                <div className="recommendation__author-info">
                                    {rec.linkedinUrl ? (
                                        <a
                                            href={rec.linkedinUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="recommendation__name-link"
                                            aria-label={`View ${rec.name}'s LinkedIn profile`}
                                        >
                                            <h4 className="recommendation__name">{rec.name}</h4>
                                        </a>
                                    ) : (
                                        <h4 className="recommendation__name">{rec.name}</h4>
                                    )}
                                    <p className="recommendation__position">{rec.position}</p>
                                    <div className="recommendation__meta">
                                        <span className="recommendation__relationship">
                                            <i className="uil uil-users-alt"></i>
                                            {rec.relationship}
                                        </span>
                                        <span className="recommendation__date">
                                            <i className="uil uil-calendar-alt"></i>
                                            {new Date(rec.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedRec && (
                    <motion.div
                        className="recommendation__modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="recommendation__modal glass"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="recommendation__modal-close" onClick={closeModal}>
                                <i className="uil uil-times"></i>
                            </button>

                            <div className="recommendation__modal-header">
                                <div className="recommendation__modal-avatar">
                                    {getInitials(selectedRec.name)}
                                </div>
                                <div className="recommendation__modal-info">
                                    <div className="recommendation__modal-name-row">
                                        <h3 className="recommendation__modal-name">{selectedRec.name}</h3>
                                        {selectedRec.linkedinUrl && (
                                            <a
                                                href={selectedRec.linkedinUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="recommendation__linkedin-button"
                                                aria-label={`View ${selectedRec.name}'s LinkedIn profile`}
                                            >
                                                <i className="uil uil-linkedin-alt"></i>
                                            </a>
                                        )}
                                    </div>
                                    <p className="recommendation__modal-position">{selectedRec.position}</p>
                                    <div className="recommendation__modal-meta">
                                        <span>
                                            <i className="uil uil-users-alt"></i>
                                            {selectedRec.relationship}
                                        </span>
                                        <span>
                                            <i className="uil uil-calendar-alt"></i>
                                            {new Date(selectedRec.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="recommendation__modal-divider"></div>

                            <div className="recommendation__modal-body">
                                <div className="recommendation__modal-quote">
                                    <i className="uil uil-quote-left"></i>
                                </div>
                                <p className="recommendation__modal-text">{selectedRec.text}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Recommendations
