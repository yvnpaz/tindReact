import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([]);
    // {
    //     name: "Zinedine Zidane",
    //     url: "https://www.fussballeuropa.com/images/big/zinedine-zidane-2018-102.jpg"
    // },
    // {
    //     name: "R. Kaká",
    //     url: "https://cdn.britannica.com/87/139487-050-98D3449D/Kaka-2009.jpg"
    // }

    // Good way in react
    // setPeople([...people, 'yvan', 'paz']);

    // Bad way
    // people.push('yvan', 'paz');


    // Piece of code which runs based on a condition
    useEffect(() => {
        //this is where the code runs...
        const unsubscribe = database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            //this is the cleanup...
            unsubscribe();
        }

        //this will run ONCE when the component loads, and never again.
    }, [people]);

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}>
                        <div className="card"
                            style={{ backgroundImage: `url(${person.url})` }}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;