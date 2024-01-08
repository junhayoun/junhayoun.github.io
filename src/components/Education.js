function Education({yEduList}) {
    return (
    <section className="resume-section" id="education">
        <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            {yEduList.map(item=>(
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-4">{item.eduName}</h3>
                    <div className="subheading mb-3">{item.eduType}</div>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">{item.workDate}</span></div>
            </div>
            ))}
        </div>
    </section>
    );
}

export default Education;