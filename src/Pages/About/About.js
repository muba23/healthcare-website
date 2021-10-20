import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="about">
                <h2>Why Choose Us</h2>
                <p>It is the people who make Medicenter what it is and we are extremely proud of the achievements of our staff. We all work together to help our patients through recovery, providing the best possible care.</p>
            </div>
            <div className="doctors">
                <h2>Our Doctors</h2>
                <img src="https://image.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg" alt="" />
                <img src="https://image.freepik.com/free-photo/hands-unrecognizable-female-doctor-writing-form-typing-laptop-keyboard_1098-20374.jpg" alt="" />
                <img src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;