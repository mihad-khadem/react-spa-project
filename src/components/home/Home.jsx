import React, { useEffect } from 'react';
import Cart from '../cart/Cart';
import './home.css'

const Home = () => {

    useEffect(() =>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div className='container'>
            <div className="card-container">
                <div className="card">
                    <div className="card-img">
                        <img className='photo' src="https://i.ibb.co/Rvc67Cr/ar.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;