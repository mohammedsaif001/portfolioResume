import React from 'react'

const Skill1 = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Development</h3>
            <div className="skills__box">
                <div div className="skills__group" >

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">NodeJs</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}

export default Skill1
