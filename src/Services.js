import React from 'react'
 const Services=()=>{
    return(
        <>
<div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            style={{ height: "500px" }}
                            src="https://media2.giphy.com/media/12qq4Em3MVuwJW/giphy.gif" // Replace with a relevant image URL
                            className="d-block w-100"
                            alt="Auto Parts"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="row justify-content-center py-5">
                                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                    <h1 className="display-3 text-white animated slideInDown">Our Services</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item text-white active" aria-current="page">Home</li>
                                            <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="container">
                <div className="row mt-5">
                    <div className="text-center">
                        <h2 className="section-title bg-white text-center text-primary px-3">OUR SERVICES</h2>
                        <h1 className="mb-5">What We Offer</h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    {/* Auto Parts Manufacturing */}
                    <div className="col-lg-3">
                        <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} className="card h-100">
                            <img
                                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with a relevant image URL
                                className="card-img-top"
                                alt="Auto Parts Manufacturing"
                                height="200px"
                                width="200px"
                            />
                            <div className="text-center p-4">
                                <h5 className="mb-0">Auto Parts Manufacturing</h5>
                                <small>High-quality parts for various vehicle models, produced with precision and durability.</small>
                            </div>
                        </div>
                    </div>

                    {/* Custom Auto Parts */}
                    <div className="col-lg-3">
                        <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} className="card h-100">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1677009834523-367c2e9b281c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with a relevant image URL
                                className="card-img-top"
                                alt="Custom Auto Parts"
                                height="200px"
                                width="200px"
                            />
                            <div className="text-center p-4">
                                <h5 className="mb-0">Custom Auto Parts</h5>
                                <small>Tailored solutions to meet specific needs and preferences of our clients.</small>
                            </div>
                        </div>
                    </div>

                    {/* Quality Assurance */}
                    <div className="col-lg-3">
                        <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} className="card h-100">
                            <img
                                src="https://media.istockphoto.com/id/1493832785/photo/quality.webp?b=1&s=612x612&w=0&k=20&c=jr_ZvcgzdgjwDPy1lxPh2x5RUEi4MbLQudSAeyu7zH8=" // Replace with a relevant image URL
                                className="card-img-top"
                                alt="Quality Assurance"
                                height="200px"
                                width="200px"
                            />
                            <div className="text-center p-4">
                                <h5 className="mb-0">Quality Assurance</h5>
                                <small>Ensuring every part meets the highest standards of quality and performance.</small>
                            </div>
                        </div>
                    </div>

                    {/* After-Sales Support */}
                    <div className="col-lg-3">
                        <div style={{ border: "2px solid", borderRadius: "15px", boxShadow: "12px 15px" }} className="card h-100">
                            <img
                                src="https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with a relevant image URL
                                className="card-img-top"
                                alt="After-Sales Support"
                                height="200px"
                                width="200px"
                            />
                            <div className="text-center p-4">
                                <h5 className="mb-0">After-Sales Support</h5>
                                <small>Comprehensive support to ensure customer satisfaction and address any issues.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="container">
                <div className="row mt-5">
                    <div className="text-center">
                        <h5 className="section-title bg-white text-center text-primary px-3">Testimonials</h5>
                        <h1 className="mb-5">What Our Clients Say</h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="card text-bg-dark">
                    <img
                        style={{ height: "500px" }}
                        src="https://media.istockphoto.com/id/1368144183/photo/close-up-on-customer-man-hand-pressing-on-smartphone-screen-with-five-star-rating-feedback.jpg?s=1024x1024&w=is&k=20&c=HhN9JIpMtTVBe1NcKgR3uNuuyxWP-E4AmQrRBakReok=" // Replace with a relevant image URL
                        className="card-img"
                        alt="Testimonials Background"
                    />
                    <div className="card-img-overlay">
                        <div className="row text-center mt-5">
                            <div className="col-lg-4">
                                <img
                                    src="https://media.istockphoto.com/id/526153953/photo/auto-service.jpg?s=1024x1024&w=is&k=20&c=eyjnk7AYAL-Sq5Whi69qk-oKwhKndlMpng1JkPkefg8=" // Replace with a relevant image URL
                                    className="rounded-circle"
                                    alt="Client 1"
                                    height="200px"
                                    width="200px"
                                />
                                <p>"Excellent parts and great service!"</p>
                            </div>

                            <div className="col-lg-4">
                                <img
                                    src="https://media.istockphoto.com/id/1330581377/photo/disaster-recovery-backup-data-protection-internet-technology-concept.jpg?s=1024x1024&w=is&k=20&c=RQ0UDn0R9KFJ3Prv2-AtxK9B81p5aDs4_4M62EBWlUI=" // Replace with a relevant image URL
                                    className="rounded-circle"
                                    alt="Client 2"
                                    height="200px"
                                    width="200px"
                                />
                                <p>"Custom solutions that fit our needs perfectly."</p>
                            </div>

                            <div className="col-lg-4">
                                <img
                                    src="https://images.unsplash.com/photo-1571534402161-7ef40ea7fa4e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with a relevant image URL
                                    className="rounded-circle"
                                    alt="Client 3"
                                    height="200px"
                                    width="200px"
                                />
                                <p>"High-quality auto parts with excellent support."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


 export default Services;