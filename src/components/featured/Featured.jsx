import React from 'react';

const List = ({ listClass, dataDelay, imgSrc}) => {
    return (
        <li className={listClass} data-wow-delay = { dataDelay === 1 ? "" : `.${dataDelay}s` }>
            <img src={process.env.PUBLIC_URL+imgSrc} alt="" title="" />
        </li>
    );
}

const ImageList = ( { images }) => {
    return (
        <ul className="list-unstyled text-center clearfix">
            {images.map( (image, idx) => (
               <List 
                    key={idx} 
                    listClass="col-xs-6 col-sm-6 col-md-3 animated wow fadeInDown"
                    dataDelay={idx + 1}
                    imgSrc={image}
                />
            ))}
        </ul>
    );
}

const Featured = () => {
    const images = ["/img/google_logo.png", "/img/facebook_logo.png", "/img/yahoo_logo.png", "/img/paypal_logo.png" ];
    
    return (
        <section className="featured_on">
            <div className="container">
                <ImageList images={images}/>
            </div>
        </section>
    );
}

export default Featured;