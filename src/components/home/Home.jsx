/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import './home.css'

const Home = () => {
    const [actors, setActors] = useState([]);
    const [selectedActors, setSelctedActors] = useState([]);


    useEffect(() =>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setActors(data))
    }, [])


    const handleSelectActor = (actor) =>{
        
        setSelctedActors([...selectedActors, actor]);
    };
    

    
    

    return (
        <div className='container'>
            <div className="home-container">
            <div className="card-container">
                {
                    actors.map((actor) => (
                        <div key={actor.id} actor={actor} className="card">
                            <div className="card-img">
                                <img className='photo' src={actor.image} alt="" />
                            </div>
                            <h2>Name: {actor.name}</h2>
                            <h4>Profession: {actor.role}</h4>
                            <p>Salary: ${actor.salary}</p>
                            <button onClick={() =>handleSelectActor(actor)}>Select</button>
                            
                        </div>
                    ))
                }
            </div>
            <div className='cart'>
                <Cart selectedActors={selectedActors}></Cart>

                
            </div>
            </div>
        </div>
    );
};

export default Home;