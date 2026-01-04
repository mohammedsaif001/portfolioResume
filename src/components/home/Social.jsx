import React from 'react'
import socialData from '../../data/social.json'

function Social() {
    return (
        <div className='home__social'>
            {socialData.links.map((link) => (
                <a 
                    key={link.id}
                    href={link.url}
                    className="home__social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                >
                    <i className={link.icon}></i>
                </a>
            ))}
        </div>
    )
}

export default Social