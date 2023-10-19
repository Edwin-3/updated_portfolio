import React from 'react'
import './resume.scss'

const experienceData = [
    {
        title: 'UI/UX Designer & Trainer', location: 'Kenya', duration: 'Comido Out Tech - (2020 - Present)',
        description: 'Partnered with cross-functional teams to craft user-centric solutions for web and mobile apps.Guided UI design, producing captivating interfaces that reflect brand guidelines. Employed user research to drive seamless implementation and informed design choices.'
    },
    {
        title: 'UI/UX Designer & Trainer', location: 'Kenya', duration: 'Comido Out Tech - (2020 - Present)',
        description: 'Partnered with cross-functional teams to craft user-centric solutions for web and mobile apps.Guided UI design, producing captivating interfaces that reflect brand guidelines. Employed user research to drive seamless implementation and informed design choices.'
    },
    {
        title: 'UI/UX Designer & Trainer', location: 'Kenya', duration: 'Comido Out Tech - (2020 - Present)',
        description: 'Partnered with cross-functional teams to craft user-centric solutions for web and mobile apps.Guided UI design, producing captivating interfaces that reflect brand guidelines. Employed user research to drive seamless implementation and informed design choices.'
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