import React from 'react';



const Image = ( { src, alt, title }) => {
    return <img src={process.env.PUBLIC_URL+src} alt={alt} title={title} />;
}

const ImageDiv = () => {
    return (
        <div className="col-md-6 text-center animated wow fadeInLeft">
            <div className="iphone">
                <Image src="/img/iphone.png" alt="" title="" />
            </div>
        </div>
    );
}

const List = (props) => {
    return (
        <li className={props.class}>
            <span>{props.description}</span>
        </li>
    );
}
const ProductList = () => {
    const iconsData = [
        {
            class: "camera_icon",
            description: "Euismod ligula ipsum vulputate tellus."
        },
        {
            class: "video_icon",
            description: "Morbi non efficitur nibh sit amet est eros."
        },
        {
            class: "eye_icon",
            description: "Fusce faucibus ante liberonec luctus egestas."
        },
        {
            class: "pic_icon",
            description: "Quisque pretium malesuada ornare."
        },
        {
            class: "loc_icon",
            description: "Cras interdum vestibulum dolor."
        }
    ];

    return (
        <ul className="list-unstyled">
            {iconsData.map((icon, idx) => (
                <List key = {idx} class={icon.class} description={icon.description} />
            ))}
        </ul>
    );
}

const FeaturesList = () => {
    return (
        <div className="features_list">
            <h1 className="text-uppercase">The Greatest Products Ever Created</h1>
            <p>Seuismod ligula ipsum vulputate tellus quisque dictum tortor at purus faucibus tincidunt, pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
            <ProductList />
            <a href="/" className="app_store_btn text-uppercase" id="play_video" data-video="https://www.youtube.com/watch?v=sCX_YMPuJGA?autoplay=1&showinfo=0">
                <i className="play_icon"></i>
                <span>About Video</span>
            </a>
            <a href="#hero" className="app_link">Get the app</a>
        </div>
    );
}

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                   <ImageDiv />
                    <div className="col-md-6 animated wow fadeInRight">
                        <FeaturesList />
                    </div>
                </div>
            </div>
            <div className="about_video show_video">
                <a href="/" className="close_video">about</a>
            </div>
        </section>
    );
}

export default About;