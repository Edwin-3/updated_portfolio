import React from 'react'
import "./testimony.scss"

const testimonyData = [
    {
        text: "The UX Amadoso designed was outstanding. The interface was cool and visually appealing, and user-friendly. Highly recommended",
        author: "Sarah Johnson",
        occupation: "App User",
    },
    {
        text: "The UX Amadoso designed was outstanding. The interface was cool and visually appealing, and user-friendly. Highly recommended",
        author: "Sarah Johnson",
        occupation: "App User",
    },
    {
        text: "The UX Amadoso designed was outstanding. The interface was cool and visually appealing, and user-friendly. Highly recommended",
        author: "Sarah Johnson",
        occupation: "App User",
    },
]
const Testimony = () => {
    return (
        <section className="container testimonials" id="testimonials">
            <h6>Testimonials</h6>
            <h2 className='h2'>What Clients Say</h2>
            <div className='testimony-wrapper'>
                {testimonyData.map((testimony, index) => (
                    <div key={index} className="content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" viewBox="0 0 46 20" fill="none">
                            <g clip-path="url(#clip0_106_7441)">
                                <path d="M0.669922 0H20.6699L0.669922 20V0Z" fill="#343A40" />
                                <path d="M25.6699 0H45.6699L25.6699 20V0Z" fill="#343A40" />
                            </g>
                            <defs>
                                <clipPath id="clip0_106_7441">
                                    <rect width="45" height="20" fill="white" transform="translate(0.669922)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='text'>{testimony.text}</p>
                        <h3>{testimony.author}</h3>
                        <p>{testimony.occupation}</p>
                    </div>

                ))}
            </div>
            <button className='btn'>View all projects</button>
        </section>)
}

export default Testimony