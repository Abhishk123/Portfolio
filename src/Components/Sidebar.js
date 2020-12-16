import React from 'react';
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import ava from '../assets/abhis.png'
import resume from '../assets/ABHISHEK_URS_CJ-RESUME.pdf'

const Sidebar=()=>{

    const handleEmailMe=()=>{
        window.open('mailto:abhishekurst@gmail.com')
    }

    return(

    <div className='sidebar'>
        <img src={ava} alt="" className='sidebar_avatar'/>
        <div className="sidebarname">ABHISHEK URS <span>C J</span> </div>
        <div className="sidebar_item sidebar_title">Student</div>
        <a href={resume} download='ABHISHEK_URS_CJ-RESUME.pdf' >
            <div className="sidebar_item sidebar_resume">
                <img src={tie} alt="resume"  className="sidebar_icon"/>Download Resume
            </div>
        </a>
        <figure className='sidebar_social-icons my-2'>
            <a href="!#"><img src={facebook} alt="facebook" className="sidebar_icon mr-3"/></a>
            <a href="!#"><img src={instagram} alt="instagram" className="sidebar_icon"/></a>

        </figure>

        <div className="contact">
            <div className="sidebar_item sidebar_github">
                <a href="https://github.com/Abhishk123/" target="_blank" rel='noopener noreferrer'><img src={github} alt="github" className="sidebar_icon mr-3"/>github</a>
            </div>
            <div className="sidebar_location">
                <img src={pin} alt="location" className="sidebar_icon mr-3"/>
                Karnataka.India
            </div>
            <div className="sidebar_item">abhishekurst@gmail.com</div>
            <div className="sidebar_item">6361247286</div>
        </div>

        <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>Email Me</div>

    </div>

    )
}

export default Sidebar;