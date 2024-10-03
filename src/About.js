import React, { useEffect } from 'react'
import "./About.css"
import AOS from 'aos';
import "aos/dist/aos.css"



 const About=()=>{
  useEffect(()=>{
    AOS.init();
  },[]);
    return(
        <>
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:"550px"}} src="https://media.giphy.com/media/ch1bc0nZ1D6G6hBvao/giphy.gif" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">About Us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center"> 
            
              
              <li className="breadcrumb-item text-white active" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>

<div class="container">
        <div className="row mt-5" >
        <div  data-aos="flip-right" className="col-lg-5 " >
    <img style={{height:"500px",width:"500px", marginRight: "75px", marginLeft: "-30px" }} src="/img/Screenshot 2024-08-23 223703.png" class="rounded-0" alt="..."/></div>
    <div className="col-7 rounded-0" >
    <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
         <h1 className="mb-4">Welcome to <span class="text-primary">Sahib Industries</span></h1>

         <p className="mb-3">We offer a comprehensive range of auto parts, from engine components to electrical systems, sourced from reputable manufacturers. Our commitment to quality ensures that every product meets stringent standards, giving you peace of mind with every purchase.
Our customer-centric approach means we prioritize your needs, offering personalized service and expert advice to help you find the perfect parts for your vehicle. We also emphasize fast and reliable delivery, ensuring your orders reach you promptly..</p>

         <p className="mb-3">Founded in 1985 , Sahib Industries  has grown from a small business to a leading provider in the auto parts market. Our experienced team is passionate about what we do and is here to support you every step of the way.

Thank you for choosing [Your Company Name]. We look forward to serving you and helping you keep your vehicle in top condition.</p>
         
          
<div data-aos="flip-right" class="row gy-2 gx-4 mb-6">
          <div class="col-sm-6">
            <p class="mb-0"><i><img style={{height:"30Px" ,width:"20px"}} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg"/></i>Experienced Team</p>
          </div>
          <div class="col-sm-6">
            <p class="mb-0"><i><img style={{height:"30Px" ,width:"20px"}} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg"/></i>Quality Assurance</p>
          </div>
          <div class="col-sm-6">
            <p class="mb-0"><i><img style={{height:"30Px" ,width:"20px"}} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg"/></i>Fast Delivery</p>
          </div>
          <div class="col-sm-6">
            <p class="mb-0"><i><img style={{height:"30Px" ,width:"20px"}} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg"/></i>Customer Service</p>
          </div>
          <div class="col-sm-6">
            <p class="mb-0"><i><img style={{height:"30Px" ,width:"20px"}} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg"/></i>Wide Selection</p>
          </div>
          <div class="col-sm-6">
            <p class="mb-0"><i><img style={{height:"30Px" ,width:"20px"}} src="https://as2.ftcdn.net/v2/jpg/01/08/50/47/1000_F_108504769_vixToxbKfDRHGZ8eA3VPDTwa1wGdouoa.jpg"/></i>Innovative Solutions</p>
          </div>
        </div>

      <a className="btn btn-primary py-3 px-5 mt-2" href="https://www.free-css.com/free-css-templates">Read More</a>
</div> 
</div>
</div>

<div className="container">
<div className="row mt-5" >
<div className="text-center">
<h2 className="section-title bg-white text-center text-primary px-3">Travel Guide</h2>
      <h1 className="mb-5">Meet Our Guide</h1>
    </div>
</div>
  </div>
  <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="container">
    <div className="row text-center mt-5">
        <div className="col-lg-4">
            <img src="/img/WhatsApp Image 2024-08-23 at 22.56.27_6f53f98e.jpg" className="rounded-circle" alt="Team Member 1" height="200px" width="200px"/>
            <p>Kulwant  Singh - Expert in Sustainable Practices. Dedicated to reducing environmental impact and implementing green solutions.</p>
            <button type="button" className="btn btn-primary btn-lg">Learn More</button>
        </div>

        <div className="col-lg-4">
            <img src="/img/WhatsApp Image 2024-08-23 at 22.56.27_36aa9338.jpg" className="rounded-circle" alt="Team Member 2" height="200px" width="200px"/>
            <p>Jaspreet Singh - Head of Product Development. Specializes in innovative design and cutting-edge technology.</p>
            <button type="button" className="btn btn-primary btn-lg">Learn More</button>
        </div>

        <div className="col-lg-4">
            <img src="/img/WhatsApp Image 2024-08-23 at 23.16.20_3aec176a.jpg" className="rounded-circle" alt="Team Member 3" height="200px" width="200px"/>
            <p>Naveen Kumar - Quality Assurance Specialist. Ensures all products meet the highest standards of quality.</p>
            <button type="button" className="btn btn-primary btn-lg">Learn More</button>
        </div>

        
    </div>
</div>

<div className='container'>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        <div data-aos="fade-up" data-aos-duration="3000" className="col-lg-3">
            <div style={{border:"2px solid", borderRadius:"15px", boxShadow:"12px 15px"}} className="card h-100">
                <img src="/img/WhatsApp Image 2024-08-23 at 22.52.03_0a362f29.jpg" className="card-img-top" alt="Team Member 5" height="280px" width="200px"/>
                <div className="text-center p-4">
                    <h5 className="mb-0">Charan Singh</h5>
                    <small>Founder of Sahib Industries</small>
                </div>
            </div>
        </div>
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="col-lg-3">
            <div style={{border:"2px solid", borderRadius:"15px", boxShadow:"12px 15px"}} className="card h-100">
                <img src="/img/WhatsApp Image 2024-08-23 at 22.52.03_7a573fc5.jpg" className="card-img-top" alt="Team Member 6" height="280px" width="200px"/>
                <div className="text-center p-4">
                    <h5 className="mb-0">Harwinder Singh</h5>
                    <small>Prop</small>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="col-lg-3">
            <div style={{border:"2px solid", borderRadius:"15px", boxShadow:"12px 15px"}} className="card h-100">
                <img src="/img/WhatsApp Image 2024-08-23 at 22.50.21_940c2596.jpg" className="card-img-top" alt="Team Member 7" height="280px" width="200px"/>
                <div className="text-center p-4">
                    <h5 className="mb-0">Navjot Singh</h5>
                    <small>Lead Enginner</small>
                </div>
            </div>
        </div>
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="col-lg-3">
            <div style={{border:"2px solid", borderRadius:"15px", boxShadow:"12px 15px"}} className="card h-100">
                <img src="/img/WhatsApp Image 2024-08-23 at 22.52.28_7612d77c.jpg" className="card-img-top" alt="Team Member 8" height="280px" width="200px"/>
                <div className="text-center p-4">
                    <h5 className="mb-0">Manpreet Kaur</h5>
                    <small>Customer Service Specialist</small>
                </div>
            </div>
        </div>
    </div>
</div>



       
        </>
    );
 };

 export default About;