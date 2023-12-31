import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './carousel.scss'

import project_1 from '../../assets/anitrack.jpg'
import project_2 from '../../assets/iq.jpg'
import project_3 from '../../assets/travel.jpg'
import project_4 from '../../assets/projo1.jpg'
import project_5 from '../../assets/sunset.jpg'
import Popup from '../Popups/popup';

import anitrackHome from '../../assets/case2/Dashboard-dk.jpg'
import anitrackHealth from '../../assets/case2/Health-dk.jpg'
import anitrackStats from '../../assets/case2/Stats-dk.png'

import softiqHome from '../../assets/softiq/Home.png'
import softiqHome1 from '../../assets/softiq/Home Page.png'
import softiqOdoo1 from '../../assets/softiq/Odoo (1).png'

import travelHome from '../../assets/HiFi/Home_md.jpg'
import travelDetails from '../../assets/HiFi/Details_hf.jpg'
import travelDestination from '../../assets/HiFi/Destination_hf.jpg'

import zenflowtask from '../../assets/zenflow/task.jpg'
import zenflowtimer from '../../assets/zenflow/timer.jpg'
import zenflowmusic from '../../assets/zenflow/music.jpg'

import digitalHome from '../../assets/digital agency/Home.jpg'
import digitalAbout from '../../assets/digital agency/About.jpg'
import digitalServices from '../../assets/digital agency/Services.jpg'


const projectsData = [
    {
        image: project_1,
        detail: "Flutter Mobile App",
        title: "Anitrack",
        problem: "Farmers and ranchers who want to make data-driven decisions to improve their operations face a major challenge due to the absence of effective tracking systems in the agricultural sector. I took on a project to use LoRa technology to build a tracking system that seamlessly blends with the surroundings",
        goal: "To design user-centric solutions that empowers farmers and ranchers to make data-driven decisions to increase productivity and sustainability while monitoring their livestock and equipment effectively",
        process: "I used a user-centered design process to create a tracking system that empathizes with farmers and ranchers' needs, addresses pain points, seamlessly integrates into the natural environment, provides real-time insights and alerts, and empowers them to make data-driven decisions that improve productivity and sustainability.",
        thought: "To evoke a sense of harmony with nature, I used a color palette consisting of #23AD77 as the primary color, representing the lush greenery of the agricultural landscape, and #EAEAEC as the light theme background, symbolizing the vast open sky. For the dark theme background, I chose #1E1E20, which creates a sleek and modern look, complementing the clean typography and intuitive iconography.",
        challenge: "A significant challenge was presented by the complex and scattered data generated by sensors in the field. I overcame this by designing a user-friendly dashboard with clear data visualizations and intuitive navigation to ensure users could quickly and easily access relevant information.",
        image1: anitrackHome,
        image2: anitrackHealth,
        image3: anitrackStats,
    },
    {
        image: project_2,
        detail: "Website Redesign",
        title: "SoftIQ Technologies",
        problem: "The existing SoftIQ Technologies website faced several challenges, including an outdated design, poor SEO optimization, and non-functional pages. These issues hindered user engagement and conversion rates.",
        goal: "My goal was to revamp the website, making it visually appealing, modern, and SEO-friendly. The objective was to enhance the user experience, establish a strong online presence, and ultimately increase the conversion rate for the ERP solutions provided by the company.",
        process: "I initiated the SoftIQ Technologies redesign with a comprehensive analysis of existing website issues. Collaborating closely with the SoftIQ team, I crafted a modern, user-centric interface, ensuring seamless navigation. SEO best practices were implemented for enhanced visibility",
        thought: "The redesign focused on balancing aesthetics and functionality, creating a visually striking website that reflects SoftIQ's professionalism. Emphasis was on an intuitive user journey with strategic placement of call-to-action elements.",
        challenge: "Overcoming non-functional pages and seamlessly integrating a new design without disrupting business operations were challenges. Meticulous planning and effective communication with the SoftIQ team resulted in a successful revamp that exceeded expectations.",
        image1: softiqHome1,
        image2: softiqHome,
        image3: softiqOdoo1,
    },
    {
        image: project_3,
        detail: "Web Development",
        title: "Travel Agency",
        problem: "As a UI/UX designer, I tackled the challenge of revamping a dated travel agency website to enhance user experience and address navigation difficulties. The goal was to boost website traffic, engagement, and ultimately drive sales.",
        goal: "The objective was to deliver a personalized and user-centric experience tailored to the unique preferences of individual travelers.",
        process: "Employing the Human-Centered Design process, I conducted research, developed user personas, created information architecture, and progressed through wireframing, prototyping, visual design, testing, and development. The result was a visually appealing, user-centric website poised for business growth.",
        thought: "I infused a color palette of #323E21 and #F37124 to evoke adventure and excitement. Clean and modern typography, along with carefully selected iconography, prioritized legibility and ease of use.",
        challenge: "The challenge of creating a scalable and maintainable design system across all platforms was met by adopting Material UI components. This approach provided a consistent and cohesive user interface, saving time and effort in the development process.",
        image1: travelHome,
        image2: travelDetails,
        image3: travelDestination,

    },
    {
        image: project_4,
        detail: "Chrome Extension",
        title: "ZenFlow",
        problem: "The lack of productivity and focus is a common challenge for many individuals. ZenFlow aimed to address this issue by providing a solution that incorporated the Pomodoro technique and a curated library of ambient lofi music.",
        goal: "My goal with ZenFlow was to create a Chrome extension that not only facilitated effective time management through the Pomodoro technique but also enhanced the user experience with ambient music to boost concentration and productivity.",
        process: "ZenFlow's design prioritized a user-centric approach, informed by extensive research on productivity tools and user preferences. The minimalist yet engaging interface was crafted for a distraction-free environment, allowing users to focus on tasks.",
        thought: "The thought process behind ZenFlow involved understanding productivity psychology. I seamlessly blended the Pomodoro technique with a soothing auditory experience, creating a tool that not only aids time management but also provides a pleasant and motivating work environment.",
        challenge: "Developing ZenFlow, a Chrome extension with integrated productivity features and an extensive music library, posed technical challenges. Overcoming these hurdles demanded innovative coding solutions and continuous testing, ensuring a reliable and user-friendly extension.",
        image1: zenflowtask,
        image2: zenflowtimer,
        image3: zenflowmusic,
    },
    {
        image: project_5,
        detail: "Website Development",
        title: "Digital Agency",
        problem: "",
        goal: "",
        process: "",
        thought: "",
        challenge: "",
        image1: digitalHome,
        image2: digitalAbout,
        image3: digitalServices,
    },
]

