import './App.css';
import { Header } from './components/header/header-component';
import { Hero } from './components/hero/hero-component';
import { Featured } from './components/featured/featured-component';
import About from './components/about/About';
import AppFeatures from './components/app_features/AppFeatures';
import Testimonials from './components/testimonials/Testimonials';
import EmailSubscription from './components/email/EmailSubscription';
import Footer from './components/footer/Footer';
import { useState } from 'react';

const SocialMediaIcon = () => {
	return (
		<div style={{ width: "100%", marginTop:"40px"}}>
			<ul style={{ listStyleType: "none", paddingLeft: "20px", textAlign: "left"}}>
				<li style={{display: "inline-block", margin: "0 10px", boxShadow: "1px 1px 5px #ccc", borderRadius: "50%"}}>
          <a href="/"><img src={`${process.env.PUBLIC_URL}/img/facebook.png`} alt="" title="" /></a>
        </li>
				<li style={{display: "inline-block", margin: "0 10px", boxShadow: "1px 1px 5px #ccc", borderRadius: "50%"}}>
          <a href="/"><img src={`${process.env.PUBLIC_URL}/img/twitter.png`} alt="" title="" /></a>
        </li>
				<li style={{display: "inline-block", margin: "0 10px", boxShadow: "1px 1px 5px #ccc", borderRadius: "50%"}}>
          <a href="/"><img src={`${process.env.PUBLIC_URL}/img/google.png`} alt="" title="" /></a>
        </li>
			</ul>
		</div>
	);
}

const MobileNav = ({ onClick, handleScroll }) => {
	return (
		<div className="mobileNavContainer" style={{ boxShadow: "1px 1px 5px #ccc", width : "100%", minHeight: "100vh", position: "absolute", top: 0, left: 0, zIndex: 1000 }}>
			<nav style={{ backgroundColor: "#fff", width: "50%", paddingTop: "70px", position: "fixed", right: 0,height: "100%"}}>
      <button  onClick={() => onClick() } style={{ position: "absolute", left: "20px", fontWeight: "bold", top: "10px", fontSize: "15px"}}>CLOSE</button>
				<ul style={{ listStyleType: "none", fontWeight: "bold", lineHeight: 3.5, textAlign: "left", paddingLeft: "10px"}}>
					<li style={{borderBottom: "1px solid #ccc", paddingLeft: "20px"}} >Home</li>
          <li style={{borderBottom: "1px solid #ccc", paddingLeft: "20px"}} onClick={()=> { onClick(); handleScroll(890) } }>About</li>
					<li style={{borderBottom: "1px solid #ccc", paddingLeft: "20px"}} onClick={()=> { onClick(); handleScroll(2410) } }>Features</li>
					<li style={{borderBottom: "1px solid #ccc", paddingLeft: "20px"}} onClick={()=> { onClick(); handleScroll(2075*2) } }>Testimonials</li>
				</ul>
        <SocialMediaIcon />
			</nav>
		</div>
	);
}

function App() {
  const [mobileNav, setMobileNav ] = useState(false);

  const handleClick = () => {
    setMobileNav(prevValue => !!prevValue ? false : true);
  }

  const  handleScroll = (offsetHeight) => {
      window.scroll({
        top: offsetHeight,
        left: 0, 
        behavior: 'smooth',
      });
  }

  return (
    <div className="App">
      <Header onClick={handleClick} handleScroll={handleScroll}/>
      <Hero />
      <Featured />
      <About />
      <AppFeatures />
      <Testimonials />
      <EmailSubscription />
      <Footer />
      { !!mobileNav  && <MobileNav onClick={handleClick} handleScroll={handleScroll} /> }
    </div>
  );
}

export default App;
