import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

export default function Header() {
   const [activeLink, setActiveLink] = useState("home");

   // Function to handle link click
   const handleClick = (link) => {
      setActiveLink(link); // Update active link on click
   };

   // Set up Intersection Observer to detect when sections are in view
   useEffect(() => {
      const sections = document.querySelectorAll("section"); // All sections
      const options = {
         threshold: 0.2, // Trigger when 50% of section is in view
      };

      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               setActiveLink(entry.target.id); // Set active link to the ID of the section
            }
         });
      }, options);

      // Observe each section
      sections.forEach((section) => {
         observer.observe(section);
      });

      return () => {
         observer.disconnect(); // Clean up observer on component unmount
      };
   }, []);
   const [toggleMenu, setToggleMenu] = useState(false)

   return <header className="flex justify-between px-5 w-full fixed py-3 m-h:100vh bg-black z-50">
      <a className="font-bold text-2xl  text-white" href="#">Samuel G</a>
      <nav className="hidden md:block">
         <ul className="flex text-white nav-head ">

            <li>
               <a
                  href="#profile"
                  className={`${activeLink === "profile" ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:border-yellow-500 px-2`}
                  onClick={() => handleClick("profile")}
               >
                  Home
               </a>
            </li>
            <li>
               <a
                  href="#about"
                  className={`${activeLink === "about" ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : ""
                     } transition duration-300 ease-in-out  transform hover:scale-110  hover:border-b-2 hover:border-yellow-500 px-2`}
                  onClick={() => handleClick("about")}
               >
                  About
               </a>
            </li>
            <li>
               <a
                  href="#resume"
                  className={`${activeLink === "resume" ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : ""
                     } transition duration-300 ease-in-out  transform hover:scale-110  hover:border-b-2 hover:border-yellow-500 px-2`}
                  onClick={() => handleClick("resume")}
               >
                  Resume
               </a>
            </li>

            <li>
               <a
                  href="#project"
                  className={`${activeLink === "project" ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:border-yellow-500 px-2`}
                  onClick={() => handleClick("project")}
               >
                  Project
               </a>
            </li>
            <li>
               <a
                  href="#contact"
                  className={`${activeLink === "contact" ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:border-yellow-500 px-2`}
                  onClick={() => handleClick("contact")}
               >
                  Contact
               </a>
            </li>
         </ul>
      </nav>
{/* mobile nav */}
      {toggleMenu && <nav className="block md:hidden ">
         <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col  text-white mobile-nav ">
            <li>
               <a
                  href="#profile"
                  className={`${activeLink === "profile" ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:border-yellow-500 px-2`}
                  onClick={() => handleClick("profile")}
               >
                  Home
               </a>
            </li>
            <li>
               <a
                  href="#about"
                  className={`${activeLink === "about" ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:border-yellow-500 px-2`}
                  onClick={() => handleClick("about")}
               >
                  About
               </a>
            </li>
            <li>
               <a
                  href="#resume"
                  className={`${activeLink === "resume" ? "text-yellow-500 font-bold border-b-2  border-yellow-500" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:border-yellow-500 px-2`}
                  onClick={() => handleClick("resume")}
               >
                  Resume
               </a>
            </li>

            <li>
               <a
                  href="#project"
                  className={`${activeLink === "project" ? "text-yellow-500 font-bold border-b-2 border-yellow-500" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:border-yellow-500 px-2`}
                  onClick={() => handleClick("project")}
               >
                  Project
               </a>
            </li>
            <li>
               <a
                  href="#contact"
                  className={`${activeLink === "contact" ? "text-yellow-500 font-bold border-b-2  border-yellow-500" : ""
                     } transition duration-300 ease-in-out transform hover:scale-110  hover:border-b-2 hover:border-yellow-500 px-2`}
                  onClick={() => handleClick("contact")}
               >
                  Contact
               </a>
            </li>
         </ul>
      </nav>}
      <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden '><Bars3Icon className='text-white h-5' /></button>
   </header>
}