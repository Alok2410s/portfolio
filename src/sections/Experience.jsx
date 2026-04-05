import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer",
      profession: "Student",
      duration: "June 2024 - Present",
      description: "Designed and developed responsive websites for small businesses focusing on performance and SEO best practices.",
    },
  ];

  return (
    <section className="c-space section-spacing" id="experience">
      <h2 className="text-heading">Experience</h2>
      <div className="mt-12 flex flex-col gap-6 relative">
        <div className="absolute left-6 top-0 bottom-0 `w-0.5` bg-white/10 hidden md:block" />
        {experiences.map((exp) => (
          <div key={exp.id} className="grid-default-color relative md:ml-12 hover-animation">
            <div className="absolute `-left-13.5` top-6 w-4 h-4 rounded-full bg-royal shadow-[0_0_15px_rgba(92,51,204,0.8)] border-2 border-primary hidden md:block" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <span className="text-aqua font-medium text-sm mt-1 md:mt-0">{exp.duration}</span>
            </div>
            <p className="text-neutral-400 font-medium mb-4">{exp.company}</p>
            <p className="subtext">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
