import { useState } from "react";  // Importing useState to manage animation state
import { motion } from "framer-motion";
import { fadeIn } from "../varients"; // Import fadeIn variants
import HeroImg from "../Asset/SamG.png"; // Your hero image
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
            id="profile"
            className="flex flex-col md:flex-row px-5  md:py-32 py-8 bg-black justify-center "
        >
            {/* Profile Text Section */}
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
                className="md:w-1/2 flex flex-col items-center   md:items-start gap-2 py-20 md:py-0"
            >
                <h1 className="text-white text-6xl font-hero-font  text-center md:text-start ">
                    <span className="text-lg ">Hello!</span> <br /> I'm <span className="text-yellow-500">SAMUEL</span> 
                </h1>
                <br />
                <p className="text-2xl text-white ">{config.subtitle}</p>

                {/* Social Icons Section */}
                <div className="flex py-8">
                    <a
                        href={config.social.twitter}
                        className="pr-5 text-white hover:text-orange-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter size={30} />
                    </a>
                    <a
                        href={config.social.facebook}
                        className="pr-5 text-white hover:text-orange-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook size={30} />
                    </a>
                    <a
                        target="_blank"
                        href={config.social.linkedin}
                        className="text-white hover:text-orange-500"
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

            className=" flex  justify-center ">
           
            <img 
            src={HeroImg} 
            alt="profile" 
            className=" w-56 h-72 rounded-full object-cover "/>
            
             </motion.div>
           
        </section>
    );
}
