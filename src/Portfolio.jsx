import React, { useState } from "react";
import "./Portfolio.css";
import shopease from './assets/shopEase.png'
import stayease from './assets/hotel.png'
import phishingDetector from "./assets/phishingDetector.png";
import aiJarvis from './assets/jarvis.png'
import photoGallery from './assets/photo-gallery.png'

const skills = [
  {
    category: "Languages",
    tags: ["Python", "JavaScript", "C/C++", "SQL", "HTML/CSS"],
  },
  {
    category: "Frontend",
    tags: ["React", "HTML", "Javascript", "CSS"],
  },
  {
    category: "Backend",
    tags: ["Node.js", "Express", "REST APIs"],
  },
  {
    category: "Databases & Cloud",
    tags: ["MongoDB", "Firebase", "MySQL basics"],
  },
  {
    category: "DevOps & Tools",
    tags: ["Git", "VS Code", "Render", "Netlify", "Postman"],
  },
];

const projects = [
  {
    featured: true,
    title: "Phishing URL Detection (Hybrid ML)",
    description:
      "A hybrid machine learning system that classifies URLs as phishing or legitimate using a combination of lexical, host-based, and content features, deployed as a full-stack web app.",
    stack: ["Python", "scikit-learn", "Flask"],
    image: phishingDetector,
    github: "https://github.com/ParulGautam2706/Phishing-Detection",
    demo: "https://phishing-detection-og43.onrender.com",
  },
  {
    featured: true,
    title: "ShopEase — E-commerce Platform",
    description:
      "A full-stack e-commerce app with product catalog, cart, checkout, and auth, deployed on Render with a MERN stack backend.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    image: shopease,
    github: "https://github.com/ParulGautam2706/snazzymart",
    demo: "",
  },
  {
    title: "StayEase — Hotel Management System",
    description:
      "A hotel booking and management system with room availability, reservations, and an admin dashboard, deployed on Render.",
    stack: ["Node.js", "MongoDB"],
    image: hotel,
    github: "https://github.com/ParulGautam2706/hotel",
    demo: "https://stayease-j55n.onrender.com",
  },
  {
    title: "AI Jarvis",
    description:
      "A personal AI assistant inspired by Jarvis, capable of voice commands, task automation, and smart responses using Python and AI APIs.",
    stack: ["Python", "Speech Recognition", "AI APIs", "Automation"],
    image: jarvis,
    github: "https://github.com/ParulGautam2706/AI-Jarvis",
    demo: "https://jarvis2706.netlify.app/",
  },
  {
    title: "Photo Gallery App",
    description:
      "A responsive photo gallery web app with image browsing, filtering, and a clean grid layout for showcasing collections.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: photo-gallery,
    github: "https://github.com/ParulGautam2706/photo-gallery-app",
    demo: "https://photot-gallery-1001.netlify.app/",
  },
];

const timeline = [
  {
    year: "2026",
    role: "Final Year Project",
    org: "B.Tech CS — Final Year",
    description:
      "Working on team-based projects combining AI/ML and full-stack development, with focus on real-world impact and clean role division.",
  },
  {
    year: "2025",
    role: "Web Development Coursework",
    org: "B.Tech CS — Third Year",
    description:
      "Studied advanced frontend (React, Angular, Redux), backend (Express, GraphQL), Docker, CI/CD, and deployment platforms.",
  },
  {
    year: "2025",
    role: "Compiler Design & Systems",
    org: "B.Tech CS — Second Year",
    description:
      "Studied compiler theory: lexing, parsing, intermediate code generation (TAC, DAGs, backpatching, quadruples/triples).",
  },
  {
    year: "2023",
    role: "B.Tech Computer Science",
    org: "Panipat Institute of Engineering and Technology, Kurukshetra University",
    description:
      "Started CS degree covering  programming fundamentals.",
  },
];

