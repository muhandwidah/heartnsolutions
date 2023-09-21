import React from 'react';
import { Link } from 'react-router-dom';
import FormOne from '../contact/FormOne';


const BannerFive = () => {
    return (
        <div className="banner banner-style-5" style={{backgroundImage:`url(https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-7">
                        <div className="banner-content">
                            <h1 className="title">The largest real estate hub for home owners, 
                                buyers &amp; agents</h1>
                            <div>
                                <Link to={process.env.PUBLIC_URL + "/services"} className="axil-btn btn-fill-white btn-large">Services</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-5">
                        <div className="banner-form">
                            <div className="contact-form-box shadow-box">
                                <h3 className="title">Contact our team</h3>
                                <FormOne />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerFive;