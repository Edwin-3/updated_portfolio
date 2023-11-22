import React, { useEffect } from 'react'
import './popup.scss'
import { IoClose } from "react-icons/io5";


const Popup = (props) => {
    // Use useEffect to add a click event listener when the component mounts
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the click is outside the popup, close it
            if (props.trigger && !event.target.closest('.form_body')) {
                props.setTrigger(false);
            }
        };

        // Add the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [props]);
    return (props.trigger) ? (
        <div className='form_wrapper'>
            <div className='form_body'>
                <button className='close_btn' onClick={() => props.setTrigger(false)}><IoClose /></button>
                {props.children}
            </div>
        </div>
    ) : null;
}

export default Popup