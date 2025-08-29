import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Bernie Liu</p>
            <p className="subtext">
              Over the last 4 years, I developed my frontend and backend dev
              skills to deliver dynamic and software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Richmond Hill, Ontario, Canada
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        
        {/* Grid 4 - Email Button */}
        <div className="grid-special-color grid-2">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <CopyEmailButton />
          </div>
        </div>
        
        {/* Grid 5 - Tech Stack - Now spans full width */}
        <div className="grid-default-color col-span-1 md:col-span-6">
          <div className="flex flex-col md:flex-row h-full">
            {/* Left side - Text content */}
            <div className="z-10 w-full md:w-[40%] p-6 flex flex-col justify-center">
              <p className="headText">Tech Stack</p>
              <p className="subtext">
                I specialize in a variety of languages, frameworks, and tools that
                allow me to build robust and scalable applications
              </p>
              
              {/* Tech categories list */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-white mb-2">Languages</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>JavaScript/TypeScript</li>
                    <li>Python</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>HTML/CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Frontend</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Angular</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Backend</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>Node.js</li>
                    <li>Flask</li>
                    <li>FastAPI</li>
                    <li>Spring</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Tools</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>Git</li>
                    <li>Vercel</li>
                    <li>Jira</li>
                    <li>Jenkins</li>
                    <li>Three.js</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right side - Frameworks component */}
            <div className="w-full md:w-[60%] h-full flex items-center justify-center">
              <div className="w-full h-full scale-90 md:scale-100">
                <Frameworks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;