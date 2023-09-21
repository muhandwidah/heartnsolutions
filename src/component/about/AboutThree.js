import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Expert Property Management",
        para: "At Heart N Solutions Management, we pride ourselves on our expertise in managing properties to their fullest potential. Our close collaboration with landlords ensures that each property is optimized for maximum income. With our vast experience and proven track record, landlords can rest assured that their properties are in the best hands, ensuring consistent and lucrative returns."
    },
    {
        id: 2,
        title: "Building Strong Relationships",
        para: "Relationships are at the core of our business model. We understand the importance of fostering trust and mutual respect between tenants and landlords. By building these strong relationships, we create a harmonious living environment for tenants and a stress-free experience for landlords, ensuring long-term tenancy and consistent rental income."
    },
    {
        id: 3,
        title: "Pathway to Homeownership",
        para: "Heart N Solutions Management is not just about property management; we're about empowering individuals. Through our educational services and non-profit programs, we offer tenants a unique opportunity to transition from renting to owning. This commitment to community growth and individual empowerment sets us apart and ensures a holistic approach to real estate."
    },
    {
        id: 4,
        title: "Extensive Network of Investors and Associates",
        para: "With our vast database of investors and business associates, we provide unparalleled opportunities for property expansion and investment. Whether you're looking to diversify your portfolio or venture into new real estate markets, our connections can open doors that might otherwise remain closed."
    },
    {
        id: 5,
        title: "Comprehensive Real Estate Solutions",
        para: "Our services extend beyond just property management. Whether you're looking to acquire more properties, need funding for your next real estate venture, or want to manage your growing portfolio, Heart N Solutions Management is your one-stop solution. Our holistic approach ensures that all your real estate needs are met under one roof, simplifying the process and maximizing your returns."
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Our Valus"
                    title="Why should you work with us?"
                    description="Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet."
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;