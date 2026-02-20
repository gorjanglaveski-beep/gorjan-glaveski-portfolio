import gorjanImg from "@/assets/gorjan.png";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import { useNavigate } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const projects = [
  {
    id: "igaming-platform-ui",
    title: "iGaming Platform UI",
    category: "UI/UX Design",
    image: project1,
    description: "Full casino platform redesign for Rhino Entertainment — desktop and mobile.",
  },
  {
    id: "brand-identity-system",
    title: "Brand Identity System",
    category: "Graphic Design",
    image: project2,
    description: "Logo, typography, and full brand system for a hospitality client.",
  },
  {
    id: "sports-betting-app",
    title: "Sports Betting App",
    category: "Mobile UI/UX",
    image: project3,
    description: "End-to-end mobile app UX for a sports betting platform.",
  },
  {
    id: "social-media-campaign",
    title: "Social Media Campaign",
    category: "Digital Design",
    image: project4,
    description: "Multi-platform social media campaign assets for a luxury brand.",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-border">
        <span className="font-sans font-700 text-lg tracking-tight text-foreground">
          GG<span className="text-primary">.</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#cv" className="hover:text-foreground transition-colors">CV</a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        id="about"
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(0 0% 9%) 0%, hsl(0 0% 5%) 60%, hsl(0 0% 7%) 100%)",
        }}
      >
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Orange glow */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-[120px]" style={{ background: "hsl(var(--primary))" }} />

        <div className="container mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
          {/* Desktop: side-by-side | Mobile: stacked text-top photo-bottom */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
            {/* Text */}
            <div className="flex-1 animate-slide-in-left">
              <p className="text-primary font-medium tracking-widest text-xs uppercase mb-4">
                Available for work
              </p>
              <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight text-foreground mb-3">
                Gorjan<br />
                <span className="text-primary">Glaveski</span>
              </h1>
              <h3 className="text-lg md:text-xl font-medium text-muted-foreground mt-4 mb-2 tracking-wide uppercase">
                Digital Designer &nbsp;|&nbsp; UI/UX Designer
              </h3>
              <h5 className="text-base md:text-lg text-foreground/70 font-light mt-6 max-w-md leading-relaxed">
                Design that looks simple.<br />
                <span className="text-primary font-medium">Works powerfully.</span>
              </h5>
              <div className="flex gap-4 mt-10">
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-sm hover:opacity-90 transition-opacity text-sm tracking-wide"
                >
                  View Portfolio
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-6 py-3 rounded-sm hover:border-primary hover:text-primary transition-colors text-sm tracking-wide"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Photo — desktop right, mobile bottom */}
            <div className="flex-shrink-0 flex justify-center md:justify-end order-last md:order-none animate-slide-in-right">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -top-3 -right-3 w-full h-full border border-primary/40 rounded-sm" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-primary" />
                <img
                  src={gorjanImg}
                  alt="Gorjan Glaveski"
                  className="w-64 h-72 md:w-80 md:h-96 object-cover object-top rounded-sm relative z-10 grayscale"
                  style={{ filter: "grayscale(100%) contrast(1.05)" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest text-foreground uppercase">Scroll</span>
          <div className="w-px h-12 bg-foreground animate-pulse" />
        </div>
      </section>

      {/* ── CV SECTION ── */}
      <section
        id="cv"
        className="bg-cv-bg text-cv-fg py-20 md:py-28"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          {/* Profile */}
          <div className="mb-16 border-b border-cv-border pb-12">
            <span className="text-xs tracking-widest text-primary font-semibold uppercase">01</span>
            <h3 className="text-3xl font-bold mt-2 mb-5 text-cv-fg">Profile</h3>
            <p className="text-cv-muted leading-relaxed text-base md:text-lg max-w-2xl">
              Senior Graphic Designer with advanced knowledge of UI/UX design and experience in the
              iGaming industry, focused on creating visual solutions and user interfaces that drive
              engagement and results. Proficient in modern and AI-powered design tools.
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16 border-b border-cv-border pb-12">
            <span className="text-xs tracking-widest text-primary font-semibold uppercase">02</span>
            <h3 className="text-3xl font-bold mt-2 mb-8 text-cv-fg">Work Experience</h3>
            <div className="space-y-6">
              {[
                { company: "Rhino Entertainment", role: "Senior Digital Designer", type: "Full Time", period: "01.09.2022 — Present" },
                { company: "Galeksia", role: "Graphic Designer", type: "Full Time", period: "02.02.2022 — 02.08.2022" },
                { company: "Freelance", role: "Graphic Designer", type: "Self-employed", period: "Ongoing" },
                { company: "Monday", role: "Graphic Designer", type: "Contractor", period: "01.02.2020 — 01.04.2020" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 py-4 border-b border-cv-border last:border-0">
                  <div>
                    <p className="font-bold text-cv-fg text-lg">{item.company}</p>
                    <p className="text-cv-muted text-sm mt-0.5">{item.role} · {item.type}</p>
                  </div>
                  <span className="text-sm text-cv-muted font-mono whitespace-nowrap mt-1 sm:mt-0">{item.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16 border-b border-cv-border pb-12">
            <span className="text-xs tracking-widest text-primary font-semibold uppercase">03</span>
            <h3 className="text-3xl font-bold mt-2 mb-8 text-cv-fg">Education</h3>
            <div className="space-y-8">
              <div>
                <p className="font-bold text-cv-fg text-lg">Google UX Design Professional Certificate</p>
                <p className="text-primary text-sm font-mono mt-0.5">Sep 27, 2024</p>
                <p className="text-cv-muted text-sm mt-2 leading-relaxed max-w-xl">
                  Completed a 7-course program covering the full UX design process: user research,
                  wireframing, prototyping, and usability testing.
                </p>
              </div>
              <div>
                <p className="font-bold text-cv-fg text-lg">Brainster — Graphic Design Academy</p>
                <p className="text-primary text-sm font-mono mt-0.5">October 2020 — May 2021</p>
                <p className="text-cv-muted text-sm mt-2 leading-relaxed max-w-xl">
                  Part of the Dream Team · January Student of the Month<br />
                  Winner of the projects "Buchen Kozjak" & Vidi Vaka — redesign of existing logos.
                </p>
              </div>
              <div>
                <p className="font-bold text-cv-fg text-lg">University "St. Kliment Ohridski" — Bitola</p>
                <p className="text-cv-muted text-sm mt-0.5">Faculty of Information and Communication Technologies, Macedonia</p>
                <p className="text-primary text-sm font-mono mt-1">October 2011 — May 2017</p>
                <p className="text-cv-muted text-sm mt-2">Bachelor of Information Systems Management</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <span className="text-xs tracking-widest text-primary font-semibold uppercase">04</span>
            <h3 className="text-3xl font-bold mt-2 mb-8 text-cv-fg">Skills</h3>
            <div className="flex flex-wrap gap-4">
              {/* Figma */}
              <div className="skill-badge">
                <svg viewBox="0 0 38 57" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19H19v9.5z" fill="#1ABCFE"/>
                  <path d="M9.5 47.5a9.5 9.5 0 0 1 9.5-9.5v9.5a9.5 9.5 0 0 1-9.5 9.5 9.5 9.5 0 0 1 0-19z" fill="#0ACF83"/>
                  <path d="M9.5 9.5A9.5 9.5 0 0 1 19 0v19H9.5A9.5 9.5 0 0 1 0 9.5a9.5 9.5 0 0 1 9.5-9.5z" fill="#FF7262"/>
                  <path d="M19 0h9.5A9.5 9.5 0 0 1 38 9.5 9.5 9.5 0 0 1 28.5 19H19V0z" fill="#F24E1E"/>
                  <path d="M38 28.5A9.5 9.5 0 0 1 28.5 38 9.5 9.5 0 0 1 19 28.5 9.5 9.5 0 0 1 28.5 19 9.5 9.5 0 0 1 38 28.5z" fill="#A259FF"/>
                </svg>
                <span className="text-xs font-semibold text-cv-fg">Figma</span>
              </div>
              {/* Photoshop */}
              <div className="skill-badge">
                <svg viewBox="0 0 100 100" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="16" fill="#001E36"/>
                  <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#31A8FF" fontSize="44" fontFamily="serif" fontWeight="bold">Ps</text>
                </svg>
                <span className="text-xs font-semibold text-cv-fg">Photoshop</span>
              </div>
              {/* After Effects */}
              <div className="skill-badge">
                <svg viewBox="0 0 100 100" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="16" fill="#00005B"/>
                  <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#9999FF" fontSize="40" fontFamily="serif" fontWeight="bold">Ae</text>
                </svg>
                <span className="text-xs font-semibold text-cv-fg">After Effects</span>
              </div>
              {/* AI */}
              <div className="skill-badge">
                <svg viewBox="0 0 100 100" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="16" fill="#330000"/>
                  <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FF9A00" fontSize="44" fontFamily="serif" fontWeight="bold">Ai</text>
                </svg>
                <span className="text-xs font-semibold text-cv-fg">Illustrator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section
        id="portfolio"
        className="py-20 md:py-28 bg-background"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12">
            <span className="text-xs tracking-widest text-primary font-semibold uppercase">Work</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-2 text-foreground">Selected Projects</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="portfolio-item aspect-[4/3] bg-card rounded-sm"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <span className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-foreground font-bold text-base md:text-lg leading-tight">
                    {project.title}
                  </h3>
                  <span className="mt-2 text-xs text-foreground/60 flex items-center gap-1">
                    View project →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="py-20 md:py-28 border-t border-border bg-background"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="text-6xl md:text-9xl font-bold leading-none text-foreground mb-10 tracking-tight">
              CONTACT<br />
              <span className="text-primary">ME ON</span>
            </h2>

            <div className="flex flex-col gap-5 mt-8">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/gorjan-glaveski-969b091b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group"
                aria-label="LinkedIn Profile"
              >
                <div className="w-12 h-12 rounded-sm border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </div>
                <span className="text-muted-foreground group-hover:text-primary transition-colors text-sm">LinkedIn</span>
              </a>

              {/* Email */}
              <a
                href="mailto:gorjanglaveski@gmail.com"
                className="inline-flex items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-sm border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-muted-foreground group-hover:text-primary transition-colors text-sm md:text-base font-mono">
                  gorjanglaveski@gmail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+38975211822"
                className="inline-flex items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-sm border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                  <Phone size={20} />
                </div>
                <span className="text-muted-foreground group-hover:text-primary transition-colors text-sm md:text-base font-mono">
                  +389 75 211 822
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 bg-background">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© 2025 Gorjan Glaveski. All rights reserved.</span>
          <span>Senior Digital Designer · UI/UX</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
