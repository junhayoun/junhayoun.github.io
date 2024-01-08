function CompletEdu({yCoEduList}) {
    return (
    <section className="resume-section" id="completeedu">
        <div className="resume-section-content">
            <h2 className="mb-5">Complete Edu</h2>
            {yCoEduList.map(item=>(
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">{item.eduName}</h3>
                    <div className="subheading mb-3">{item.eduType}</div>
                    {item.eduDescList.map(item=>(
                        <div>{`* ${item}`}</div>
                    ))}

                </div>
                <div className="flex-shrink-0"><span className="text-primary">{item.eduDate}</span></div>
            </div>
            ))}
        </div>
    </section>
    );
}

export default CompletEdu;