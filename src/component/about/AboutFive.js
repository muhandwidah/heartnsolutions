import React from 'react';
import { Link } from 'react-router-dom';


const AboutFive = () => {
    return (
      <div className="section-padding-equal">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="about-team">
                    <div className="thumbnail">
                        <img src={"https://i.ibb.co/YcDpYRP/6487ec62805ae1943184fd7b-AE3-E645-F-AA7-F-4-F73-A8-A0-CDF65-B043-B13-1.jpg"} alt="thumbnail" />
                    </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-team">
                    <div className="section-heading heading-left">
                        <span className="subtitle">Our Team</span>
                        <h2>Dedicated experts, at your service.</h2>  
                        <p>At Heart N Solutions Management, our team stands out as a beacon of excellence in the real estate industry. Each member brings a wealth of expertise, dedication, and passion, ensuring that our clients receive unparalleled service. <br/><br/> Our collective experience, combined with a forward-thinking approach, allows us to anticipate market trends and provide innovative solutions. This commitment to excellence, coupled with our unwavering integrity and client-centric ethos, makes our team superior and the preferred choice for discerning property owners and investors.</p>
                        <Link to="#" className="axil-btn btn-large btn-fill-primary">Our Team</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFive;