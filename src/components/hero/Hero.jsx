import React from 'react';

const AnchorButton = ({ href, anchorClass, iconClass, value }) =>{
    return (
        <a href={href} className={anchorClass} target="blank">
            <i className={iconClass}></i>
            <span>{value}</span>
        </a>
    );
}

const Caption = () => {
    return (
        <div className="caption">
            <h1 className="text-uppercase  animated wow fadeInLeft">Creators of Robofriends and SmartBrain</h1>
            <p className="enhance text-lowercase  animated wow fadeInLeft">Developers of the future, building for today</p>

            <AnchorButton 
                href="https://revilosemaj.github.io/robofriends/"
                anchorClass="app_store_btn text-uppercase animated wow fadeInLeft" 
                iconClass="android_icon"
                value="Robofriends"
            />

            <AnchorButton 
                href="https://github.com/aneagoie/smart-brain"
                anchorClass="app_store_btn text-uppercase animated wow fadeInLeft" 
                iconClass="iphone_icon"
                value="SmartBrain"
            />
        </div>
    );
}

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="container">
                <Caption />
            </div>
        </section>
    );
}

export default Hero;