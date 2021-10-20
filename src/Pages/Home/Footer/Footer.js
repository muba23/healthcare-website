import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="address">
                <p><small>2702 Memory Lane, Chicago, IL 60605</small></p>
                <p><small>(510) 210-5225</small></p>
                <p><small>contact@wecare.com</small></p>
            </div>
            <div><img src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/2x/external-hospital-medical-emergency-inipagistudio-lineal-color-inipagistudio.png" alt="" /></div>
            <div className="copyright"><p>&copy; 2021 WeCare Hospital. All Rights Reserved</p></div>
        </div>
    );
};

export default Footer;