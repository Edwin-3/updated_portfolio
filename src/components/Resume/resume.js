import React from 'react'
import './resume.scss'

const experienceData = [
    {
        title: 'Odoo ERP Consultant', location: 'Kenya', duration: 'SoftIQ Technologies - (2021 - Present)',
        project: "Jays Wines Distributors Ltd",
        description: 'Led Jays Wines ERP transformation, implementing Odoo 14 and upgrading seamlessly to version 16. Provided strategic consultancy, developed custom modules, and conducted user training for enhanced efficiency.'
    },
    {
        title: 'Odoo ERP Consultant', location: 'Uganda', duration: 'SoftIQ Technologies - (2021 - Present)',
        project: "Wamo General Trading Company Ltd",
        description: 'Empowered Wamo General with customized Odoo modules. Traveled to Uganda, provided strategic consultancy, and conducted training for CEO and team, optimizing multi-country operations in Juba, Kenya, and Uganda.'
    },
    {
        title: 'Odoo ERP Consultant', location: 'Kenya', duration: 'SoftIQ Technologies - (2021 - Present)',
        project: "Milli-ions Global Ltd",
        description: 'Transformed Milli-ions Global with Odoo ERP, focusing on a comprehensive POS system for shops and branches. Delivered tailored solutions, training, and ongoing support, driving digital transformation.'
    },
    {
        title: 'Odoo ERP Consultant', location: 'Kenya', duration: 'SoftIQ Technologies - (2021 - Present)',
        project: "Dolphin’s Stationeries Ltd",
        description: 'Revitalized Dolphin’s Odoo system, upgrading from version 12 to 16 before the October 31st, 2023 deadline. Developed, tested upgrade scripts, and provided user training for seamless transition and enhanced efficiency.'
    },
    {
        title: 'Odoo ERP Consultant', location: 'Kenya', duration: 'SoftIQ Technologies - (2022 - 2023)',
        project: "The Nut-Bar Ltd",
        description: 'Led The Nut-Bar Ltd project, ensuring successful Odoo ERP implementation. Customized modules, provided strategic consultancy, and conducted user training sessions, optimizing business processes for sustained growth.'
    },
    {
        title: 'UI/UX Designer & Developer', location: 'Kenya', duration: 'Freelance - (2020 - Present)',
        description: "As a UI/UX designer and developer, I create user-friendly websites and apps that prioritize seamless digital experiences. Balancing aesthetics with optimal functionality, my designs aim to engage and delight users."
    },
]


const educationData = [
    {
        title: 'Bachelors of Business Information Technology', location: 'Kenya', duration: 'Strathmore University - (2018 - 2022)',
        description: 'Earned a degree emphasizing the fusion of IT and business strategies. During my studies, I acquired skills to effectively apply technology in various business scenarios, positioning myself as a bridge between technical solutions and business objectives.'
    },
    {
        title: 'Kenya Certificate of Secondary Education', location: 'Kenya', duration: 'St Albert the Great Siakago Boys’ High School - (2014 - 2017)',
        description: 'During my time at St Albert the Great, I diligently pursued and successfully attained my secondary education certificate. This foundational stage honed my academic discipline, problem-solving skills, and passion for learning, laying a strong groundwork for my future academic and professional endeavors.'
    },
]

const skillsData = [
    {
        name: 'Figma (UI Design)',
        level: '95%',
    },
    {
        name: 'Web Development',
        level: '90%',
    },
    {
        name: 'UX Design',
        level: '46%',
    },
    {
        name: 'Mobile App Development',
        level: '60%',
    },
    {
        name: 'Odoo ERP Implementation',
        level: '88%',
    },
    {
        name: 'Internet of Things',
        level: '44%',
    },
]
const Resume = () => {
    return (
        <section className="container resume" id="resume">
            <h6>Resume</h6>
            <h2 className='h2'>6+ Years of Experience</h2>
            <div className='experience'>
                <h5>Experience</h5>
                {experienceData.map((experience, index) => (
                    <>
                        <div key={index} className='content'>
                            <div className='resume_row'>
                                <h3>{experience.title}</h3>
                                <p>{experience.location}</p>
                            </div>
                            <h4>{experience.duration}</h4>
                            <hr />
                            <h6>{experience.project}</h6>
                            <p>{experience.description}</p>
                        </div>
                        <div className='divider-vertical'></div>
                    </>
                ))}

            </div>
            <div className='education'>
                <h5>Education</h5>
                {educationData.map((education, index) => (
                    <>
                        <div key={index} className='content'>
                            <div className='resume_row'>
                                <h3>{education.title}</h3>
                                <p>{education.location}</p>
                            </div>
                            <h4>{education.duration}</h4>
                            <hr />
                            <p>{education.description}</p>
                        </div>
                        <div className='divider-vertical'></div>
                    </>
                ))}

            </div>
            <div className='skills'>
                <h5>Skills</h5>
                {skillsData.map((skill, index) => (
                    <div className='skill-set' key={index}>
                        <div className='skill-description'>
                            <h6>{skill.name}</h6>
                            <p>{skill.level}</p>
                        </div>
                        <div className='skill-range' style={{ "--skill-level": skill.level }}></div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Resume