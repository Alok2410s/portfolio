import Card from "../components/Card";
import { useRef } from "react";
import Globe from "../components/globe";

const About = () => {
    const grid2Container = useRef();
    return (
        <section className="c-space section-spacing" id="about">
            <h2 className="text-heading">About</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/*Grid 1*/}
                <div className="flex items-end grid-default-color grid-1">
                    <img
                    src="assets/coding-pov.png"
                    className="absolute scale-[1.75] -right-[5rem] -top-[1rem] 
                    md:scale-[3] md:left-50 md:inset-y-10
                    lg:scale-[2.5] overflow-hidden" />
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Alok Kumar</p>
                        <p className="subtext">
                            Over the Last 2 years , I developed my first frontend and backend dev
                            skills to deliver dynamics and software and web applications. 
                            I have a passion for learning and creating new things,
                            and I am always looking for new opportunities to grow and improve my skills.
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none bottom-4 
                    h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo-500/20 to-transparent" />
                </div>
                {/*Grid 2*/}
                <div className="flex items-end grid-default-color grid-2">
                    <div ref={grid2Container} 
                    className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">
                        CODE IS CRAFT
                        </p>
                        <Card style={{rotate: "75deg", top:"30%", left:"20%"}}
                         text="GRASP"
                         containerRef={grid2Container}
                        />
                        <Card style={{rotate: "-30deg", top:"60%", left:"45%"}} 
                        text="SOLID" 
                        containerRef={grid2Container}
                        />
                        <Card style={{rotate: "90deg", bottom:"30%", left:"70%"}}
                         text="Design Patterns"
                         containerRef={grid2Container}
                          />
                        <Card style={{rotate: "-45deg", top:"55%", left:"0%"}}
                         text="Design Principles"
                         containerRef={grid2Container}
                        />
                        <Card style={{rotate: "-20deg", top:"10%", left:"38%"}} 
                         text="SRP" 
                         containerRef={grid2Container}
                        />
                        <Card style={{rotate: "30deg", top:"70%", left:"70%"}} 
                         image="assets/logos/csharp-pink.png"
                         containerRef={grid2Container}
                         />
                        <Card style={{rotate: "-45deg", top:"70%", left:"25%"}} 
                         image="assets/logos/dotnet-pink.png" 
                         containerRef={grid2Container}
                        />
                        <Card style={{rotate: "-45deg", top:"5%", left:"10%"}} 
                         image="assets/logos/blazor-pink.png" 
                         containerRef={grid2Container}
                        />
                    </div>
                </div>
                {/*Grid 3*/}
                <div className="flex items-end grid-default-color grid-3 relative overflow-hidden">
                    <div className="z-10 w-[50%] mb-5 ml-5">
                        <p className="headtext">Time Zone</p>
                        <p className="subtext">
                            I am based in India, and open to work in any time zone.
                            </p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-auto overflow-hidden scale-[1.5] sm:scale-100">
                       <Globe />
                    </div>
                </div>
                {/*Grid 4*/}
                <div className="grid-default-color grid-4 relative flex flex-col items-center justify-center group overflow-hidden">
                    <img src="assets/grid.png" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500" alt="grid-background" />
                    <div className="absolute inset-0 bg-gradient-to-br from-royal/30 to-black/50 z-0 pointer-events-none" />
                    <div className="z-10 flex flex-col items-center">
                        <p className="headtext text-center text-xl mb-4">Ready to start?</p>
                        <a href="#contact" className="btn relative bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-8 py-3 rounded-full transition-all flex items-center gap-2 !w-auto">
                            Get in touch 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/*Grid 5*/}
                <div className="grid-default-color grid-5 relative flex flex-col justify-end overflow-hidden group">
                    <img src="assets/code-vision.png" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 z-0" alt="code" />
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia/20 via-transparent to-transparent opacity-60 pointer-events-none" />
                    <div className="z-10 relative md:max-w-[70%]">
                        <p className="headtext mb-2">My vision</p>
                        <p className="subtext">
                            I am dedicated to crafting intuitive, scalable, and beautifully designed digital experiences. 
                            My approach combines solid software engineering with modern web aesthetics to bridge the gap between imagination and reality.
                        </p>
                    </div>
                </div>

             </div>
        </section>
    );
};

export default About;