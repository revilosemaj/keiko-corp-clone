import React from 'react';



const Img = () => {
    return (
		<div className="logo pull-left animated wow fadeInLeft">
			<img className="logo-image" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" title="" />
		</div>
    );
}

const Nav = ({ handleScroll}) => {
	return (
		<nav className="pull-left">
			<ul className="list-unstyled">
				<li className="animated wow fadeInLeft" data-wow-delay="0s">
					<a href="#about" onClick={() => (handleScroll(805))}>About</a>
				</li>
				<li className="animated wow fadeInLeft" data-wow-delay=".1s">
					<a href="#app_features" onClick={() => (handleScroll(1623))}>Features</a>
				</li>
				<li className="animated wow fadeInLeft" data-wow-delay=".2s">
					<a href="#testimonials" onClick={() => (handleScroll(805*4))}>Testimonials</a>
				</li>
			</ul>
		</nav>
	);
}

const SocialMediaIcon = () => {
	return (
		<div className="social pull-right">
			<ul className="list-unstyled">
				<li className="animated wow fadeInRight" data-wow-delay=".2s"><a href="/"><img src={`${process.env.PUBLIC_URL}/img/facebook.png`} alt="" title="" /></a></li>
				<li className="animated wow fadeInRight" data-wow-delay=".1s"><a href="/"><img src={`${process.env.PUBLIC_URL}/img/twitter.png`} alt="" title="" /></a></li>
				<li className="animated wow fadeInRight" data-wow-delay="0s"><a href="/"><img src={`${process.env.PUBLIC_URL}/img/google.png`} alt="" title="" /></a></li>
			</ul>
		</div>
	);
}

const Header = ({ onClick, handleScroll }) => {
    return (
		<header>
			<div className="container">
				<Img />
				<Nav handleScroll={handleScroll} />
				<SocialMediaIcon />
				<span className="burger_icon" onClick={() => onClick() }>menu</span>
			</div>
		</header>
    );
}

export default Header;