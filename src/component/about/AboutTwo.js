import React from 'react';
import FormOne from '../contact/FormOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';


const AboutTwo = () => {
    return (
        <div className="section-padding">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">About Us</span>
                                <h3 className="title">What Is Heart N Solutions?</h3>
                                <p>HeartNSolutions is a one stop , all things Real Estate portal. Our team is dedicated to making your real estate dream. Come true we offer in-house concierge service whether you were looking to buy or be an investor. <br/><br/> We’ve got all the solutions for you. We treat our clients as a family . We offer educational services through our coaching consulting and nonprofit programs.</p>
                            </div>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        {/* <FaCompress />  */}
                                    Looking to Rent?</Accordion.Header>
                                    <Accordion.Body>
                                    For individuals seeking the perfect rental, Heart N Solutions Management is your go-to ally. We recognize that finding the right rental space is about more than just four walls; it's about discovering a place that resonates with your lifestyle, needs, and aspirations. Our team diligently curates a diverse portfolio of properties, ensuring that you have a plethora of options tailored to your preferences. <br/><br/> Moreover, our commitment to fostering strong relationships means that as a tenant, you'll experience a harmonious and supportive renting environment. With Heart N Solutions Management, you're not just renting a space; you're stepping into a community where your comfort and satisfaction are our top priorities.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        {/* <FaCode /> */}
                                         Looking to Own?</Accordion.Header>
                                    <Accordion.Body>
                                     For those aspiring to own a home, Heart N Solutions Management is your trusted partner in turning that dream into reality. Homeownership is more than just a purchase; it's a journey, and our team is dedicated to making it as seamless and rewarding as possible. <br/><br/> We leverage our deep market knowledge to find properties that align with your aspirations and financial goals. Beyond the transaction, our educational services and non-profit programs are designed to empower and guide first-time homeowners through every facet of the process. With Heart N Solutions Management, you're not just acquiring a property; you're gaining a lifelong partner committed to your homeownership success.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        {/* <FaGlobe />  */}
                                    Looking to Invest?</Accordion.Header>
                                    <Accordion.Body>
                                     For the astute investor, partnering with Heart N Solutions Management is a strategic move towards maximizing returns and minimizing risks. Our deep-rooted expertise in the real estate market, combined with our extensive network of investors and business associates, places us in a unique position to identify lucrative opportunities often overlooked by others. <br/><br/> We don't just offer properties; we provide insights, analytics, and a proven track record of success. By choosing to invest with us, you're not only securing a property but also a dedicated team of professionals committed to ensuring your investment thrives in both the short and long term.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box shadow-box mb--30">
                            <h3 className="title">Contact our team</h3>
                            <FormOne />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTwo;