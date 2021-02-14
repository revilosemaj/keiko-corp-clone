import React from 'react';
import { Image } from './image-component';
import { Nav } from './nav-component';
import { List } from './list-component';
import './header-style.css';

export const Header = ({ onClick, handleScroll }) => {
	const imgAttr = [
        {
            classNames:"", 
            src:`${process.env.PUBLIC_URL}/img/facebook.png`,
            alt:"facebook icon",
            title:"facebook" 
        },
        {
            classNames:"", 
            src:`${process.env.PUBLIC_URL}/img/twitter.png`,
            alt:"twitter icon",
            title:"twitter" 
        },
        {
            classNames:"", 
            src:`${process.env.PUBLIC_URL}/img/google.png`,
            alt:"google icon",
            title:"google" 
        }
    ];

	const linkAttr = [
		{ href:"#about", value:"About", onClick: () => handleScroll(805) },
		{ href:"#app_features", value:"Features", onClick: () => handleScroll(1623) },
		{ href:"#testimonials", value:"Testimonials", onClick: () => handleScroll(805*4) }
	];

	const listItems = imgAttr.map((img, idx) => {
		return (
			<li key={idx} className= "animated wow fadeInRight">
				<Image 
					classNames={img.classNames}
					src={img.src}
					alt={img.alt}
					title={img.title} 
				/>
			</li>
		)
	})

	const navItems = linkAttr.map((link, idx) => {
		return (
			<li key={idx} className="animated wow fadeInLeft" data-wow-delay={`.${idx}s`}>
				<a href={link.href} onClick={link.onClick}>{link.value}</a>
			</li>
		)
	})

    return (
		<header>
			<div className="container">
				<div className="logo pull-left animated wow fadeInLeft">
					<Image 
						classNames="logo-image" 
						src={`${process.env.PUBLIC_URL}/img/logo.png`}
						alt="keiko corp logo"
						title="keiko corp"
					/>
				</div>
				<Nav navClass="pull-left" listClass="list-unstyled" navItems={navItems} />
				<div className="social pull-right">
					<List listClass="list-unstyled" listItems={listItems}/>
				</div>
				<span className="burger_icon" onClick={() => onClick() }>menu</span>
			</div>
		</header>
    );
}