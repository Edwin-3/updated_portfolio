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
        title: "Odoo ERP Development",
        description:
            "Provide Odoo ERP expertise to streamline processes, enhance efficiency, and develop custom modules."
    },
    {
        iconPath: svg2,
        title: "Custom UI/UX Design",
        description:
            "Craft user-centric Figma designs through wireframing, prototyping, and delivering tailored high-fidelity solutions"
    },
    {
        iconPath: svg3,
        title: "Web Development",
        description:
            "Develop scalable ReactJS apps with reusable components for optimized, seamless user experience."
    },
    {
        iconPath: svg4,
        title: "Mobile App Development",
        description:
            "Create cross-platform, high-performance mobile apps with Flutter, optimizing time and costs."
    },

    {
        iconPath: svg5,
        title: "Responsive Web Development",
        description:
            "Create responsive, mobile-friendly websites for a seamless user experience across all devices."
    },
    {
        iconPath: svg5,
        title: "Ecommerce Services",
        description:
            "Develop seamless WooCommerce platforms to elevate online sales, shopping experience and enrich customer engagement."
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