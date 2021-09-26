import './Header.css'

import React from 'react';

const Header = () => {
    return (
        <div className="bg-secondary container rounded">
            <h1 className="color" >Home-aquriam</h1>
            <p className="color-1">Deciding which fish to have in your freshwater aquarium requires you to explore the choices. Take a look at some of the popular types of fish and learn more about them.</p>
            <h1 className="color">T<span className="color-1">otal fish:1000</span>0</h1>
        </div>
    );
};

export default Header;