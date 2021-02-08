import React from 'react';

const SideNav = () => {
    return (
        <div id="slider_nav">
            <div id="prev_arrow"></div>
            <div id="next_arrow"></div>
        </div>
    );
}

const TestimonialList = (props) => {
    return (
        <div className="testimonials_list">
            <ul className="list-unstyled text-center slides clearfix" id="tslider">
                {props.testimonialData.map((testimonial, idx) => (
                <li>
                    <blockquote>
                        <p>{ testimonial.description }</p>
                        <span className="author text-uppercase">{testimonial.author}</span>
                        <span className="job">{testimonial.job}</span>
                    </blockquote>
                </li>
                ))}
            </ul>
            <SideNav />
        </div>
    );
}

const Testimonials = () => {
    const testimonialData = [
        {
            author: "John Doe",
            job: "Full Stack developer",
            description: "Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci  in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas."
        },
        {
            author: "Alex Fredy",
            job: "Javascript developer",
            description: "Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci  in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas."
        },
        {
            author: "Sara Aliba",
            job: "Web Designer",
            description: "Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci  in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas."
        }

    ]

    return (
        <section className="testimonials animated wow fadeIn" id="testimonials" data-wow-duration="2s">
            <div className="container">
               <TestimonialList testimonialData={testimonialData}/>
            </div>
        </section>
    );
}

export default Testimonials;