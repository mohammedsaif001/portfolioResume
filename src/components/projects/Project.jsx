import React, { useState } from "react";
import "./project.css";
const Project = () => {
    const [toggleState, setToggleState] = useState(0);
    const [isToggle, setIsToggle] = useState(false);
    const toggleTab = (index) => {
        setToggleState(index);
        if (index > 0) {
            setIsToggle(true);
        } else {
            setIsToggle(false);
        }
    };

    isToggle
        ? (document.body.style.overflow = "hidden")
        : document.body.style.removeProperty("overflow");

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">
                Work Experience & Personal Projects
            </span>

            <div className="projects__container container grid">
                <div className="projects__content ">
                    <div>
                        <i className="uil uil-web-grid projects__icon"></i>
                        <h3 className="projects__title">Professional Experience</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>
                    <div
                        className={
                            toggleState === 1
                                ? "projects__modal active__modal"
                                : "projects__modal"
                        }
                    >
                        <div className="projects__modal-content ">
                            <i
                                className="uil uil-times projects__modal-close"
                                onClick={() => toggleTab(0)}
                            ></i>
                            <h3 className="projects__modal-title">Professional Experience at Nviera Technologies Pvt Ltd</h3>
                            {/* <p className="projects__modal-description">
                                Technical proficiency in creating and modifying software in a quick-paced, agile setting while utilising the most recent infrastructure and development approaches.
                            </p> */}
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Technical proficiency in creating and modifying software in
                                        a quick-paced, agile setting while utilising the most recent
                                        infrastructure and development approaches.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Relentlessly enhanced software quality with a sharp eye for
                                        reusability, security, testability, and performance while
                                        iterating on the development process to enable new
                                        functionality.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Hands-on experience with the React JS Framework.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Excellent grasp and knowledge of GIT for version control.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects__content">
                    <div>
                        <i className="uil uil-arrow projects__icon"></i>
                        <h3 className="projects__title">
                            Medical Image <br />
                            Denoising
                        </h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>
                    <div
                        className={
                            toggleState === 2
                                ? "projects__modal active__modal"
                                : "projects__modal"
                        }
                    >
                        <div className="projects__modal-content ">
                            <i
                                className="uil uil-times projects__modal-close"
                                onClick={() => toggleTab(0)}
                            ></i>
                            <h3 className="projects__modal-title">Medical Image Denoising</h3>
                            {/* <p className="projects__modal-description" >
                                This final-year project was developed utilising the full stack, which includes React as the front-end library, AWS for cloud storage, Flask as the back-end, and Python for image denoising.
                            </p> */}
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        This final-year project was developed utilising the full
                                        stack, which includes React as the front-end library, AWS
                                        for cloud storage, Flask as the back-end, and Python for
                                        image denoising.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Creating an algorithm to denoise the medical image while
                                        retaining as much of the critical information as possible
                                        such as edges, texture, and other detailed aspects, which
                                        are more crucial for any radiologist to diagnose anomaly in
                                        anatomical images.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        In Medical Imaging Modalities like MRI, Ultrasound, and OCT
                                        (Optical Coherent Tomography) pictures, the CNN model was
                                        developed to work for various noise models and noise levels.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        To view this website,&nbsp;
                                        <a
                                            href="https://mohammedsaif001.github.io/Medical-Image-Denoising/
"
                                            style={{ color: "black" }}
                                        >
                                            Click here.
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects__content">
                    <div>
                        <i className="uil uil-edit projects__icon"></i>
                        <h3 className="projects__title">News Flash</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>
                    <div
                        className={
                            toggleState === 3
                                ? "projects__modal active__modal"
                                : "projects__modal"
                        }
                    >
                        <div className="projects__modal-content ">
                            <i
                                className="uil uil-times projects__modal-close"
                                onClick={() => toggleTab(0)}
                            ></i>
                            <h3 className="projects__modal-title">News Flash</h3>
                            {/* <p className="projects__modal-description">
                                ReactJs, BootStrap, and NewsAPI were used to develop this News Flash Website.
                            </p> */}
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        A user can access News Flash to read daily live news from India on a variety of subjects, such as sports, science, business, and much more. Here, all of the news is presented in a number of bootstrap cards for quick viewing. If a user is interested in learning more about a specific news item, he or she can click on the relevant card to be taken to the source article.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        ReactJs, BootStrap, and NewsAPI were used to develop this
                                        News Flash Website.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        This project of work features ReactRouter, a loading
                                        spinner, various categories of news in the taskbar, the
                                        date, time, and author of that particular news, as well as
                                        the news's source.
                                    </p>
                                </li>
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        It also has infinite scrolling till all the news is fetched,
                                        a top loading bar, a sticky navigation bar, and much more.
                                    </p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        To view this website on github,&nbsp;
                                        <a
                                            href="https://github.com/mohammedsaif001/ReactCourse-NewsApp"
                                            style={{ color: "black" }}
                                        >
                                            Click here.
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
