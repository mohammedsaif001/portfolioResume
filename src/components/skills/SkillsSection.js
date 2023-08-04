const SkillsSection = ({ skill, exp }) => {
    return (
        <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
                <h3 className="skills__name">{skill}</h3>
                <span className="skills__level">{exp}</span>
            </div>
        </div>
    )
}
export default SkillsSection