import React, { useEffect } from 'react'
import { Button, Col, Container, Image, Row, TabContainer } from 'react-bootstrap'
import Menu from './Menu'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style.css'


function Hero() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true,     // whether animation should happen only once
        });
    }, []);

    return (
        <>
            <div className='container-fluid bg-danger'>
                <Container data-aos="zoom-out" className='text-white min-vh-100 d-flex align-items-center justify-content-center blur-effect'>
                    <Row>
                        <Col className='mt-5 pt-5'>
                            <h1>Wellcome to <br /><span style={{ fontWeight: '800' }} className='text-warning'>Shah Burger</span></h1>
                            <p>A burger is a classic, savory sandwich made with a patty of ground meat, typically beef, nestled between a soft, toasted bun. Often topped with lettuce, tomato, cheese, onions, and condiments like ketchup, mustard, or mayonnaise, burgers can be customized with endless variations. They are a popular fast-food item but can also be gourmet, offering a satisfying and hearty meal for any occasion.</p>
                            <button className='c-btn mt-2'>Order Now</button>
                        </Col>
                        <Col>
                            <Image data-aos="zoom-out" src='hero-logo.png' fluid className='hero-img' width={600} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Menu />
        </>
    )
}

export default Hero