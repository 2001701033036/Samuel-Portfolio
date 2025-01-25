import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";
import AboutImg from '../Asset/ab.png';

export default function About() {
    const [hasAnimated, setHasAnimated] = useState(false); // Track animation state



    const config = {
        line1: 'Hi, I’m Samuel G, and I’m a Junior App Executive in the hospital sector. My role involves assisting patients in navigating and using the hospital’s mobile app, ensuring a smooth user experience, troubleshooting issues. I collaborate with departments such as Billing, Accounts, and Reception to ensure the app integrates seamlessly into daily hospital operations.',
        line2: 'I actively engage in project discussions with the CEO and IT Manager, helping gather and analyze requirements from healthcare professionals. Additionally, I conduct User Acceptance Testing (UAT) and collaborate with app developers to improve app functionality and address any technical issues.',
        line3: 'I am skilled in Figma, which I use to design templates, flow charts, and wireframes for new projects, ensuring they align with user needs and project goals. As I continue to grow in my role, I’m excited to explore more opportunities in the intersection of healthcare and technology'

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