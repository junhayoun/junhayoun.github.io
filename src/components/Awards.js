function Awards({yCerfList}) {
    return (
    <section className="resume-section" id="awards">
        <div className="resume-section-content">
            <h2 className="mb-5">Certifications</h2>
            <ul className="fa-ul mb-0">
            {yCerfList.map(item=>(
            <li>
                {item}
                    <br/>
                    <br/>
            </li>
            ))}

            </ul>
        </div>
    </section>
    );
}

export default Awards;