function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="pf-nav">
      <span className="pf-logo">santosh.dev</span>
      <div className="pf-nav-links">
        <a onClick={() => scrollTo("about")}>about</a>
        <a onClick={() => scrollTo("skills")}>skills</a>
        <a onClick={() => scrollTo("projects")}>projects</a>
        <a onClick={() => scrollTo("experience")}>experience</a>
        <a onClick={() => scrollTo("contact")}>contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="pf-hero">
      <p className="pf-hero-eyebrow">// hello world</p>
      <h1 className="pf-hero-name">Santosh</h1>
      <p className="pf-hero-title">CS Final Year Student &amp; Developer</p>
      <p className="pf-hero-desc">
        I build things for the web — from full-stack apps to compilers.
        Passionate about cybersecurity, AI/ML, and clean code that ships.
      </p>
      <div className="pf-hero-btns">
        <a className="pf-btn-primary" onClick={() => scrollTo("projects")}>
          View Projects
        </a>
        <a className="pf-btn-outline" onClick={() => scrollTo("contact")}>
          Get in Touch
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="pf-section" id="about">
      <p className="pf-section-label">// 01 — about</p>
      <h2 className="pf-section-title">About me</h2>
      <div className="pf-about-grid">
        <div>
          <p className="pf-about-text">
            I'm a final year Computer Science student with a love for building
            real-world systems. My journey spans compiler design, full-stack web
            development, and cybersecurity — I like to understand how things
            work under the hood.
          </p>
          <p className="pf-about-text" style={{ marginTop: "1rem" }}>
            When I'm not writing code, I'm thinking about clean role divisions
            in team projects and how technology can create genuine user impact.
          </p>
        </div>
        <div className="pf-about-facts">
          <div className="pf-fact">
            <i className="ti ti-school pf-fact-icon" aria-hidden="true"></i>
            <div>
              <div className="pf-fact-label">Degree</div>
              <div className="pf-fact-value">B.Tech Computer Science</div>
            </div>
          </div>
          <div className="pf-fact">
            <i className="ti ti-map-pin pf-fact-icon" aria-hidden="true"></i>
            <div>
              <div className="pf-fact-label">Location</div>
              <div className="pf-fact-value">Panipat, Haryana, India</div>
            </div>
          </div>
          <div className="pf-fact">
            <i className="ti ti-code pf-fact-icon" aria-hidden="true"></i>
            <div>
              <div className="pf-fact-label">Primary stack</div>
              <div className="pf-fact-value">Python · MERN</div>
            </div>
          </div>
          <div className="pf-fact">
            <i className="ti ti-heart pf-fact-icon" aria-hidden="true"></i>
            <div>
              <div className="pf-fact-label">Interests</div>
              <div className="pf-fact-value">Cybersecurity · ML · Full-stack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="pf-section" id="skills">
      <p className="pf-section-label">// 02 — skills</p>
      <h2 className="pf-section-title">Tech stack</h2>
      <div className="pf-skills-grid">
        {skills.map((skill) => (
          <div className="pf-skill-card" key={skill.category}>
            <div className="pf-skill-category">{skill.category}</div>
            <div className="pf-skill-tags">
              {skill.tags.map((tag) => (
                <span className="pf-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="pf-section" id="projects">
      <p className="pf-section-label">// 03 — projects</p>
      <h2 className="pf-section-title">What I've built</h2>
      <div className="pf-projects-grid">
        {projects.map((project) => (
          <div
            className={`pf-project-card ${project.featured ? "featured" : ""}`}
            key={project.title}
          >
            <div className="pf-project-image-wrap">
              <img
                className="pf-project-image"
                src={project.image}
                alt={`${project.title} screenshot`}
              />
            </div>
            {project.featured && (
              <span className="pf-project-badge">Featured</span>
            )}
            <h3 className="pf-project-title">{project.title}</h3>
            <p className="pf-project-desc">{project.description}</p>
            <div className="pf-project-stack">
              {project.stack.map((tech) => (
                <span className="pf-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="pf-project-links">
              {project.github && (
                <a
                  className="pf-link"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ti ti-brand-github" aria-hidden="true"></i> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  className="pf-link pf-link-demo"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ti ti-external-link" aria-hidden="true"></i> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="pf-section" id="experience">
      <p className="pf-section-label">// 04 — experience &amp; education</p>
      <h2 className="pf-section-title">Timeline</h2>
      <div className="pf-timeline">
        {timeline.map((item, idx) => (
          <div className="pf-timeline-item" key={item.role}>
            <div className="pf-timeline-left">{item.year}</div>
            <div className="pf-timeline-dot-col">
              <div className="pf-timeline-dot"></div>
              {idx !== timeline.length - 1 && (
                <div className="pf-timeline-line"></div>
              )}
            </div>
            <div className="pf-timeline-content">
              <p className="pf-timeline-role">{item.role}</p>
              <p className="pf-timeline-org">{item.org}</p>
              <p className="pf-timeline-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSent(true);
  };

  return (
    <section className="pf-section" id="contact">
      <p className="pf-section-label">// 05 — contact</p>
      <h2 className="pf-section-title">Get in touch</h2>
      <div className="pf-contact-grid">
        <div>
          <p className="pf-contact-intro">
            Open to internships, collaborations, and exciting final year project
            ideas. Drop me a message — I respond fast.
          </p>
          <div className="pf-social-links">
            <a
              className="pf-social-link"
              href="https://github.com/ParulGautam2706"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ti ti-brand-github" aria-hidden="true"></i>{" "}
              github.com/ParulGautam2706
            </a>
            <a
              className="pf-social-link"
              href="https://linkedin.com/in/santosh-gautam-07a9a12a2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ti ti-brand-linkedin" aria-hidden="true"></i>{" "}
              linkedin.com/in/santosh-gautam-07a9a12a2
            </a>
            <a
              className="pf-social-link"
              href="mailto:parulgautam9813@gmail.com"
            >
              <i className="ti ti-mail" aria-hidden="true"></i>{" "}
              parulgautam9813@gmail.com
            </a>
          </div>
        </div>
        <div>
          <form className="pf-contact-form" onSubmit={handleSubmit}>
            <input
              className="pf-input"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="pf-input"
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="pf-textarea"
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
            />
            <button className="pf-btn-primary pf-submit-btn" type="submit">
              {sent ? "Message sent ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pf-footer">
      // designed &amp; built by Santosh · {new Date().getFullYear()}
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="pf-root">
      <Nav />
      <Hero />
      <hr className="pf-divider" />
      <About />
      <hr className="pf-divider" />
      <Skills />
      <hr className="pf-divider" />
      <Projects />
      <hr className="pf-divider" />
      <Experience />
      <hr className="pf-divider" />
      <Contact />
      <Footer />
    </div>
  );
}
