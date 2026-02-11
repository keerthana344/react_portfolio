import { profileData } from "../data";
import "./Footer.css";

export default function Footer() {
    const { name, linkedin, github, email } = profileData;
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <span className="footer__logo">
                            <span className="footer__logo-symbol">K</span>
                            <span className="footer__logo-text">{name}</span>
                        </span>
                        <p className="footer__tagline">Building the future, one line of code at a time.</p>
                    </div>

                    <div className="footer__links">
                        <h4 className="footer__heading">Quick Links</h4>
                        <a href="#home" className="footer__link">Home</a>
                        <a href="#about" className="footer__link">About</a>
                        <a href="#skills" className="footer__link">Skills</a>
                        <a href="#projects" className="footer__link">Projects</a>
                        <a href="#contact" className="footer__link">Contact</a>
                    </div>

                    <div className="footer__social">
                        <h4 className="footer__heading">Connect</h4>
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
                        <a href={`mailto:${email}`} className="footer__link">Email</a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {year} {name}. Crafted with ❤️ and React.</p>
                </div>
            </div>
        </footer>
    );
}