const ProjectCarousel = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openPopup = (project) => {
        setSelectedProject(project);
        setShowPopup(true);
        setShowPopup ? console.log("openPopup function working" + project.title) : console.log("oops::" + project.title)
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedProject(null);
    };
    return (
        <section className='project_container' id="portfolio">
            <h6>Portfolio</h6>
            <h2 className='h2'>My Projects</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                }}
                pagination={true}
                loop={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {projectsData.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="project_box" onClick={() => openPopup(project)}>
                            <img src={project.image} alt={`Project ${index}`} />
                            <div className='content'>
                                <p>{project.detail}</p>
                                <h6>{project.title}</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Popup trigger={showPopup} setTrigger={closePopup}>
                {selectedProject && (
                    <div className='project_popup'>
                        <h2>{selectedProject.title} Case Study</h2>
                        <p>{selectedProject.detail}</p>
                        <hr className="divider" />
                        <div className='design_images'>
                            <img src={selectedProject.image1} alt={`Project designs`} />
                            <img src={selectedProject.image2} alt={`Project designs`} />
                            <img src={selectedProject.image3}  alt={`Project designs`}/>
                        </div>
                        <hr className="divider" />
                        <h4>🤔Problem Statement</h4>
                        <p>{selectedProject.problem}</p>
                        <hr className="divider" />
                        <h4>🎯Goals</h4>
                        <p>{selectedProject.goal}</p>
                        <hr className="divider" />
                        <h4>🎨Design Process</h4>
                        <p>{selectedProject.process}</p>
                        <hr className="divider" />
                        <h4>💡Thought Process</h4>
                        <p>{selectedProject.thought}</p>
                        <hr className="divider" />
                        <h4>😤Challenges & Solutions</h4>
                        <p>{selectedProject.challenge}</p>
                        <hr className="divider" />
                        {/* Add other details or components as needed */}
                    </div>
                )}
            </Popup>
        </section>
    )
}

export default ProjectCarousel