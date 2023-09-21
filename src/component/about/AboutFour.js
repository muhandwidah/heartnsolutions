import React from 'react';
// import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';


const AboutFour = () => {
    return (
            <div className="section section-padding case-study-featured-area">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="case-study-featured-thumb text-start">
                        <img src={"https://i.ibb.co/BjT0nqt/pexels-fomstock-com-1115804.jpg"} alt="travel" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="case-study-featured">
                        <div className="section-heading heading-left">
                            <span className="subtitle">Who we are</span>
                            <h2 className="title">Heart N Solutions Management</h2>
                            <p>We manage properties and work closely with landlords to achieve the highest potential income, in their properties. Heart N solutions is a team that builds relationships with bothtenant and landlords. We believe that a tenant is a great asset to a financial future.</p>
                            <p>Heart N Solutions can help a tenant become a homeowner through our educational services non profit programs. We manage hundreds of properties and belong to a huge database of investors and business associates. Lets us manage your portfolio, acquire more properties and get you funded for your real estate goal.</p>
                            {/* <Link to="#" className="axil-btn btn-fill-primary btn-large">Read More</Link> */}
                        </div>
                        <div className="case-study-counterup">
                            <div className="single-counterup">
                            <h2 className="count-number">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end="15" duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">+</span>
                            </h2>
                            <span className="counter-title">Years of operation</span>
                            </div>
                            <div className="single-counterup">
                            <h2 className="count-number">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end="600" duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">+</span>
                            </h2>
                            <span className="counter-title">Specialized Agents</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutFour;