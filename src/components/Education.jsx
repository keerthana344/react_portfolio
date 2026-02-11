import { profileData } from "../data";
import "./Education.css";

export default function Education() {
    const { education } = profileData;

    return (
        <section id="education" className="education section">
            <div className="bg-glow bg-glow-2"></div>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Education</span>
                    <h2 className="section-title">Academic Journey</h2>
                    <p className="section-subtitle">
                        My educational background that built the foundation for my career
                    </p>
                </div>

                <div className="education__timeline">
                    {education.map((item, index) => (
                        <div key={index} className="education__item animate-on-scroll">
                            <div className="education__marker">
                                <div className="education__dot"></div>
                                {index < education.length - 1 && <div className="education__line"></div>}
                            </div>
                            <div className="education__card glass-card">
                                <div className="education__year">{item.year}</div>
                                <h3 className="education__degree">{item.degree}</h3>
                                <p className="education__institution">{item.institution}</p>
                                <p className="education__description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
