import React from 'react'

const Skill1 = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Tools/Libraries</h3>
            <div className="skills__box">
                <div div className="skills__group" >

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Material UI</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">React Redux</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    {/* <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">React Flow</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div> */}
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

