import './Fish.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// distructuring

const Fish = (props) => {
    const { Name, Origin, Size, Lifespan, Price, img } = props.fish;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    // dynamic

    return (
        <div className="col-md-4">
            <div className="fish-cart">
                <div className="fish-img">
                    <img src={img} alt="" />
                </div>
                <h6>Name:{Name}</h6>
                <h6>Origin:{Origin}</h6>
                <h6>Size:{Size}</h6>
                <h6>Lifespan:{Lifespan}</h6>
                <h6>Price:{Price}</h6>
                <button onClick={() => props.handleAddToCart(props.fish)} className="btn"> {element} Add to cart</button>
            </div>
        </div>
    );
};

export default Fish;