
import React from 'react';
// Total calculation
const Total = (props) => {
    const { addedFish } = props;
    let Total = 0;
    let Name = []
    for (const fish of addedFish) {
        Total = Total + fish.Price
        Name = Name + fish.Name + ", "
    }

    return (
        <div>
            <h3 className="color">Total Price:{Total}</h3>
            <h3 className="color"> Name:{Name} </h3>
        </div >
    );

};
export default Total;