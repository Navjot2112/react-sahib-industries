import React from 'react';

const Page = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators"></div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ height: "500px" }} src="https://cdn.pixabay.com/photo/2017/03/05/00/34/panorama-2117310_960_720.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="row justify-content-center py-5">
                                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                    <h1 className="display-3 text-white animated slideInDown">Not Found</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item text-white active" aria-current="page">404</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        <a className="btn btn-primary rounded-pill py-3 px-5" href="https://www.free-css.com/free-css-templates">Go Back To Home</a>
                    </div>
                </div>
            </div>

            <div className="container bg-dark mt-5">
                <div className="row text-white">
                    <div className="col-lg-3">
                        <h4 className="text-white mb-3">Company</h4>
                        <span>Contact Us</span><br />
                        <span>Privacy Policy</span><br />
                        <span>Terms &amp; Condition</span><br />
                        <span>FAQs &amp; Help</span>
                    </div>

                    <div className="col-lg-3">
                        <h4 className="text-white mb-3">Contact</h4>
                        <span>st.no 4b new amar nagar , backside ATI college road, Ludhiana</span><br />
                        <span>9417170517</span><br />
                        <span>mail@domain.com</span><br />
                        <span>hello</span>
                    </div>

                    <div className="col-lg-3">
                        <h4 className="text-white mb-3">Gallery</h4>
                        <div className="row g-2 pt-2" style={{ height: "100px", width: "150px" }}>
                            <div className="col-4"><img className="img-fluid bg-light p-1" src="https://media.istockphoto.com/id/1031430214/photo/young-woman-kayzaking-through-the-backwaters-of-monroe-island.jpg?s=612x612&w=0&k=20&c=kbv2s1kknMzJgk8Nd-W2VNIf0AFx48YtCqygtI3Ppos=" alt="" /></div>
                            <div className="col-4"><img className="img-fluid bg-light p-1" src="https://media.istockphoto.com/id/930309134/photo/tourist-woman-enjoy-with-beautiful-view-on-mountains-in-ella-sri-lanka.jpg?s=612x612&w=0&k=20&c=f5AhSDzgsHFSTb-vL-78AYKjkOqVzxu9RGocl6YFCag=" alt="" /></div>
                            <div className="col-4"><img className="img-fluid bg-light p-1" src="https://media.istockphoto.com/id/1221548744/photo/a-woman-with-white-hat-walks-down-a-tropical-paradise-beach-with-palm-trees-and-turquoise-sea.jpg?s=612x612&w=0&k=20&c=-zcKEcBYzkLZqgE9ZuXXFbiXogpNL96KxyDwXq5Px-I=" alt="" /></div>
                            <div className="col-4"><img className="img-fluid bg-light p-1" src="https://media.istockphoto.com/id/1125634321/photo/the-couple-greets-the-sunrise-in-the-mountains-man-and-woman-in-the-mountains-wedding-travel.jpg?s=612x612&w=0&k=20&c=jjhQC3kov9D9onL1_2Ny7Z6Vg9zr75MfcLsuWibKsJ8=" alt="" /></div>
                            <div className="col-4"><img className="img-fluid bg-light p-1" src="https://media.istockphoto.com/id/1359469806/photo/beautiful-young-woman-in-winter-park-having-fun-stock-photo.jpg?s=612x612&w=0&k=20&c=JmrZYJpsY2JBreyZ9JStdCS_fxk1SKro4NphSqIPntM=" alt="" /></div>
                            <div className="col-4"><img className="img-fluid bg-light p-1" src="https://media.istockphoto.com/id/1359469806/photo/beautiful-young-woman-in-winter-park-having-fun-stock-photo.jpg?s=612x612&w=0&k=20&c=JmrZYJpsY2JBreyZ9JStdCS_fxk1SKro4NphSqIPntM=" alt="" /></div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <h4 className="text-white mb-3">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                            <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">© <a className="border-bottom" href="https://www.free-css.com/free-css-templates">Your Site Name</a>, All Rights Reserved. Designed By <a className="border-bottom" target="_blank" rel="nofollow noopener" href="//htmlcodex.com">HTML Codex</a></div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu"><a href="https://www.free-css.com/free-css-templates">Home</a> <a href="https://www.free-css.com/free-css-templates">Cookies</a> <a href="https://www.free-css.com/free-css-templates">Help</a> <a href="https://www.free-css.com/free-css-templates">FAQs</a></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
