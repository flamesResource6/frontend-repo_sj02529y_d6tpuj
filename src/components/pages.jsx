import Spline from '@splinetool/react-spline'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export function HomePage() {
  return (
    <section>
      <div className="relative hero-height rounded-2xl overflow-hidden border border-white/10 mt-6">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 h-full flex items-end md:items-center pointer-events-none">
          <div className="w-full p-6 md:p-10 bg-gradient-to-t from-slate-950/70 to-transparent pointer-events-none">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Hi, I'm Your Name</h1>
            <p className="mt-3 md:mt-4 text-blue-200/90 max-w-2xl">A full‑stack developer crafting modern, responsive web experiences. I love building fast products with React, Django, and delightful interactions.</p>
            <div className="mt-6 flex flex-wrap gap-3 pointer-events-auto">
              <a href="/projects" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Responsive First', desc: 'Layouts that fluidly adapt to phones, tablets, and desktops using Grid/Flex and media queries.' },
          { title: 'Clean UI', desc: 'Thoughtful typography, spacing, and consistent components with Tailwind.' },
          { title: 'Fast & Accessible', desc: 'Performance-focused builds with attention to accessibility and semantics.' },
        ].map((f, i) => (
          <div key={i} className="card-hover bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="text-white font-semibold text-lg">{f.title}</h3>
            <p className="text-sm text-blue-200/80 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function AboutPage() {
  return (
    <section className="py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white">About Me</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6 items-start">
        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop" alt="Portrait" className="rounded-xl w-full h-64 object-cover md:col-span-1" />
        <div className="md:col-span-2 text-blue-200/90 space-y-3">
          <p>I'm a developer passionate about building polished web apps. I focus on crisp UI, robust backends, and smooth interactions.</p>
          <ul className="list-disc pl-6 grid grid-cols-2 gap-x-8">
            <li>JavaScript / React</li>
            <li>Python / Django</li>
            <li>APIs & Integrations</li>
            <li>UI/UX Principles</li>
          </ul>
          <p>Beyond code, I enjoy design systems, teaching, and open source.</p>
        </div>
      </div>
    </section>
  )
}

export function ProjectsPage() {
  const projects = [
    {
      title: 'Project Aurora',
      desc: 'A sleek single‑page site with animations and dark mode.',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Django Dashboard',
      desc: 'Admin dashboard with charts and responsive grid widgets.',
      img: 'https://images.unsplash.com/photo-1551281044-8c5f0f0b59b1?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Mobile Landing',
      desc: 'Optimized landing page for conversions on mobile.',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Portfolio Revamp',
      desc: 'Personal portfolio with 3D hero and flexible layout.',
      img: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1200&auto=format&fit=crop'
    },
  ]

  return (
    <section className="py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Projects</h2>
      <p className="mt-2 text-blue-200/90">A few highlights. These are static examples with names, descriptions, and imagery.</p>
      <div className="mt-6 portfolio-grid">
        {projects.map((p, i) => (
          <div key={i} className="card-hover bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col">
            <img src={p.img} alt={p.title} className="h-40 w-full object-cover" />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-sm text-blue-200/80 mt-1 flex-1">{p.desc}</p>
              <div className="mt-4">
                <a href="#" className="inline-flex items-center gap-2 text-blue-300 hover:text-white">
                  View repo <Github size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ContactPage() {
  return (
    <section className="py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Get in touch</h2>
      <p className="mt-2 text-blue-200/90 max-w-2xl">Happy to connect about opportunities, collaborations, or just to say hello.</p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a className="card-hover bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-3" href="mailto:you@example.com">
          <Mail className="text-blue-300" />
          <div>
            <div className="text-white font-medium">you@example.com</div>
            <div className="text-sm text-blue-200/80">Email</div>
          </div>
        </a>
        <a className="card-hover bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-3" href="https://github.com/yourname" target="_blank" rel="noreferrer">
          <Github className="text-blue-300" />
          <div>
            <div className="text-white font-medium">github.com/yourname</div>
            <div className="text-sm text-blue-200/80">GitHub</div>
          </div>
        </a>
        <a className="card-hover bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-3" href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">
          <Linkedin className="text-blue-300" />
          <div>
            <div className="text-white font-medium">linkedin.com/in/yourname</div>
            <div className="text-sm text-blue-200/80">LinkedIn</div>
          </div>
        </a>
      </div>

      <div className="mt-6 text-blue-200/80 text-sm">
        <p>Phone: +1 (555) 123-4567</p>
        <p>Location: Lagos, NG</p>
      </div>
    </section>
  )
}
