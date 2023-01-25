import React from "react";
import './descriptions.css';

import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Descriptions = ({weather}) => {

    const cards = [
        {
            id: 1,
            icon: <FaArrowDown/>,
            title: "min Temp",
            data: weather.temp_min.toFixed(),
        },
        {
            id: 2,
            icon: <FaArrowUp/>,
            title: "max Temp",
            data: weather.temp_max.toFixed(),
        },
    ]

    return (
    <div className="section section__descriptions">
        <br></br>
        {cards.map(({icon, title, data}) => (
        <div className="card">
            <div className="description__card-icon">
                {icon}
                <small>{title}</small>
            </div>
            <h2>{`${data}°C`}</h2>
        </div>
        ))}
    </div>
    );
};

export default Descriptions;