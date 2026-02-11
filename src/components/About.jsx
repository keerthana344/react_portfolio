import { profileData } from "../data";
import "./About.css";

export default function About() {
    const { about, name } = profileData;

    return (
        <section id="about" className="about section">
            <div className="bg-glow bg-glow-2"></div>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">Get To Know Me</h2>
                    <p className="section-subtitle">
                        A glimpse into who I am and what drives me forward
                    </p>
                </div>

                <div className="about__content animate-on-scroll">
                    <div className="about__text">
                        <div className="about__avatar">
                            <div className="about__avatar-ring">
                                <div className="about__avatar-inner">
                                    <span className="about__avatar-letter">{name.charAt(0)}</span>
                                </div>
                            </div>
                        </div>
                        <p className="about__description">{about.description}</p>
                    </div>

                    <div className="about__stats">
                        {about.stats.map((stat, index) => (
                            <div key={index} className="about__stat glass-card">
                                <span className="about__stat-value">{stat.value}</span>
                                <span className="about__stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
