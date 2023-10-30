import React from 'react'
import './resume.scss'

const experienceData = [
    {
        title: 'Odoo ERP Technical Consultant', location: 'Kenya', duration: 'SoftIQ Technologies - (2021 - Present)',
        description: ' Skilled in designing and developing custom Odoo modules tailored to client needs. Led full-cycle implementations, provided strategic consultancy, and conducted user training sessions to maximize ERP efficiency and user proficiency. Renowned for merging technical expertise with business insights to drive organizational growth and streamline processes.'
    },
    {
        title: 'UI/UX Designer & Developer', location: 'Kenya', duration: 'Freelance - (2020 - Present)',
        description: "I specialize in creating user-friendly websites and apps with a perfect blend of design and technology. Prioritizing user needs, my designs ensure a seamless and engaging digital experience, balancing aesthetics with functionality for optimal engagement."
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
        level: '84%',
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
                            <p>{experience.description}</p>
                        </div>
                        <div className='divider'></div>
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
                        <div className='divider'></div>
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