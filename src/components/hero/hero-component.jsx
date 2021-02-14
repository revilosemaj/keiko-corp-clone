import React from 'react';
import { LinkButton } from "./link-button-component";
import "./hero-style.css";

export const Hero = () => {
    return (
        <section className="hero" id="hero" >
            <div className="container">
                <div className="caption">
                    <h1 className="text-uppercase  animated wow fadeInLeft">Creators of Robofriends and SmartBrain</h1>
                    <p className="enhance text-lowercase  animated wow fadeInLeft">Developers of the future, building for today</p>

                    <LinkButton 
                        href="https://revilosemaj.github.io/robofriends/"
                        anchorClass="app_store_btn text-uppercase animated wow fadeInLeft"
                        iconClass="android_icon"
                        value="Robofriends" 
                    />

                    <LinkButton 
                        href="https://github.com/aneagoie/smart-brain"
                        anchorClass="app_store_btn text-uppercase animated wow fadeInLeft"
                        iconClass="android_icon"
                        value="Smart Brain"  
                    />
                </div>
            </div>
        </section>
    );
}