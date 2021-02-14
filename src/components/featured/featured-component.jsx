import React from 'react';
import { List } from "../header/list-component";
import { Image } from "../header/image-component";

export const Featured = () => {
    const imgAttr = [
        {
            classNames:"", 
            src:`${process.env.PUBLIC_URL}/img/google_logo.png`,
            alt:"google logo",
            title:"google" 
        },
        {
            classNames:"", 
            src:`${process.env.PUBLIC_URL}/img/facebook_logo.png`,
            alt:"facebook logo",
            title:"facebook" 
        },
        {
            classNames:"", 
            src:`${process.env.PUBLIC_URL}/img/yahoo_logo.png`,
            alt:"yahoo logo",
            title:"yahoo" 
        },
        {
            classNames:"", 
            src:`${process.env.PUBLIC_URL}/img/paypal_logo.png`,
            alt:"paypal logo",
            title:"paypal" 
        }
    ];
    
    const listItems = imgAttr.map((img, idx) => {
		return (
			<li 
                key={idx} 
                className="col-xs-6 col-sm-6 col-md-3 animated wow fadeInDown"
                data-wow-delay={idx+1 === 1 ? "" : `.${idx+1}s`} 
            >
				<Image 
					classNames={img.classNames}
					src={img.src}
					alt={img.alt}
					title={img.title} 
				/>
			</li>
		)
	});

    return (
        <section className="featured_on">
            <div className="container">
                <List listClass="list-unstyled text-center clearfix" listItems={listItems}/>
            </div>
        </section>
    );
}
