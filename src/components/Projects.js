import { motion } from "framer-motion"
import { useState } from "react";
import { fadeIn } from "../varients"
import websiteImg1 from '../Asset/project1.jpg';
import websiteImg2 from '../Asset/project2.jpg';
import websiteImg3 from '../Asset/project1.jpg';
export default function Projects() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'A Ecommerce website build with MERN stack.',
                link: 'http://www.github.com'
            },
            {
                image: websiteImg2,
                description: 'A Ecommerce website build with MERN stack.',
                link: ''
            },
            {
                image: websiteImg3,
                description: 'A Ecommerce website build with MERN stack.',
                link: '',
            }
        ]

    }

    return <section id='project' className="flex flex-col py-14 md:px-5 justify-center bg-black text-white ">
        <div className="w-full ">
        <h1 className='text-5xl border-b-4 text-white border-yellow-400 mb-5 w-[184px] m-auto font-bold'>Projects</h1>

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
                <p className="text-neutral-500">These are some of my project.I have built these with React,MERN and Tailwind CSS.Check them out.</p>
            </motion.div>
        </div>

        <div className="w-full">
            <div

                className='flex flex-col md:flex-row px-10 gap-5 justify-center'>

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
                        className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image} />
                        <div className='project-desc'>
                            <p className='text-center py-5 px-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn text-neutral-800' target='blank' href={project.link}>view project</a>
                            </div>
                        </div>
                    </motion.div>

                ))}

            </div>
        </div>
    </section>
}