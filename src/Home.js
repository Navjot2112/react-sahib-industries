import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css"

import "./Home.css"
 const Home=()=>{
  useEffect(()=>{
    AOS.init();
  },[]);
    return(
        <>

      <div id="carouselExampleCaptions" class="carousel slide">
  <div className="carousel-indicators">
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:"600px"}} src="../Tourist/public/img/giphy.webp" class="d-block w-100" alt="..."/>
       <div className="carousel-caption d-none d-md-block" style={{paddingTop:"200px"}}>
       <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 style={{color:"black"}} className="display-3 text-white mb-3 animated slideInDown">Parts That Power Your Ride</h1>
          
          <div className="position-relative w-75 mx-auto animated slideInDown">
            <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Bevel Pin"/>
            <button type="button" className="btn btn-primary rounded-pill py-2 position-absolute top-0 end-0 mt-2 me-2" style={{margintop:"7px;"}}>Search</button>
         </div>
        </div>
      </div>
     </div> 
    </div>
  </div>
  </div>

  <div class="container">
        <div class="row mt-4" >
        <div class="col-lg-5 " >
    <img style={{height:"550px",width:"500px", marginRight: "75px", marginLeft: "-30px"}} src="/img/Screenshot 2024-08-23 223703.png" class="rounded-0" alt="..."/></div>
    <div class="col-7 rounded-0" >
    <h7 class="section-title bg-white text-start text-primary pe-2">About Us</h7>
         <h1 class="mb-6">Welcome to <span class="text-primary">Sahib Industries</span></h1>

         <p class="mb-3">With 38 years of experience,Sahib Industries is your trusted source for high-quality auto parts and accessories. We are committed to enhancing vehicle performance and safety by offering reliable, durable products</p>

         <p class="mb-3">Our extensive selection covers everything from engine components to electrical systems, all sourced from reputable manufacturers. We pride ourselves on excellent customer service, fast delivery, and personalized support.</p>
         
          <div data-aos="flip-right" class="row gy-2 gx-4 mb-4">
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

      <a class="btn btn-primary py-3 px-5 mt-2">Read More</a>



</div> 
</div>
</div>

<div className='container'>
    <div data-aos="zoom-out-right" class="row row-cols-4 row-cols-md-4 g-4 mt-5">
        <div class="col-lg-3">
            <div style={{border:"2px solid", borderRadius:"15px", boxShadow:"12px 15px"}} class="card h-100">
                <img src="https://th.bing.com/th/id/OIP.EauDwi4KnOnE9kZjJczzwgHaE8?rs=1&pid=ImgDetMain" class="card-img-top" alt="Manufacturing Excellence" height="200px" width="200PX"/>
                <div class="text-center p-4">
                    <h5 class="mb-0">Manufacturing Excellence</h5>
                    <small>Committed to delivering top-tier manufacturing solutions with precision and efficiency.</small>
                </div>
            </div>
        </div>
        <div data-aos="fade-down-right" class="col-lg-3">
            <div style={{border:"2px solid", borderRadius:"15px", boxShadow:"12px 15px"}} class="card h-100">
                <img src="https://th.bing.com/th/id/OIP.VPT7OZENlv3nO1lYda5MdQHaES?rs=1&pid=ImgDetMain" class="card-img-top" alt="Innovative Design" height="200px" width="200PX"/>
                <div class="text-center p-4">
                    <h5 class="mb-0">Innovative Design</h5>
                    <small>Leading in design and prototyping to meet market demands and drive innovation.</small>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div style={{border:"2px solid", borderRadius:"15px", boxShadow:"12px 15px"}} class="card h-100">
                <img src="https://th.bing.com/th/id/OIP.yNExRpHTCqYqDDnIglCvbQHaC7?rs=1&pid=ImgDetMain" class="card-img-top" alt="Quality Assurance" height="200px" width="200PX"/>
                <div class="text-center p-4">
                    <h5 class="mb-0">Quality Assurance</h5>
                    <small>Maintaining high standards through comprehensive testing and quality assurance processes.</small>
                </div>
            </div>
        </div>
        <div data-aos="zoom-out-right" class="col-lg-3">
            <div style={{border:"2px solid", borderRadius:"15px", boxShadow:"12px 15px"}} class="card h-100">
                <img src="https://th.bing.com/th/id/OIP.QZgx6ZgCOiwPRsXdzhSuAAHaE8?rs=1&pid=ImgDetMain" class="card-img-top" alt="Customer Support" height="200px" width="200PX"/>
                <div class="text-center p-4">
                    <h5 class="mb-0">Customer Support</h5>
                    <small>Offering dedicated customer support to ensure satisfaction and address any concerns.</small>
                </div>
            </div>
        </div>
    </div>
</div>

<div className='container'>
    <div data-aos="zoom-out-right" class="row row-cols-4 row-cols-md-4 g-4 mt-5">
        <div class="col-lg-3">
            <div style={{border:"2px solid", borderRadius:"15px", boxShadow:"12px 15px"}} class="card h-100">
                <img src="https://th.bing.com/th/id/OIP.K4t3aWBbiS8FokxY5zFENwHaE7?rs=1&pid=ImgDetMain" class="card-img-top" alt="Sustainable Practices" height="200px" width="200PX"/>
                <div class="text-center p-4">
                    <h5 class="mb-0">Sustainable Practices</h5>
                    <small>Implementing eco-friendly processes and materials to reduce environmental impact and promote sustainability.</small>
                </div>
            </div>
        </div>
        <div data-aos="fade-down-right" class="col-lg-3">
            <div style={{border:"2px solid", borderRadius:"15px", boxShadow:"12px 15px"}} class="card h-100">
                <img src="https://th.bing.com/th/id/OIP.2km6t6J0OVmH36wKhhuSvwHaEK?rs=1&pid=ImgDetMain" class="card-img-top" alt="Advanced Technology" height="200px" width="200PX"/>
                <div class="text-center p-4">
                    <h5 class="mb-0">Advanced Technology</h5>
                    <small>Utilizing the latest technologies to enhance production efficiency and deliver superior products.</small>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div style={{border:"2px solid", borderRadius:"15px", boxShadow:"12px 15px"}} class="card h-100">
                <img src="https://th.bing.com/th/id/OIP.vNoBLHihiNmDluPHbsr-NgHaE7?rs=1&pid=ImgDetMain" class="card-img-top" alt="Research & Development" height="200px" width="200PX"/>
                <div class="text-center p-4">
                    <h5 class="mb-0">Research & Development</h5>
                    <small>Investing in R&D to drive innovation and stay ahead in the competitive landscape.</small>
                </div>
            </div>
        </div>
        <div data-aos="zoom-out-right" class="col-lg-3">
            <div style={{border:"2px solid", borderRadius:"15px", boxShadow:"12px 15px"}} class="card h-100">
                <img src="https://th.bing.com/th/id/OIP.2XR0zN4twCGT7CYIo9thqwHaE8?rs=1&pid=ImgDetMain" class="card-img-top" alt="Global Reach" height="200px" width="200PX"/>
                <div class="text-center p-4">
                    <h5 class="mb-0">Global Reach</h5>
                    <small>Expanding our services and products to a global market, delivering excellence worldwide.</small>
                </div>
            </div>
        </div>
    </div>
</div>

 </>
    )
 }

 export default Home;