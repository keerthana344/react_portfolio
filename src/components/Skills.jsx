import { profileData } from "../data";
import "./Skills.css";

export default function Skills() {
    const { skills } = profileData;

    return (
        <section id="skills" className="skills section">
            <div className="bg-glow bg-glow-1"></div>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">My Skills</span>
                    <h2 className="section-title">Technologies I Work With</h2>
                    <p className="section-subtitle">
                        A curated set of tools and technologies I use to bring ideas to life
                    </p>
                </div>

                <div className="skills__grid">
                    {skills.map((category, catIndex) => (
                        <div key={catIndex} className="skills__category glass-card animate-on-scroll">
                            <h3 className="skills__category-title">{category.category}</h3>
                            <div className="skills__list">
                                {category.items.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skills__item">
                                        <div className="skills__item-header">
                                            <span className="skills__item-name">{skill.name}</span>
                                            <span className="skills__item-percent">{skill.level}%</span>
                                        </div>
                                        <div className="skills__bar">
                                            <div
                                                className="skills__bar-fill"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
