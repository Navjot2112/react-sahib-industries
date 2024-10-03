import React from 'react'
 const Packages=()=>{
    return(
        <>
                     {/* Carousel Section */}
                     <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            style={{ height: "500px" }}
                            src="https://plus.unsplash.com/premium_photo-1682129768936-c5b7c3033cdc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with a relevant image URL
                            className="d-block w-100"
                            alt="Auto Parts"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="row justify-content-center py-5">
                                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                    <h1 className="display-3 text-white animated slideInDown">Our Packages</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item text-white active" aria-current="page">Packages</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Packages Section */}
            <div className="container">
                <div className="row mt-5">
                    <div className="text-center">
                        <h2 className="section-title bg-white text-center text-primary px-3">OUR PACKAGES</h2>
                        <h1 className="mb-5">Explore Our Offerings</h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    {/* Package 1 */}
                    <div className="col-lg-4">
                        <div className="card h-80">
                            <img
                                src="/img/WhatsApp Image 2024-08-23 at 23.35.51_23407b86.jpg" // Replace with a relevant image URL
                                className="card-img-top"
                                alt="Package 1"
                                height="200px"
                                width="200px"
                            />
                            <div className="d-flex border-bottom">
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-cogs text-primary me-2"></i>Standard Package</small>
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>1 Month</small>
                                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>1 Vehicle</small>
                            </div>
                            <div className="text-center p-4">
                                <h3 className="mb-0">$299.00</h3>
                                <p>Basic maintenance package including essential parts and services for your vehicle.</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <a className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                    <a className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Package 2 */}
                    <div className="col-lg-4">
                        <div className="card h-100">
                            <img
                                src="/img/WhatsApp Image 2024-08-23 at 23.35.51_81de5a20.jpg" // Replace with a relevant image URL
                                className="card-img-top"
                                alt="Package 2"
                                height="200px"
                                width="200px"
                            />
                            <div className="d-flex border-bottom">
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-cogs text-primary me-2"></i>Premium Package</small>
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 Months</small>
                                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>1 Vehicle</small>
                            </div>
                            <div className="text-center p-4">
                                <h3 className="mb-0">$499.00</h3>
                                <p>Comprehensive package including advanced parts and full service for your vehicle.</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <a className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                    <a className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Package 3 */}
                    <div className="col-lg-4">
                        <div className="card h-100">
                            <img
                                src="/img/WhatsApp Image 2024-08-23 at 23.35.51_0e14fb4b.jpg" // Replace with a relevant image URL
                                className="card-img-top"
                                alt="Package 3"
                                height="200px"
                                width="200px"
                            />
                            <div className="d-flex border-bottom">
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-cogs text-primary me-2"></i>Ultimate Package</small>
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>6 Months</small>
                                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>1 Vehicle</small>
                            </div>
                            <div className="text-center p-4">
                                <h3 className="mb-0">$799.00</h3>
                                <p>All-inclusive package covering all parts and services with priority support.</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <a className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                    <a className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Section */}
            <div className="container mt-5">
                <div className="card text-bg-dark">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661661938767-e77c377c6882?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with a relevant image URL
                        className="card-img"
                        alt="Booking"
                        height="400px"
                        width="300px"
                    />
                    <div className="card-img-overlay">
                        <h6 className="text-white text-uppercase">Booking</h6>
                        <h1 className="text-white mb-4">Online Booking</h1>
                        <p className="mb-4">Easily book any of our packages online with a few simple steps. Enjoy hassle-free service and ensure your vehicle is in top condition.</p>
                        <a className="btn btn-outline-light py-3 px-5 mt-2" href="/booking">Read More</a>
                    </div>
                </div>
            </div>
        </>
    );
};


 export default Packages;