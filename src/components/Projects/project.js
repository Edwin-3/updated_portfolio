import React from 'react'
import './projects.scss'
import img01 from '../../assets/SVG (1).svg'


const projectData = [
    {
        image: img01,
        title: 'Web Design',
        description: 'Travel App Web Design',
    },
    {
        image: img01,
        title: 'Web Design',
        description: 'Travel App Web Design',
    },
    {
        image: img01,
        title: 'Web Design',
        description: 'Travel App Web Design',
    }


]

const Project = () => {
    return (
        <section className="container">
            <h6>Portfolio</h6>
            <h2>My Projects</h2>
            <div className='project-carousel'>
            {projectData.map((project, index) => (
                    <div className="project_card" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Project