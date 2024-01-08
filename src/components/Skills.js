import ProgressBar from 'react-bootstrap/ProgressBar';

function Skills({ySkillList}) {
    
    const lgList = ySkillList.filter(item=>item.skillType=="lg")
    const feList = ySkillList.filter(item=>item.skillType=="fe")
    const beList = ySkillList.filter(item=>item.skillType=="be")
    console.log(lgList)
    return (
        <section className="resume-section" id="skills">
        <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Language Skills</div>
            {/* ======= */}
            <ul className="mb-3 lan-skills">
            {lgList.map(item => (
                <li className="d-flex progress-container">
                <h6 className="progress-bar-label">{item.skillName}</h6>
                <ProgressBar now={item.skillScore} style={{ width: '60%' }}/>
                </li>
            ))}
            </ul>
            <div className="subheading mb-3">Front-End Skills</div>
            {/* ======= */}
            <ul className="mb-3 lan-skills">
            {feList.map(item => (
                <li className="d-flex progress-container">
                <h6 className="progress-bar-label">{item.skillName}</h6>
                <ProgressBar now={item.skillScore} style={{ width: '60%' }}/>
                </li>
            ))}
            </ul>
            <div className="subheading mb-3">Back-End Skills</div>
            {/* ======= */}
            <ul className="mb-3 lan-skills">
            {beList.map(item => (
                <li className="d-flex progress-container">
                <h6 className="progress-bar-label">{item.skillName}</h6>
                <ProgressBar now={item.skillScore} style={{ width: '60%' }}/>
                </li>
            ))}
            </ul>
        </div>
    </section>
    );
}

export default Skills;