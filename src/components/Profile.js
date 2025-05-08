import { useState } from "react";  // Importing useState to manage animation state
import { motion } from "framer-motion";
import { fadeIn } from "../varients"; // Import fadeIn variants
import HeroImg from "../Asset/SamG.png"; // Your hero image
import { TypeAnimation } from 'react-type-animation';


import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Profile() {
    const [hasAnimated, setHasAnimated] = useState(false); // Track animation state

    const config = {
        subtitle: "I'm a developer and a designer",
        social: {
            twitter: "https://twitter.com/",
            facebook: "https://facebook.com/",
            linkedin: "https://www.linkedin.com/in/samuel-g-696b5726a/",
        },
    };

    return (
        <section
            id="home"
            className="flex flex-col md:flex-row md:items-center justify-center gap-16 px-5 bg-black  "
        >
            <div className="text-white"> 

         
            </div>
      
            
            <motion.div
              variants={fadeIn("down", 0.2)} // Change direction based on scroll direction (down)
              initial="hidden"
              whileInView="show" // Trigger animation when the element comes into the viewport
              onViewportBoxUpdate={(info) => {
                if (info.isVisible && !hasAnimated) {
                  setHasAnimated(true); // Set animation as done once it's in view
                }
              }}
              viewport={{ once: true, amount: 0.7 }} // Trigger animation only once when 70% is in view
                className=" flex flex-col items-center md:items-center  gap-2 py-10 md:py-0 "
            >
                <h1 className="text-white md:text-7xl text-6xl font-hero-font  text-center md:text-start ">
                    <span className="text-xl ">Hello!</span > <br /><span className="font-bold">I'm </span> <span className="text-green-500 font-bold">SAMUEL</span> 
                </h1>
                <br />
                <p className="text-2xl text-white font-semibold">
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Designer ',
        1000,
        'BCA Grad',
        1000,  
      ]}
      wrapper="spin"
      speed={1}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
                </p>

                {/* Social Icons Section */}
                <div className="flex py-8">
                    <a
                        href={config.social.twitter}
                        className="pr-5 text-white hover:text-green-500 "
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter size={30} />
                    </a>
                    <a
                        href={config.social.facebook}
                        className="pr-5 text-white hover:text-green-500 "
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook size={30} />
                    </a>
                    <a
                        target="_blank"
                        href={config.social.linkedin}
                        className="text-white hover:text-green-500 "
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </motion.div>

            {/* Hero Image Section */}
            <motion.div 
            variants={fadeIn("up", 0.2)} // Change direction based on scroll direction (down)
            initial="hidden"
            whileInView="show" // Trigger animation when the element comes into the viewport
            onViewportBoxUpdate={(info) => {
              if (info.isVisible && !hasAnimated) {
                setHasAnimated(true); // Set animation as done once it's in view
              }
            }}
            viewport={{ once: true, amount: 0.7 }} // Trigger animation only once when 70% is in view

            className=" flex  justify-center md:my-44 ">
           
            <img 
            src={HeroImg} 
            alt="profile" 
            className=" w-2/4 rounded-b-[150px]  object-cover   "/>
            
             </motion.div>

       
             
        </section>
    );
}
