import React from 'react';

const FeaturesList = (props) => {
    return (
        <div className="row text-center">
            {props.ImageList.map((image, idx) => (
                <div key={idx} className="col-sm-4 col-md-4 details animated wow fadeInDown" data-wow-delay={`${idx}s`}>
                    <img src={`img/${image}`} alt="" title="" />
                    <h1 className="text-uppercase">malesuada fames turpis.</h1>
                    <p className="text-lowercase">vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.</p>
                </div>
            ))}
        </div>
    );
}

const AppFeatures = () => {
    const ImageList1 = ['f_icon1.png', 'f_icon2.png', 'f_icon3.png'];
    const ImageList2 = ['f_icon4.png', 'f_icon5.png', 'f_icon6.png'];

    return (
        <section className="app_features" id="app_features">
            <div className="container">
                <FeaturesList ImageList={ImageList1} />
                <FeaturesList ImageList={ImageList2} />    
            </div>
        </section>
    );
}

export default AppFeatures;