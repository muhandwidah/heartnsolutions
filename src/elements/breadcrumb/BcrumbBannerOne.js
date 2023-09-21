import React from 'react';
// import Tilty from 'react-tilty';

const BcrumbBannerOne = ({title, paragraph, styleClass, mainThumb}) => {
    return (
        <div className="breadcrum-area breadcrumb-banner">
            <div className="container">
                <div style={{width: '50vw'}}>
                    <h1 className="title h2" dangerouslySetInnerHTML={{__html: title}}></h1>
                    <p>HeartNSolutions is a one stop , all things Real Estate portal. Our team is dedicated to making your real estate dream. Come true we offer in-house concierge service whether you were looking to buy or be an investor. <br/> <br/> We’ve got all the solutions for you. We treat our clients as a family . We offer educational services through our coaching consulting and nonprofit programs. If you are a tenant looking for a rental property , we can also help you ! <br/> <br/> We offer a wide array of educational resources, financial planning, section 8 literacy, and first time homebuyer programs. If you Are a landlord looking to level up your business , we have coaching and courses in trading . <br/> <br/> Property, managers, and investors welcome to join our wholesaling group and our investment group. If you are a landlord looking for tenants, we also have a database that you can access. <br/> <br/> Everyone can use a boost in their financial wellness and we have a portal to help you ! Report your rent and enhance your financial well being</p>
                </div>
                {/* <div className={`banner-thumbnail ${styleClass}`}>
                    <Tilty perspective={2000} reset={false}>
                        <img src={process.env.PUBLIC_URL + mainThumb} alt="Illustration" />
                    </Tilty>
                </div> */}
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"} alt="Bubble" />
                </li>
                <li className="shape shape-2">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-21.png"} alt="Bubble" />
                </li>
                <li className="shape shape-3">
                    <img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" />
                </li>
            </ul>
        </div>
    )
}

export default BcrumbBannerOne;