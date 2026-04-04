import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jane Smith",
      role: "CEO at StartupX",
      content: "Alok is an exceptional developer who brings creativity and technical expertise to the table. His work elevated our platform completely.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Lead Designer at CreativeWorks",
      content: "Collaborating with Alok was a breeze. He understands design nuances and writes clean, maintainable code to bring visions to life.",
    },
  ];

  return (
    <section className="c-space section-spacing" id="testimonials">
      <h2 className="text-heading text-center">What people say</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((test) => (
          <div key={test.id} className="grid-special-color relative hover-animation group">
            <div className="text-4xl text-white/50 mb-4 opacity-50 font-serif">"</div>
            <p className="subtext text-white/90 mb-6 relative z-10 text-lg">
              {test.content}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center font-bold text-xl border border-white/20">
                {test.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-white">{test.name}</h4>
                <p className="text-xs text-white/60">{test.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
