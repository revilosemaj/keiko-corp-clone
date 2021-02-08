import React from 'react';

const Footer = () => {
    const imageList = ['android_icon.png', 'ios_icon.png', 'windows_icon.png'];
    
    return (
        <footer>
            <ul className="list-unstyled list-inline app_platform">
                { imageList.map((image, idx) => (
                    <li className="animated wow fadeInDown" data-wow-delay={idx > 0 ? `.${idx}s` : `${idx}s`} >
                        <a href="/"><img src={`img/${image}`} alt="" title="" /></a>
                    </li>
                ))}
            </ul>
            <p className="copyright animated wow fadeIn" data-wow-duration="2s">
                <strong>Pixelhint</strong>
            </p>
        </footer>
    );
}

export default Footer;