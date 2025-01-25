import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";
import AboutImg from '../Asset/ab.png';

export default function About() {
    const [hasAnimated, setHasAnimated] = useState(false); // Track animation state



    const config = {
        line1: 'As a Junior App Executive in the healthcare sector, I specialize in enhancing user experiences by assisting patients with navigating hospital mobile apps and resolving technical issues. I collaborate closely with multiple departments, including Billing, Accounts, and Reception, to ensure seamless app integration. With expertise in Figma, I design user-centric templates, wireframes, and flow charts for new projects. Im passionate about leveraging technology to improve healthcare operations and am eager to contribute to impactful innovations in this space.',
        

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
    return <section className='flex flex-col md:flex-row justify-center px-5 md:py-11 bg-black ' id='about'>

        <motion.img
            src={AboutImg}
            className='py-8 px-8  h-80 w-80 rounded-full object-cover pt-20   '
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
        <div>


        <div className='' >
        <h1 className='text-5xl border-b-4 border-yellow-400  m-auto md:ml-8 md:m-5 text-white  md:w-[230px] w-[210px] font-bold'>About Me</h1>

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
                className='flex flex-col md:px-9 md:text-balance py-5  text-white'>

                <p className='pb-5 text-lg  text-gray-400'>{config.line1}</p>
                {/* <p className='pb-5'>{config.line2}</p>
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