import React, { useEffect, useState } from 'react'
import { Button, Image } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';


const MenuCard = ({ item }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true,     // whether animation should happen only once
        });
    }, []);
    return (
        <div>
            <div data-aos="zoom-in-up" className='c-card'>
                <Image src={item.image} alt={item.title} fluid width={250} />
                <div className='card-content'>
                    <h3 className=''>{item.title}</h3>
                    <div className='card-details'>
                        <p>{item.detail}</p>
                        <p id='price' className='fw-bold'>{item.price}</p>
                    </div>
                    <button id='card-btn'>Order Now</button>
                </div>
            </div>
        </div>
        // <>
        //     {
        //         displayedProducts.map((item, key) => (
        //             <div className='c-card' key={key}>
        //                 <Image src={item.image} alt={item.title} fluid width={250} />
        //                 <div className='card-content'>
        //                     <h3 className=''>{item.title}</h3>
        //                     <div className='card-details'>
        //                         <p>{item.detail}</p>
        //                         <p id='price' className='fw-bold'>{item.price}</p>
        //                     </div>
        //                     <button id='card-btn'>Order Now</button>
        //                 </div>
        //             </div>

        //         ))}
        //     <div className='text-center'>
        //         {/* <Button variant='danger' onClick={() => setMore(!more)}>{more ? 'Show Less' : 'Show More'}</Button> */}
        //     </div>
        //     <button className="btn btn-outline-danger" onClick={() => navigate('/products')}>
        //         Show More
        //     </button>
        // </>
    )
}

export default MenuCard