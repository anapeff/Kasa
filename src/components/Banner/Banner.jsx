import React from "react";
import './_banner.scss';
import Background from '../../images/background.png';


const Banner = ({title, image}) => {
    return (
        <div className="banner">
            <img src={Background} alt='background' className="background"/>
            <h1 className="banner-title">{title}</h1>
        </div>
    );
};

export default Banner;