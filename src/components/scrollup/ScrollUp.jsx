import React, { useEffect } from 'react'
import "./scrollup.css"

function ScrollUp() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup")
            // If scroll is higher than 560 viewport height, add the show-scroll class
            if (window.scrollY >= 560) {
                scrollUp?.classList.add("show-scroll")
            } else {
                scrollUp?.classList.remove("show-scroll")
            }
        }

        window.addEventListener("scroll", handleScroll)

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            onClick={scrollToTop}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollToTop();
                }
            }}
            className="scrollup"
            aria-label="Scroll to top"
            type="button"
        >
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </button>
    )
}

export default ScrollUp