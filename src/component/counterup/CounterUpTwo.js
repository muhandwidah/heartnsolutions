import React from 'react';
import { Link } from 'react-router-dom';
import CounterUp from './CounterUp';


const CounterUpTwo = () => {
    return (
        <div className="section section-padding expert-counterup-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="section-heading heading-left">
                            <span className="subtitle">Why choose us?</span>
                            <h2>We Are A Team That Takes Pride In Our Community!</h2>
                            <p className="mb--50">Heart N Solutions is a team of Professional, community builders. We take pride in not only helping our clients, in their Real Estate journey but also educating them on the ins and outs of all Things Real Estate. If you are looking to learn and create a Real Estate legacy , let our team Make your goal and Dreams a Reality</p>
                            <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-large btn-fill-primary">Careers</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-xl-1">
                        <div className="row">
                            <CounterUp colSize="col-sm-6" layoutStyle="counterup-style-2" evenTopMargin="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CounterUpTwo;