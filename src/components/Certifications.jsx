import { profileData } from "../data";
import "./Certifications.css";

export default function Certifications() {
    const { certifications } = profileData;

    return (
        <section id="certifications" className="certifications section">
            <div className="bg-glow bg-glow-3"></div>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Achievements</span>
                    <h2 className="section-title">Certifications</h2>
                    <p className="section-subtitle">
                        Professional milestones and learning achievements
                    </p>
                </div>

                <div className="certifications__grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certifications__card glass-card animate-on-scroll">
                            <div className="certifications__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 15l-2 5l2 2l2 -2l-2 -5" />
                                    <path d="M15 7a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h6z" />
                                    <path d="M10 10l4 0" />
                                    <path d="M10 13l4 0" />
                                </svg>
                            </div>
                            <div className="certifications__details">
                                <h3 className="certifications__title">{cert.title}</h3>
                                <p className="certifications__issuer">{cert.issuer}</p>
                                <p className="certifications__date">{cert.date}</p>
                                {cert.link && cert.link !== "#" && (
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certifications__link">
                                        View Credential
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
