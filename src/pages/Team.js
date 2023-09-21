import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import CounterUpTwo from '../component/counterup/CounterUpTwo';
import TeamOne from '../component/team/TeamOne';
// import VideoTwo from '../component/video/VideoTwo';

const Team = () => {

    return (
        <>
        <SEO title="Team" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BcrumbBannerOne 
                title="Meet The Team"
                paragraph ="HeartNSolutions is a one stop , all things Real Estate portal. Our team is dedicated to making your real estate dream. Come true we offer in-house concierge service whether you were looking to buy or be an investor. We’ve got all the solutions for you. We treat our clients as a family . We offer educational services through our coaching consulting and nonprofit programs. If you are a tenant looking for a rental property , we can also help you ! We offer a wide array of educational resources, financial planning, section 8 literacy, and first time homebuyer programs. If you Are a landlord looking to level up your business , we have coaching and courses in trading . Property, managers, and investors welcome to join our wholesaling group and our investment group. If you are a landlord looking for tenants, we also have a database that you can access. Everyone can use a boost in their financial wellness and we have a portal to help you ! Report your rent and enhance your financial well being"
                // styleClass="thumbnail-2"
                // mainThumb="/images/banner/banner-thumb-2.png"
                />
                <CounterUpTwo />
                <TeamOne />
                {/* <VideoTwo /> */}
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default Team;