import './App.css'
import { profileModel } from './models/profile'
import { projectModel } from './models/project'
import { skillsModel } from './models/skills'

const profile = profileModel.getAll()
const skills = skillsModel.getAll()
const projectData = projectModel.getAll()

function Header() {
    return (
        <header className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="mb-0.5 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                My Portfolio
            </p>
            <h1 className="m-0 mb-0.1 font-bold text-[clamp(2rem,5vw,2.2rem)] text-slate-800">
                {profile.name}
            </h1>
            <p className="m-0 text-[1.1em] text-[#718096]">
                {profile.title}
            </p>
        </header>
    )
}

function About() {
    return (
        <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="m-0 mb-4 flex items-center gap-3 text-[1.3rem] font-semibold leading-[1.3] text-slate-800">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                About Me
            </h2>
            <p className="m-0 mb-6 text-[1.05rem] text-[#4a5568]">
                {profile.about}
            </p>
        </section>
    )
}

function Skills() {
    return (
        <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="m-0 mb-5 flex items-center gap-3 text-[1.3rem] font-semibold leading-[1.3] text-slate-800">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Technical Toolkit
            </h2>
            <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-[0.85rem] font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
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
        <section className="mt-8">
            <h2 className="m-0 mb-5 flex items-center gap-3 text-[1.5em] font-semibold leading-[1.3] text-slate-800">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Personal Projects
            </h2>
            <div className="flex flex-col gap-5">
                {projectData.map((project) => (
                    <article
                        key={project.name}
                        className="group rounded-2xl border border-white/80 bg-white/75 p-6 shadow-lg shadow-slate-300/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-200/30 max-[540px]:p-5"
                    >
                        <h3 className="m-0 mb-2 text-[1.15rem] font-semibold leading-[1.4] text-slate-800 transition-colors group-hover:text-indigo-700">
                            {project.name}
                        </h3>
                        <p className="m-0 text-[0.95rem] leading-7 text-slate-600">{project.description}</p>
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
        <hr className="my-[50px] border-0 border-t border-black" />
        <Projects />
        <Footer />
      </main>
    </>
  )
}

export default App
