import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [homeServices, setHomeServices] = useState([]);
    useEffect(()=>{
        fetch('homeServices.json')
            .then(res=>res.json())
            .then(data=>setHomeServices(data))
    },[])

    return (
        
    <div className="home"> 
       <div className="home-about">
            <p className="home-para"><h1 style={{color:'orange'}}>Visit Us</h1>
                We are a modern ophthalmology center, where the most modern equipment as well as the knowledge, experience and competences of recognized professors and experienced specialists have joined forces to provide effective help to our patients six days a week. When you come to us, you can be sure that your ophthalmological problem will be dealt with by a specialist who has both active experience in the diagnosis and treatment of a given disease, as well as constantly updating his knowledge.</p>
     </div>
         <h1>Our Services</h1>
        <div className="service-container">
            {
                homeServices.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
            }
        </div>
    
        <div className="carousel-container">
        <Carousel className="carousel">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/tB2VBGp/Woman-with-a-tester-and-a-printed-circuit-board.jpg"
                alt="First slide"
                />
                <Carousel.Caption className="caption">
                <h3>Your Future is Clear</h3>
                <p>Welcome to WeCare Hospital, a professor and experts clinic for comprehensive diagonstics and modern treatment.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/qd21CjG/image-01-5.jpg"
                alt="Second slide"
                />
                <Carousel.Caption className="caption">
                <h3>The Best Specialists</h3>
                <p>Welcome to WeCare Hospital, a professor and experts clinic for comprehensive diagonstics and modern treatment.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/GcZg6Yg/image-03-2.jpg"
                alt="Third slide"
                />
                <Carousel.Caption className="caption">
                <h3>Modern Therapies</h3>
                <p>Welcome to WeCare Hospital, a professor and experts clinic for comprehensive diagonstics and modern treatment.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        </div>
    );
};

export default Home;