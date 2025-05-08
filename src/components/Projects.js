import { motion } from "framer-motion"
import { useState } from "react";
import { fadeIn } from "../varients"
import websiteImg1 from '../Asset/bb4.png';
import websiteImg2 from '../Asset/ecom.png';
import websiteImg3 from '../Asset/ui2.png';
export default function Projects() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const config = {
        projects: [
            {
                image: websiteImg1,
                heading: 'Blood Bank Portal (ASP.NET using C#)',
                description:'A web-based application designed to streamline blood donation, enabling users to search for and manage blood stock efficiently',
                link: 'https://github.com/2001701033036/Blood-Connect.git'
            },
            {
                image: websiteImg2,
                heading: 'E-Commerce(ReactJS, Node.js)',
                description:' e-commerce website where users can browse products, add items to their cart, and simulate the buying process with a seamless user experience ',
                link: 'https://github.com/2001701033036/ecom.git'
            },
            {
                image: websiteImg3,
                heading: 'Design using in figma.',
                description:'Intuitive IVF app & dashboard for fertility tracking with clear visuals, and a clean, user-friendly Ocean Taste food delivery app for seamless meal ordering.',
                link: 'https://www.figma.com/proto/hnwlcqlPfNOzO9ZJh7EeSI/Ocean-Taste?node-id=958-171&t=sOeWRPb6ZulPnJAy-1',
            }
        ]

    }

    return <section id='project' className="flex flex-col py-14 md:px-5 justify-center bg-black text-white md:pb-28  ">
        <div className="w-full ">
        <h1 className='text-5xl border-b-4 text-white border-green-400 mb-5 w-[184px] m-auto font-bold'>Projects</h1>

            <motion.div
                 variants={fadeIn ("down",0.2)}//change the direction based on the scroll
                 initial="hidden"
                 whileInView="show" //trigger the animation when the element comes in the viewport
                 onViewportBoxUpdate={(info)=>{
                     if (info.isVisible && hasAnimated){
                     setHasAnimated(true);
                     }
                 }}
                 viewport={{once:true,  amount:0.7}}
                className="flex px-10 py-5 flex-col text-center items-center">
                <p className="text-neutral-500">Below are the sample projects on ASP.NET, C#, ReactJS, Node.js, and MongoDB,.</p>
            </motion.div>
        </div>

        <div className="w-full">
            <div

                className='flex flex-col md:flex-row px-10 gap-9 justify-center '>

                {config.projects.map((project) => (

                    <motion.div
                        variants={fadeIn("up", 0.3)} // Change direction based on scroll direction (down)
                        initial="hidden"
                        whileInView="show" // Trigger animation when the element comes into the viewport
                        onViewportBoxUpdate={(info) => {
                            if (info.isVisible && !hasAnimated) {
                                setHasAnimated(true); // Set animation as done once it's in view
                            }
                        }}
                        viewport={{ once: true, amount: 0.7 }} // Trigger animation only once when 70% is in view
                        className='relative  '>
                        <img  alt='' className='h-[220px] w-[500px] ' src={project.image} />
                        <div className='project-desc  '>
                            <p className='text-center py-5 px-5'>{project.heading}</p>
                            <p className='text-balance text-center text-sm'>{project.description}</p>

                            <div className='flex justify-center py-4'>
                                <button className=" rounded-md  w-[110px] h-[44px] bg-gradient-to-b from-green-500 to-green-700 text-white font-semibold  relative group overflow-clip transition-all hover:scale-105">
            <a className=" w-full h-full flex flex-col justify-center" target="_blank" rel="noreferrer" href={project.link}>view project</a>
            <div className="transition-all ease-out bg-cyan-900 opacity-40 absolute w-[20px] h-[60px] -top-2 -skew-x-12 -translate-x-8 group-hover:translate-x-44">
            </div>
            </button>
                            </div>
                        </div>  
                    </motion.div>

                ))}

            </div>
        </div>
    </section>
}