import React from 'react'
import './services.scss'
import svg1 from '../../assets/SVG.svg'
import svg2 from '../../assets/SVG (1).svg'
import svg3 from '../../assets/SVG (2).svg'
import svg4 from '../../assets/SVG (3).svg'
import svg5 from '../../assets/SVG (4).svg'


const ServiceData = [
    {
        iconPath: svg1,
        title: "Service 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar semper magna sit amet commodo."
    },
    {
        iconPath: svg2,
        title: "Service 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar semper magna sit amet commodo."
    },
    {
        iconPath: svg3,
        title: "Service 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar semper magna sit amet commodo."
    },
    {
        iconPath: svg4,
        title: "Service 3",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar semper magna sit amet commodo."
    },

    {
        iconPath: svg5,
        title: "Service 4",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar semper magna sit amet commodo."
    },
    {
        iconPath: svg5,
        title: "Service 6",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar semper magna sit amet commodo."
    },
]


const Services = () => {

    return (
        <section className="container" id="services">
            <h6>Services</h6>
            <h2 className='h2'>What I Do</h2>
            <div className=" services-grid">
                {ServiceData.map((service, index) => (
                    <div className="card" key={index}>
                        <img src={service.iconPath} alt={service.title} />
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section >

    )
}

export default Services