import React, { useState } from "react";
import "./project.css";
import Modal from "./Modal";
import projectsData from "../../data/projects.json";

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
            <h2 className="section__title">
                {projectsData.sectionIcon && <i className={`${projectsData.sectionIcon} section__title-icon`}></i>}
                {projectsData.sectionTitle}
            </h2>
            <span className="section__subtitle">
                {projectsData.sectionSubtitle}
            </span>

            <div className="projects__container container grid">
                {projectsData.projects.map((project) => (
                    <Modal
                        key={project.id}
                        toggleState={toggleState}
                        toggleTab={toggleTab}
                        descriptionBulletin={project.descriptionBulletin}
                        title={project.title}
                        modalTitle={project.modalTitle}
                        icon={project.icon}
                        link={project.link}
                        toggleTabValue={project.id}
                    />
                ))}

            </div>
        </section>
    );
};

export default Project;
