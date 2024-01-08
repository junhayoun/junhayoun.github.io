function Experience({yWorkList}) {
    return (
    <section className="resume-section" id="experience">
        <div className="resume-section-content">
            <h2 className="mb-5">Work Experience</h2>
            {yWorkList.map(item=>(            
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">{item.workName}</h3>
                    <div className="subheading mb-3">{item.workType}</div>
                    <p>{item.workDesc}</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">{item.workDate}</span></div>
            </div>
            ))}
        </div>
    </section>
    );
}

export default Experience;