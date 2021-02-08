import React from 'react';

const Form = () => {
    return  (
        <form action="#" metohd="post" className="animated wow fadeIn" data-wow-duration="2s" id="submit_form">
            <input type="email" id="mc-email" placeholder="Enter your email"/>
            <button type="submit" id="mc_submit">
                <i className="icon"></i>
            </button>
        </form>
    );
}
const EmailSubscription = () => {
    return (
        <section className="sub_box">
            <p className="cta_text animated wow fadeInDown">We're hiring. Join Our company!</p>
            <Form />
            <div className="message" id="error_msg">Please Enter A Valid Email.</div>
            <div className="message" id="success_msg">Thank You For Your Subscription.</div>
        </section>
    );
}

export default EmailSubscription;