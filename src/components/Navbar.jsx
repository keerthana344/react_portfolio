import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navLinks.map((l) => l.href.substring(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setMobileOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
            <div className="navbar__container container">
                <a href="#home" className="navbar__logo" onClick={(e) => handleClick(e, "#home")}>
                    <span className="navbar__logo-symbol">K</span>
                    <span className="navbar__logo-text">Keerthana</span>
                </a>

                <div className={`navbar__links ${mobileOpen ? "navbar__links--open" : ""}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`navbar__link ${activeSection === link.href.substring(1) ? "navbar__link--active" : ""}`}
                            onClick={(e) => handleClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <button
                    className={`navbar__toggle ${mobileOpen ? "navbar__toggle--open" : ""}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
