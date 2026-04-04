import React from "react";

const Footer = () => {
  return (
    <footer className="w-full c-space pt-10 pb-6 border-t border-white/10 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <p className="text-white/60 text-sm">
          &copy; {new Date().getFullYear()} Alok Kumar. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition border border-white/10 text-white/60 hover:text-white">
            in {/* Placeholder for LinkedIn Icon */}
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition border border-white/10 text-white/60 hover:text-white">
            GH {/* Placeholder for GitHub Icon */}
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition border border-white/10 text-white/60 hover:text-white">
            X {/* Placeholder for Twitter/X Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
