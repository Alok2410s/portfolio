import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A comprehensive web application with advanced user features and real-time updates.",
      tags: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Project Beta",
      description: "A mobile-first platform providing insightful analytics and dashboard for professionals.",
      tags: ["Next.js", "MongoDB", "Framer Motion"],
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "An open-source library that simplifies complex UI animations and interactions.",
      tags: ["TypeScript", "CSS", "Vite"],
    },
  ];

  return (
    <section className="c-space section-spacing" id="work">
      <h2 className="text-heading">My Work</h2>
      <p className="subtext mt-2 mb-10">Here are a few projects I've worked on recently.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="grid-default-color hover-animation flex flex-col group">
            <div className="w-full h-48 bg-black/30 rounded-xl mb-4 overflow-hidden relative border border-white/5">
              <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm group-hover:scale-110 transition duration-500">
                [Image Placeholder]
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="subtext flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4 text-xs font-light text-royal">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-navy rounded-full border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
