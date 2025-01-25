import { useState } from "react";
import {motion} from "framer-motion";
import { fadeIn } from "../varients";
export default function Resume() {
    const [hasAnimated,setHasAnimated]=useState(false); //track animation state
    const config = {
        link: 'https://drive.google.com/file/d/1ImHqFXZVcj3IgPX4QAWsOc6wEvNRoti2/view'
    }
    const config1 = {
        Experience: [
            {
                date: 'JAN 2024-Present',
                designation: 'IT Executive',
                companyname: 'Prashanth Hospital',
                line1: 'Hi, I’m Samuel G, and I’m a Junior App Executive in the hospital sector. My role involves assisting patients in navigating and using the hospital’s mobile app, troubleshooting issues, and ensuring a smooth user experience. I collaborate with departments such as Billing, Accounts, and Reception to ensure the app integrates seamlessly into daily hospital operations.',
                line2: 'I actively engage in project discussions with the CEO and IT Manager, helping gather and analyze requirements from healthcare professionals. Additionally, I conduct User Acceptance Testing (UAT) and collaborate with app developers to improve app functionality and address any technical issues.',
                line3: 'I am skilled in Figma, which I use to design templates, flow charts, and wireframes for new projects, ensuring they align with user needs and project goals. As I continue to grow in my role, I’m excited to explore more opportunities in the intersection of healthcare and technology'
            }
        ]
    }
    const config2 = {
        Education: [
            {
                date: '2020-2023',
                degree: 'Bachelor of computer Application',
                schoolcollege: 'MADRAS CHRISTIAN COLLEGE,CHENNAI'
            },
            {
                date: '2018-2020',
                degree: 'Higher Secondary School',
                schoolcollege: 'ST.ANNES MATRUCULATION, RAMANATHAPURAM'

            }
        ]
    }
    return <section id='resume' className='flex flex-col md:flex-row px-5 py-20 bg-black justify-center '>

        <div className='flex flex-col items-center  '>
        <h1 className='text-5xl font-bold border-b-4 border-yellow-400 text-white'>Resume</h1>

            <motion.div 
            variants={fadeIn ("up",0.2)}//change the direction based on the scroll
            initial="hidden"
            whileInView="show" //trigger the animation when the element comes in the viewport
            onViewportBoxUpdate={(info)=>{
                if (info.isVisible && hasAnimated){
                setHasAnimated(true);
                }
            }}
            viewport={{once:true,  amount:0.7}}

            className='flex flex-col items-center text-center md:text-left'>
                <p className='text-gray-400 text-balance text-center py-5 px-6 md:w-2/3'>
                IT Executive with expertise in software testing, API validation, and UI design. Skilled in collaborating with 
developers, monitoring hospital apps and dashboards, and training staff for effective system use. Focused on 
enhancing operational efficiency and user experience in healthcare technology.
                </p>
            </motion.div>
            <br></br>
            <div className='md:flex-col items-center border-b-4  md:w-1/2 w-full border-yellow-200 '>
                <h1 className=' text-5xl flex flex-col   items-center py-1  text-white'>Experience<span className=""></span></h1>
                <div className=' '>

                </div>
            </div>
            <br></br>
            {config1.Experience.map((Experience) => (

                <div
                
                className='flex flex-col md:w-1/2 p-12 rounded-md gap-4 px-1 pl-5 md:px-10 bg-neutral-900 text-white ' >

                    <h1 className='text-3xl font-bold text-yellow-300' >{Experience.date}</h1>
                    <h1 className=' text-3xl '>{Experience.designation}</h1>
                    <h1 className='text-xl text-gray-500 font-bold'>{Experience.companyname}</h1>
                    <ul className='list-disc text-lg text-gray-400'>
                        <li className='pb-5'>{Experience.line1}</li>
                        <li className='pb-5'>{Experience.line2}</li>
                        <li className='pb-5'>{Experience.line3}</li>
                    </ul>
                </  div>
            ))}

            <br></br>
            <br></br>
            <br></br>
            <div className=" border-b-4 md:w-4/5  border-yellow-200">

                <h1 className='text-5xl  text-white text-center border-yellow-200 justify-center items-center '>Education</h1>
                <div className=' w-96 bg-yellow-200    '>

                </div>
            </div>

            <br>
            </br>
            <br></br>
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
            className=' md:w-auto flex flex-col  md:flex-row gap-10 '>
                {config2.Education.map((Education) => (
                    <div className='  md:w-1/2  p-10 rounded-md  bg-neutral-800 md:bg-neutral-900 py-5 pl-3  md:text-nowrap '>
                        <h1 className='text-3xl font-bold text-yellow-300 mb-4'>{Education.date}</h1>
                        <h1 className=' text-white text-3xl mb-4'>{Education.degree}</h1>
                        <p className=' text-gray-500 font-bold'>{Education.schoolcollege}</p>
                        <br></br>
                    </div>
                ))}
            </motion.div>   
            <br></br>
            <br></br>
            
            <motion.p 
            variants={fadeIn ("up",0.2)}//change the direction based on the scroll
            initial="hidden"
            whileInView="show" //trigger the animation when the element comes in the viewport
            onViewportBoxUpdate={(info)=>{
                if (info.isVisible && hasAnimated){
                setHasAnimated(true);
                }
            }}
            viewport={{once:true,  amount:0.7}}
            className='pb-5 justify-center text-center' ><a className='btn text-neutral-800' target="_blank" href={config.link}>Download CV</a></motion.p>
        </div>
    </section>
}