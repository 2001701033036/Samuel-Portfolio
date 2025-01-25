import { FaPhoneAlt, FaRegAddressCard } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { TbWorldDownload } from "react-icons/tb";
import  { useState } from 'react';
import { fadeIn } from '../varients';
import { motion } from "framer-motion";

export default function Contact() {
    const [hasAnimated,setHasAnimated]=useState(false);

    const config = {
        contact: [
            {
                icon: <FaRegAddressCard size={30} />,
                heading: 'Address',
                description: 'TamilNadu,India',

            },
            {
                icon: <FaPhoneAlt size={30} />,
                heading: 'CONTACT NUMBER',
                description: '+91 6382209943',
                link: 'tel:+916382209943'
            },
            {
                icon: <SiMinutemailer size={30} />,
                heading: 'EMAIL ADDRESS',
                description: 'sam324240@gmail.com',
                link: 'https://mail.google.com/mail/?view=cm&to=sam324240@gmail.com'
            },
            {
                icon: <TbWorldDownload size={30} />,
                heading: 'DOWNLOAD RESUME',
                description: 'Samuel-Resume',
                link: ''
            }

        ]
    }
    return <section id='contact' className='flex flex-col   bg-black px-5 py-44'>

        <div className=' flex flex-col text-center pl-5 pr-5'>
            <h1 className=' flex flex-col text-5xl border-b-4 border-yellow-300  w-[260px]  m-auto font-bold items-center   text-white'>Contact Me</h1>
            <p className='text-neutral-500 py-3'>Below are the details reach out to me!</p>

            <div className='flex  flex-col  gap-16 md:flex-row  md:gap-32  justify-center py-24'>

                {config.contact.map((contact) => (
                    <div
                       

                        className='text-center flex flex-col items-center gap-4'>
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

                            className=' flex h-24 w-24 rounded-full bg-neutral-800 flex-col'>
                            <p className=' p-8 text-yellow-500'>{contact.icon}</p>
                        </motion.div>

                        <p className='text-white text-lg font-bold'>{contact.heading}</p>
                        {/* <p className='text-white'>{contact.description}</p> */}
                        <a className='text-white' href={contact.link}>{contact.description}</a>
                    </div>
                ))}
            </div>
        </div>

    </section>
}
