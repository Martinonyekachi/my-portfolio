import { useState } from 'react';
import './App.css';

const contactEmail = 'martinosuji104@gmail.com';
const contactPhone = '08112524993';
const linkedInUrl = 'https://www.linkedin.com/in/martin-osuji-2690133b5?utm_source=share_via&utm_content=profile&utm_medium=member_ios';

const skills = [
  {
    number: '01',
    title: 'Web development',
    items: ['HTML', 'CSS', 'JavaScript'],
    detail: 'Building accessible, responsive interfaces for the web.',
    icon: '</>',
  },
  {
    number: '02',
    title: 'Engineering tools',
    items: ['MATLAB', 'Proteus', 'Arduino IDE'],
    detail: 'Working with simulation, circuit design, and embedded systems tools.',
    icon: '⌘',
  },
  {
    number: '03',
    title: 'Technical skills',
    items: ['Troubleshooting', 'Circuit design & analysis', 'Testing & measurement'],
    detail: 'A practical, methodical approach to diagnosing and solving problems.',
    icon: '⌁',
  },
  {
    number: '04',
    title: 'Productivity',
    items: ['Microsoft Office Suite'],
    detail: 'Clear documentation, collaboration, and presentation of technical work.',
    icon: '▤',
  },
];

const projects = [
  {
    number: '01',
    title: 'Personal Portfolio Website',
    category: 'Web development',
    description:
      'A responsive portfolio designed to bring engineering experience and web development work together in one clear, professional space.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    visual: 'portfolio',
    demo: 'https://your-portfolio-demo.example',
    repository: 'https://github.com/your-username/portfolio',
  },
  {
    number: '02',
    title: 'Smart Battery Charger Multiplexer with Smart Display',
    category: 'Final-year engineering project',
    description:
      'An electrical engineering project focused on a smart battery charger multiplexer with an integrated display.',
    technologies: ['Circuit design', 'Battery charging', 'Smart display'],
    visual: 'charger',
    demo: 'https://your-project-demo.example',
    repository: 'https://github.com/your-username/smart-battery-charger',
  },
  {
    number: '03',
    title: 'Responsive Landing Page',
    category: 'Web development · Project placeholder',
    description:
      'A place to showcase a responsive landing page. Add the product, your contribution, and the outcome here.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    visual: 'landing',
    demo: 'https://your-landing-page-demo.example',
    repository: 'https://github.com/your-username/landing-page',
  },
  {
    number: '04',
    title: 'Interactive Web Application',
    category: 'Web development · Project placeholder',
    description:
      'A place to feature an interactive application. Replace this description with the problem it solves and how you built it.',
    technologies: ['JavaScript', 'UI', 'Responsive design'],
    visual: 'application',
    demo: 'https://your-web-app-demo.example',
    repository: 'https://github.com/your-username/web-application',
  },
];

