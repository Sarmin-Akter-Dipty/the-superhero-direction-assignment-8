import './Main.css'
import React, { useEffect } from 'react';

const Main = () => {
    useEffect(() => {
        fetch("./fish.json")
            .then(res => res.json())
            .then(data => console.log(data));

    }, [])
    return (
        <div>
            <h1>fish fish</h1>
        </div>
    );
};

export default Main;