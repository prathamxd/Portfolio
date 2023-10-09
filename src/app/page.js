"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import myAvatar from "./assets/me.png";
import countries from "./assets/countries.png";
import social from "./assets/social.png";
import design from "./assets/des.png";
import weather from './assets/weather.png'
import { useState } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <a href="/">
              <h1 className="text-xl font-semibold dark:text-gray-200">
                pluffy.dev
              </h1>
            </a>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  className="cursor-pointer text-2xl dark:text-gray-200"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:208b8c2b-2cc2-33c6-8039-2af1817c4773"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-500">
              Pratham Kumar Luker
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
              Frontend Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              I am a dedicated Frontend Web Developer, providing services for
              softwares and web development. Seeking different opportunities to
              work with the best.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="mailto:prathamluker@gmail.com" target="_blank">
              <BiLogoGmail />
            </a>
            <a
              href="https://www.linkedin.com/in/pratham-luker-444226202/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Pluffy2217" target="_blank">
              <AiFillGithub />
            </a>
          </div>
          <div className="w-64 h-64 mt-16 mb-16 mx-auto overflow-hidden">
            <Image src={myAvatar} />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl font-medium py-1 dark:text-gray-200">
              Services I offer
            </h3>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a comprehensive range of services encompassing{" "}
              <span className="text-teal-500 hover:underline dark:text-teal-400">
                React{" "}
              </span>
              expertise for dynamic web applications,{" "}
              <span className="text-teal-500 hover:underline dark:text-teal-400">
                Tailwind CSS
              </span>{" "}
              for elegant and responsive styling, and{" "}
              <span className="text-teal-500 hover:underline dark:text-teal-400">
                Javascript Frontend Development
              </span>{" "}
              to create engaging and user-friendly interfaces
            </p>
          </div>
          <div className="">
            <div className="text-center flex flex-col items-center shadow-lg dark:border p-10 rounded-xl my-10">
              <Image src={design} width={200} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                Front end Development
              </h3>
              <p className="py-2 dark:text-gray-200">
                I provide Front-end Development using React framework paired
                with the exceptional styling capabilities of Tailwind CSS in my
                services.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400">
                Development Tools:
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">React.js</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">
                Tailwind CSS
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-200">
                Javascript
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-200">
                Typescript
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-200">API</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl font-medium py-1 dark:text-gray-200">
              Portfolio
            </h3>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap dark:text-gray-200">

          <div className="basis-1/3 flex-1 shadow-lg dark:border">
              <Image
                src={weather}
                className="rounded-lg dark:rounded-none object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div className="flex justify-between items-center p-3 lg:mr-5">
                <div>
                  <h1 className="font-semibold mb-1">Weather app</h1>
                  <div className="font-light text-xs flex gap-2 mb-2">
                    <p>React</p>
                    <p>Tailwind CSS</p>
                    <p>Express.js</p>
                    <p>API</p>
                  </div>
                </div>
                <div className="flex gap-3 lg:gap-4">
                  <a
                    href="https://weather-react-app-ochre.vercel.app/"
                    target="_blank"
                  >
                    <FiExternalLink className="w-5 h-5 lg:w-6 lg:h-6" />
                  </a>
                  <a
                    href="https://github.com/Pluffy2217/weather-react-app"
                    target="_blank"
                  >
                    <AiFillGithub className="w-5 h-5 lg:w-6 lg:h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="basis-1/3 flex-1 shadow-lg dark:border">
              <Image
                src={countries}
                className="rounded-lg dark:rounded-none object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div className="flex justify-between items-center p-3 lg:mr-5">
                <div>
                  <h1 className="font-semibold mb-1">REST Countries</h1>
                  <div className="font-light text-xs flex gap-2 ">
                    <p>React</p>
                    <p>Tailwind CSS</p>
                    <p>Javascript</p>
                  </div>
                </div>
                <div className="flex gap-3 lg:gap-4">
                  <a
                    href="https://rest-countries-vite.vercel.app/"
                    target="_blank"
                  >
                    <FiExternalLink className="w-5 h-5 lg:w-6 lg:h-6" />
                  </a>
                  <a
                    href="https://github.com/Pluffy2217/REST-Countries"
                    target="_blank"
                  >
                    <AiFillGithub className="w-5 h-5 lg:w-6 lg:h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="basis-1/3 flex-1 shadow-lg dark:border">
              <Image
                src={social}
                className="rounded-lg dark:rounded-none object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div className="flex justify-between items-center p-3 lg:mr-5">
                <div>
                  <h1 className="font-semibold mb-1">Social Media Dashboard</h1>
                  <div className="font-light text-xs flex gap-2 mb-2">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                  </div>
                </div>
                <div className="flex gap-3 lg:gap-4">
                  <a
                    href="https://pluffy2217.github.io/social-media-dashboard/#"
                    target="_blank"
                  >
                    <FiExternalLink className="w-5 h-5 lg:w-6 lg:h-6" />
                  </a>
                  <a
                    href="https://github.com/Pluffy2217/social-media-dashboard"
                    target="_blank"
                  >
                    <AiFillGithub className="w-5 h-5 lg:w-6 lg:h-6" />
                  </a>
                </div>
              </div>
            </div>

            
          </div>
        </section>
      </div>
      <section>
        <p className="bg-gradient-to-r from-cyan-600 to-teal-500 flex h-16 items-center text-gray-200 justify-center">
          &copy; {new Date().getFullYear()} Pratham Kumar Luker
        </p>
      </section>
    </div>
  );
};

export default Home;