const experience = [
  {
    organization: 'Celdon Technologies Limited / Holley Metering Ltd',
    role: 'Electrical Engineering and Metering',
    description: 'Add a concise summary of your responsibilities, contributions, and key learning.',
  },
  {
    organization: 'NNPC',
    role: 'Electrical Engineering Intern',
    description: 'Add the team, technical exposure, and practical experience gained during your internship.',
  },
  {
    organization: 'Macworld Gallery',
    role: 'Technical Support Intern',
    description: 'Add the devices, support tasks, and customer or troubleshooting experience you handled.',
  },
  {
    organization: 'HIIT',
    role: 'Web Development Intern',
    description: 'Add the web projects, tools, and development skills you practiced during your internship.',
  },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function ProjectArtwork({ type }) {
  return (
    <div className={`project-art project-art--${type}`} aria-hidden="true">
      {type === 'portfolio' && (
        <div className="art-browser">
          <div className="art-browser-bar"><i /><i /><i /></div>
          <div className="art-browser-content">
            <span className="art-kicker">ENGINEER / DEVELOPER</span>
            <span className="art-headline">Ideas into<br />experiences.</span>
            <span className="art-link">Explore work <Arrow /></span>
          </div>
        </div>
      )}
      {type === 'charger' && (
        <div className="art-circuit">
          <span className="circuit-chip">CHARGE<br />CONTROL</span>
          <span className="circuit-display"><i /><i /><i /></span>
          <span className="circuit-node circuit-node--one" />
          <span className="circuit-node circuit-node--two" />
          <span className="circuit-node circuit-node--three" />
          <span className="circuit-path circuit-path--one" />
          <span className="circuit-path circuit-path--two" />
        </div>
      )}
      {type === 'landing' && (
        <div className="art-landing">
          <span className="landing-nav">STUDIO <span>MENU +</span></span>
          <span className="landing-title">Make<br />your mark.</span>
          <span className="landing-shape" />
          <span className="landing-cta">Discover more <Arrow /></span>
        </div>
      )}
      {type === 'application' && (
        <div className="art-dashboard">
          <div className="dashboard-sidebar"><span /><span /><span /><span /></div>
          <div className="dashboard-main">
            <span className="dashboard-title">Overview</span>
            <span className="dashboard-card dashboard-card--wide" />
            <span className="dashboard-row"><i /><i /><i /></span>
            <span className="dashboard-card dashboard-card--small" />
            <span className="dashboard-card dashboard-card--small" />
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.assign(`mailto:${contactEmail}?subject=${subject}&body=${body}`);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Martin Osuji, home">
          <span className="brand-mark">MO</span>
          <span className="brand-copy">MARTIN OSUJI<span>ENGINEER · DEVELOPER</span></span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`site-nav${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s connect <Arrow diagonal /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Open to opportunities</p>
            <h1>Building Digital Experiences Through <span>Technology and Innovation.</span></h1>
            <p className="hero-description">
              I’m <strong>Martin Osuji</strong>, a web developer and First Class Electrical &amp; Electronics
              Engineering graduate. I bring engineering thinking and a passion for technology to the web.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <Arrow /></a>
              <a className="button button-secondary" href="#contact">Contact me <Arrow diagonal /></a>
            </div>
            <div className="hero-credentials">
              <span><i>01</i> Engineering mindset</span>
              <span><i>02</i> Digital craft</span>
              <span><i>03</i> Always learning</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit visual-orbit--one" />
            <div className="visual-orbit visual-orbit--two" />
            <span className="visual-cross visual-cross--one">+</span>
            <span className="visual-cross visual-cross--two">+</span>
            <div className="profile-placeholder" role="img" aria-label="Placeholder for a professional profile photograph">
              <div className="profile-initials">MO</div>
              <span className="profile-caption">ADD YOUR PHOTO</span>
            </div>
            <div className="visual-coordinate">09° 04′ N<br />07° 29′ E</div>
            <div className="visual-label"><span className="visual-label-dot" /> ELECTRICAL ENGINEER<br />&amp; WEB DEVELOPER</div>
            <span className="visual-index">FIG. 01 — PROFILE</span>
          </div>
        </section>

        <div className="principle-strip" aria-label="Professional focus">
          <div className="section-wrap principle-inner">
            <span>ENGINEERING FOUNDATION</span>
            <i />
            <span>WEB DEVELOPMENT</span>
            <i />
            <span>CONTINUOUS INNOVATION</span>
            <i />
            <span>FIRST CLASS GRADUATE</span>
          </div>
        </div>

        <section className="about-section section-wrap section-spacing" id="about">
          <div className="section-intro">
            <p className="eyebrow"><span className="eyebrow-number">01</span> About me</p>
            <h2>One mindset.<br /><span>Many ways to build.</span></h2>
          </div>
          <div className="about-content">
            <p className="about-lead">
              My background is in electrical and electronics engineering. My next chapter is building
              useful, thoughtful experiences for the web.
            </p>
            <p>
              Earning a First Class degree taught me to approach complex problems with curiosity,
              structure, and attention to detail. I’m now applying that same technical thinking to
              web development—learning continuously, adapting quickly, and exploring how digital
              products can make everyday experiences better.
            </p>
            <p>
              I’m excited by the intersection of engineering, software, and innovation, and I’m
              looking for opportunities to grow, contribute, and build with a team that values good ideas.
            </p>
            <a className="inline-link" href="#contact">Let’s build something meaningful <Arrow diagonal /></a>
          </div>
        </section>

        <section className="skills-section section-spacing" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <div className="section-intro">
                <p className="eyebrow"><span className="eyebrow-number">02</span> Technical toolkit</p>
                <h2>Skills built to<br /><span>solve problems.</span></h2>
              </div>
              <p className="section-aside">A growing toolkit shaped by engineering practice<br />and hands-on digital learning.</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.number}>
                  <div className="skill-card-top">
                    <span className="skill-number">{skill.number}</span>
                    <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.detail}</p>
                  <ul className="tag-list">
                    {skill.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap section-spacing" id="projects">
          <div className="section-heading">
            <div className="section-intro">
              <p className="eyebrow"><span className="eyebrow-number">03</span> Selected projects</p>
              <h2>Ideas into<br /><span>real-world work.</span></h2>
            </div>
            <p className="section-aside">A selection of digital and engineering work.<br />Project links are placeholders to update.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <ProjectArtwork type={project.visual} />
                <div className="project-card-body">
                  <div className="project-title-row">
                    <div>
                      <p className="project-category">{project.category}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <span className="project-number">{project.number}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tags">
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  <div className="project-links">
                    <a href={project.demo} target="_blank" rel="noreferrer">Live demo <Arrow diagonal /></a>
                    <a href={project.repository} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section section-spacing" id="experience">
          <div className="section-wrap experience-layout">
            <div className="section-intro experience-intro">
              <p className="eyebrow"><span className="eyebrow-number">04</span> Experience</p>
              <h2>Learning by<br /><span>doing the work.</span></h2>
              <p className="experience-summary">
                Experience across engineering, metering, technical support, and web development.
                Add your dates and specific achievements to each role.
              </p>
            </div>
            <div className="experience-list">
              {experience.map((item, index) => (
                <article className="experience-item" key={item.organization}>
                  <span className="experience-index">0{index + 1}</span>
                  <div className="experience-info">
                    <p className="experience-role">{item.role}</p>
                    <h3>{item.organization}</h3>
                    <p className="experience-description">{item.description}</p>
                  </div>
                  <span className="experience-date">DATES TO ADD</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education-section section-wrap section-spacing" id="education">
          <div className="section-intro">
            <p className="eyebrow"><span className="eyebrow-number">05</span> Education &amp; growth</p>
            <h2>Strong foundations.<br /><span>Curious by nature.</span></h2>
          </div>
          <div className="education-grid">
            <article className="education-card degree-card">
              <span className="education-icon" aria-hidden="true">01</span>
              <p className="eyebrow">Education</p>
              <h3>B.Eng. Electrical &amp; Electronics Engineering</h3>
              <p>First Class Honours</p>
              <div className="education-meta"><span>Your University</span><span>Year to add</span></div>
            </article>
            <article className="education-card development-card">
              <span className="education-icon" aria-hidden="true">02</span>
              <p className="eyebrow">Certifications &amp; professional development</p>
              <h3>Always building on the foundation.</h3>
              <p>Add relevant certifications, short courses, and professional development here.</p>
              <a className="inline-link" href="#contact">View learning journey <Arrow diagonal /></a>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-layout">
            <div className="contact-copy">
              <p className="eyebrow"><span className="eyebrow-number">06</span> Contact</p>
              <h2>Let’s make<br /><span>what’s next.</span></h2>
              <p>
                Looking for a curious, technically minded teammate? I’m open to opportunities,
                collaborations, and conversations about building better digital experiences.
              </p>
              <div className="contact-details">
                <a className="contact-email" href={`mailto:${contactEmail}`}>{contactEmail} <Arrow diagonal /></a>
                <a className="contact-phone" href={`tel:${contactPhone}`}>{contactPhone}</a>
              </div>
              <div className="social-links">
                <a href="https://github.com/your-username" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
                <a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <p className="form-heading">Send a message<span> — your email app will open with the details.</span></p>
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Jane Smith" required />
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="jane@example.com" required />
              <label htmlFor="contact-message">How can I help?</label>
              <textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about it..." required />
              <button className="button button-primary form-submit" type="submit">Prepare message <Arrow diagonal /></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#home" aria-label="Martin Osuji, back to top">
          <span className="brand-mark">MO</span>
          <span className="brand-copy">MARTIN OSUJI<span>ENGINEER · DEVELOPER</span></span>
        </a>
        <p>Designed and built with intention <span aria-hidden="true">✳</span> © {new Date().getFullYear()} Martin Osuji</p>
        <a className="back-to-top" href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
