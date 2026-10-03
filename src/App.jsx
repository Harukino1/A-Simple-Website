import './App.css'

const skills = ['Java', 'JavaScript', 'Python', 'HTML', 'CSS', 'Ubuntu', 'AI Tooling']

const projects = [
  {
    name: 'WorkForce Portal',
    description:
      'A robust, scalable, and secure centralized platform designed to streamline workforce management and authentication. It serves as a mission-critical gateway that bridges the gap between employee resource access and administrative oversight.',
  },
  {
    name: 'Library Management System',
    description:
      'A scalable and modular Library Management System built with Django, designed to handle book cataloging, inventory control, borrowing workflows, reservations, and financial tracking.',
  },
  {
      name: 'Dungeon Escape',
      description:
      'A text-based adventure game where players navigate through a mysterious dungeon, fighting monsters and avoiding powerful foes to climb up the dungeon.',
  },
]

function Header() {
  return (
    <header>
      <h1>Jethro Salindato</h1>
      <p className="subtitle">Information Technology Student &amp; Software Developer</p>
    </header>
  )
}

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        Hello! I&apos;m a Information Technology student passionate about game development and
        game architecture. My current academic focus centers on mastering the intricacies of game design, programming,
        and the underlying systems that drive immersive experiences. I am eager to apply my skills in real-world
        projects and contribute to innovative gaming solutions.
      </p>
      <p>

      </p>
    </section>
  )
}

function Skills() {
  return (
    <section>
      <h2>Technical Toolkit</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section>
      <h2>Personal Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Jethro Salindato. Discipline is key to success.</p>
    </footer>
  )
}

function App() {
  return (
    <>
      <title>Jethro Salindato | Software Developer</title>
      <meta
        name="description"
        content="Jethro Salindato's profile and software development portfolio."
      />
      <main className="container">
        <Header />
        <About />
        <Skills />
        <hr />
        <Projects />
        <Footer />
      </main>
    </>
  )
}

export default App
