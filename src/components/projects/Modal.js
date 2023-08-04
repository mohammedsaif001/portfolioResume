const Modal = ({ toggleState, toggleTab, title, modalTitle, descriptionBulletin, icon, link, toggleTabValue }) => {
    return (
        <div className="projects__content ">
            <div>
                <i className={`uil ${icon} projects__icon`}></i>
                <h3 className="projects__title">{title}</h3>
            </div>
            <span className="projects__button" onClick={() => toggleTab(toggleTabValue)}>
                View More
                <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>
            <div
                className={
                    toggleState == toggleTabValue
                        ? "projects__modal active__modal"
                        : "projects__modal"
                }
            >
                <div className="projects__modal-content ">
                    <i
                        className="uil uil-times projects__modal-close"
                        onClick={() => toggleTab(0)}
                    ></i>
                    <h3 className="projects__modal-title">{modalTitle}</h3>
                    <ul className="projects__modal-projects grid">
                        {descriptionBulletin.map((desc, index) => (
                            <li className="projects__modal-project" key={index}>
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                    {desc}
                                </p>
                            </li>
                        ))}
                        {link && <li className="projects__modal-project">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">
                                To view this website on github,&nbsp;
                                <a
                                    href={`${link}`}
                                    style={{ color: "black" }}
                                >
                                    Click here.
                                </a>
                            </p>
                        </li>}


                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Modal