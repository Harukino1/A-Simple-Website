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
    <header className="mb-10">
      <h1 className="m-0 mb-[0.2em] text-[clamp(2rem,5vw,2.2rem)] leading-[1.2] tracking-[-0.03em] text-[#1a202c]">
        Jethro Salindato
      </h1>
      <p className="m-0 text-[1.1em] text-[#718096]">
        Information Technology Student &amp; Software Developer
      </p>
    </header>
  )
}

function About() {
  return (
    <section>
      <h2 className="m-0 mb-[1.2em] text-[1.3rem] font-semibold leading-[1.3] text-[#2d3748]">
        About Me
      </h2>
      <p className="m-0 mb-6 text-[1.05rem] text-[#4a5568]">
        Hello! I&apos;m a Information Technology student passionate about game development and
        game architecture. My current academic focus centers on mastering the intricacies of game design, programming,
        and the underlying systems that drive immersive experiences. I am eager to apply my skills in real-world
        projects and contribute to innovative gaming solutions.
      </p>
      <p></p>
    </section>
  )
}

function Skills() {
  return (
    <section className="mt-10">
      <h2 className="m-0 mb-[1.2em] text-[1.3rem] font-semibold leading-[1.3] text-[#2d3748]">
        Technical Toolkit
      </h2>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[#e2e8f0] bg-[#edf2f7] px-3.5 py-1.5 text-[0.85rem] font-medium text-[#4a5568] transition-colors duration-200 hover:bg-[#e2e8f0] hover:text-[#2d3748]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="mt-10">
      <h2 className="m-0 mb-[1.2em] text-[1.3rem] font-semibold leading-[1.3] text-[#2d3748]">
        Personal Projects
      </h2>
      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-xl border border-[#e2e8f0] bg-white p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-[3px] hover:border-[#cbd5e0] hover:shadow-[0_8px_20px_rgb(0_0_0_/_4%)] max-[540px]:p-5"
          >
            <h3 className="m-0 mb-2 text-[1.15rem] font-semibold leading-[1.4] text-[#1a202c]">
              {project.name}
            </h3>
            <p className="m-0 text-[0.95rem] text-[#4a5568]">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-[60px] text-center">
      <p className="m-0 text-[0.9rem] text-[#a0aec0]">
        © {new Date().getFullYear()} Jethro Salindato. Discipline is key to success.
      </p>
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
      <main className="mx-auto my-[8vh] w-[calc(100%-48px)] max-w-[700px] max-[540px]:my-12 max-[540px]:w-[calc(100%-32px)]">
        <Header />
        <About />
        <Skills />
        <hr className="my-[45px] border-0 border-t border-[#e2e8f0]" />
        <Projects />
        <Footer />
      </main>
    </>
  )
}

export default App
