import React from 'react';
import './projects.scss';
import img01 from '../../assets/projo1.jpg';
import img02 from '../../assets/projo2.jpg';
import img03 from '../../assets/projo3.jpg';

const projectData = [
    { image: img01, title: 'Web Design', description: 'Travel App Web Design' },
    { image: img02, title: 'Web Design', description: 'Travel App Web Design' },
    { image: img03, title: 'Web Design', description: 'Travel App Web Design' }
];

const Project = () => {
    return (
        <section className="container portfolio" id="work">
            <h6>Portfolio</h6>
            <h2 className='h2'>My Projects</h2>
            <div className='row'>
                {projectData.map((project, index) => (
                    <div key={index} className="content">
                        <img src={project.image} alt={project.title} style={{ width: "100%" }} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>

                ))}
            </div>
            <button className='btn'>View all projects</button>
        </section>
    )
}

export default Project;
