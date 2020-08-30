import React from 'react'
import CardItem from './CardItem'

import './Cards.css'

function Cards() {
    return (
        <div className='cards' id='cards'>
            <h1>My Recent Projects</h1>
            <div className="cards__container">
                <div className="cards_wrapper" >
                    <ul className="cards__items"> 
                        
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the amazon jungle"
                        label="Adventure"
                        path="/services"/>
                        
                        <CardItem
                        src="images/img-2.jpg"
                        text="Explore the hidden waterfall deep inside the amazon jungle"
                        label="Adventure"
                        path="/services"/>
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                        src="images/img-8.jpg"
                        text="Explore the hidden waterfall deep inside the amazon jungle"
                        label="Adventure"
                        path="/services"/>

                        <CardItem
                        src="images/img-4.jpg"
                        text="Explore the hidden waterfall deep inside the amazon jungle"
                        label="Adventure"
                        path="/services"/>

                    <CardItem
                        src="images/img-4.jpg"
                        text="Explore the hidden waterfall deep inside the amazon jungle"
                        label="Adventure"
                        path="/services"/>  

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
