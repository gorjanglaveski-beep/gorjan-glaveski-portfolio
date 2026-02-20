import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const projectsData: Record<string, {
  title: string;
  category: string;
  year: string;
  description: string;
  images: string[];
  tags: string[];
}> = {
  "igaming-platform-ui": {
    title: "iGaming Platform UI",
    category: "UI/UX Design",
    year: "2023",
    description:
      "A comprehensive UI/UX redesign for a leading iGaming platform under Rhino Entertainment. The project focused on improving player engagement through a cleaner information architecture, faster navigation flows, and a bold visual identity that works across desktop and mobile. The design system ensured consistency across 50+ screens.",
    images: [project1, project3],
    tags: ["Figma", "UI Design", "UX Research", "Design System", "iGaming"],
  },
  "brand-identity-system": {
    title: "Brand Identity System",
    category: "Graphic Design",
    year: "2022",
    description:
      "A full brand identity project for a hospitality client, covering logo design, typography selection, color palette, and application guidelines. Delivered a comprehensive brand book including business cards, signage, and digital assets ready for both print and web use.",
    images: [project2, project4],
    tags: ["Illustrator", "Brand Design", "Logo", "Typography", "Print"],
  },
  "sports-betting-app": {
    title: "Sports Betting App",
    category: "Mobile UI/UX",
    year: "2023",
    description:
      "End-to-end UX design for a mobile sports betting application, from initial user research and wireframing through high-fidelity prototypes and usability testing. The dark-mode-first interface with orange accents improves readability during live sporting events.",
    images: [project3, project1],
    tags: ["Figma", "Mobile Design", "Prototyping", "User Research", "Usability Testing"],
  },
  "social-media-campaign": {
    title: "Social Media Campaign",
    category: "Digital Design",
    year: "2022",
    description:
      "A multi-platform social media campaign for a luxury lifestyle brand. Included a set of Instagram posts, stories, Facebook banners, and animated assets. The campaign achieved a 40% uplift in engagement and was used across 5 European markets.",
    images: [project4, project2],
    tags: ["Photoshop", "After Effects", "Social Media", "Motion Design", "Branding"],
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = id ? projectsData[id] : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Project not found.</p>
          <button onClick={() => navigate("/")} className="text-primary underline">
            Back to portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 md:px-12 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/#portfolio")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <span className="text-xs tracking-widest text-primary font-semibold uppercase">
            {project.category} · {project.year}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-3 mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 border border-border rounded-sm text-muted-foreground font-medium tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex flex-col gap-6 md:gap-10">
            {project.images.map((img, i) => (
              <div key={i} className="w-full overflow-hidden rounded-sm">
                <img
                  src={img}
                  alt={`${project.title} — view ${i + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <div className="border-t border-border py-10">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={() => navigate("/#portfolio")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            All Projects
          </button>
          <a
            href="/#contact"
            className="text-sm text-primary hover:underline"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
