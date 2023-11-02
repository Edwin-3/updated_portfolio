import React from 'react'
import "./testimony.scss"

const testimonyData = [
    {
        text: "Edwin transformed our digital game with intuitive designs that boosted user engagement. His deep understanding of our brand was evident in the final product.",
        author: "Sarah Johnson",
        occupation: "CEO, TechFlex Solutions",
    },
    {
        text: "Working with Edwin's UI/UX skills are unmatched. Our app's redesign under their guidance saw higher user retention, with rave reviews from our community.",
        author: "Robert Kaluku",
        occupation: " Product Manager, ByteCraft Inc",
    },
    {
        text: "His expertise gave our website both style and ease-of-use. Their dedication and collaboration made them stand out in the industry.",
        author: "Sophia Patel",
        occupation: "Founder, SpiceWeb Innovations",
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
                        <div className='person'>
                            <h3>{testimony.author}</h3>
                            <p className='occupation'>{testimony.occupation}</p>
                        </div>

                    </div>

                ))}
            </div>
        </section>)
}

export default Testimony