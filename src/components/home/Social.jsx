import React from 'react'

function Social() {
    return (
        <div className='home__social'>

            <a
                href="mailto:mohammed001saif@gmail.com"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send email to Mohammed Saif"
            >
                <i className="bx bx-mail-send"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/mohammedsaif001/"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Mohammed Saif's LinkedIn profile"
            >
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
                href="https://github.com/mohammedsaif001"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Mohammed Saif's GitHub profile"
            >
                <i className="uil uil-github-alt"></i>
            </a>
            <a
                href="https://twitter.com/mohammed001saif"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Mohammed Saif's Twitter profile"
            >
                <i className="uil uil-twitter-alt"></i>
            </a>

        </div>
    )
}

export default Social