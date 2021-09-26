import './Main.css'
import React, { useEffect, useState } from 'react';
import Fish from '../Fish/Fish';
import Total from '../Total/Total';

//  Api fetch 
const Main = () => {
    const [fishes, setfishes] = useState([])
    useEffect(() => {
        fetch("./fish.json")
            .then(res => res.json())
            .then(data => setfishes(data));

    }, [])
    const [addedFish, setAddedFish] = useState([]);

    const handleAddToCart = (newFish) => {
        console.log(newFish.Name);
        const newAddedFish = [...addedFish, newFish];
        setAddedFish(newAddedFish);
    };

    // cart design

    return (
        <div>
            <div className="row">
                <div className="col-md-9 left-side">
                    <div className="row">
                        {
                            fishes.map((fish) => (<Fish handleAddToCart={handleAddToCart} key={fish.Name} fish={fish}></Fish>))
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <h3 className="color" >Total Added:{addedFish.length}</h3>
                    <Total addedFish={addedFish}></Total>

                </div>
            </div>
        </div>
    );
};

export default Main;