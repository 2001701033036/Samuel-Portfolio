import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";
import AboutImg from '../Asset/lig.png';

export default function About() {
    const [hasAnimated, setHasAnimated] = useState(false); // Track animation state



    const config = {
        line1: 'IT Executive with over a year of experience in app development, user experience optimization, and technical support within the healthcare sector. Proficient in ReactJS, Tailwind CSS, and Figma, I focus on enhancing digital experiences and troubleshooting technical issues. A motivated and adaptable team player, I’m eager to learn new technologies and contribute to impactful innovations in the intersection of healthcare and IT. Always ready to embrace new challenges, I thrive in dynamic and evolving environments.',
        

    }
    const config1 = {
        about: [
            {
                heading: 'Profile:',
                description: 'IT Executive'
            },
            {
                heading: 'Domain:',
                description: 'IT'
            },
            {
                heading: 'Education:',
                description: 'Bachelor of computer Application'
            },
            {
                heading: 'Language:',
                description: 'Tamil,English'
            },
            {
                heading: 'Other Skills:',
                description: 'Reactjs,Figma, .Net'
            },
            {
                heading: 'Interest:',
                description: 'Playing,Traveling,Movies & Food'
            }

        ]
    }
    return <section className='bg-black flex flex-col md:flex-row justify-center scroll-mt-14  px-5 space-y-40 md:space-y-0 md:py-11 ' 
    id='about'>
       <div className=" flex">
       <div className="md:w-[700px] ">
        <motion.img
            src={AboutImg}
            className=' hidden md:block  w-[600px] items-center justify-center rounded-b-3xl object-contain'
            variants={fadeIn("right", 0.2)} // Change direction based on scroll direction (down)
            initial="hidden"
            whileInView="show" // Trigger animation when the element comes into the viewport
            onViewportBoxUpdate={(info) => {
                if (info.isVisible && !hasAnimated) {
                    setHasAnimated(true); // Set animation as done once it's in view
                }
            }}
            viewport={{ once: true, amount: 0.7 }} // Trigger animation only once when 70% is in view
        />
        </div>
         


        <div className=' text-center items-center container' >
        <h1 className='text-5xl border-b-4 border-green-400  m-auto md:ml-8 md:m-5 text-white  md:w-[230px] w-[210px] font-bold'>About Me</h1>

            <motion.div
                variants={fadeIn("up", 0.1)} // Change direction based on scroll direction (down)
                initial="hidden"
                whileInView="show" // Trigger animation when the element comes into the viewport
                onViewportBoxUpdate={(info) => {
                    if (info.isVisible && !hasAnimated) {
                        setHasAnimated(true); // Set animation as done once it's in view
                    }
                }}
                viewport={{ once: true, amount: 0.7 }} // Trigger animation only once when 70% is in view
                className=' flex-col  md:px-9 py-5 text-white'>

                {/* <p className='pb-5 text-lg  text-gray-400 text-start md:text-justify'>{config.line1}</p> */}
<div className="md:w-[700px]">
    
    
<p className='pb-5 text-lg  text-gray-400 text-start md:text-justify'>{config.line1}</p>
    
    </div>                {/* <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p> */}
                {
                    config1.about.map((about) => (
                        <div className=" text-start mb-4 text-lg ">
                            <p className=""></p>
                            <div className=" flex ">
                                <p className="font-bold   text-start w-1/3 md:w-1/6 ">{about.heading}</p>
                                <p className="w-2/3 text-gray-400">{about.description}</p>
                            </div>

                        </div>
                    ))}
            </motion.div>
        
            </div>
       </div>
    </section>

}