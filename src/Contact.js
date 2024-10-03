import React from 'react'
 const Contact=()=>{
    return(
        <>
                <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"500px"}} src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div class="row justify-content-center py-5">
        <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 class="display-3 text-white animated slideInDown"></h1><br>
          </br>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item"><a href="https://www.free-css.com/free-css-templates">Home</a></li>
              <li class="breadcrumb-item"><a href="https://www.free-css.com/free-css-templates">Pages</a></li>
              <li class="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
            </ol>
          </nav>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>

  <div class="container">
<div class="row mt-5" >
<div class="text-center">
<h2 class="section-title bg-white text-center text-primary px-3">CONTACT US</h2>
      <h1 class="mb-5">Contact For Any Query</h1>
    </div>
</div>
  </div>


<div className='container'>
  <div class="row g-4 mt-3">
      <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: "visible",   animationame: "fadeInUp"}}>
        <h5>Get In Touch</h5>
        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos</p>
        <div class="d-flex align-items-center mb-4">
          <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width:"50px" , height:"50px"}}></div>
          <div class="ms-3">
            <h5 class="text-primary">Office</h5>
            <p class="mb-0">st.no 4b new amar nagar , backside ATI college road, Ludhiana</p>
          </div>
        </div>
        <div class="d-flex align-items-center mb-4">
          <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width:"50px" , height:"50px"}}></div>
          <div class="ms-3">
            <h5 class="text-primary">Mobile</h5>
            <p class="mb-0">9417170517</p>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{width:"50px" , height:"50px"}}></div>
          <div class="ms-3">
            <h5 class="text-primary">Email</h5>
            <p class="mb-0">mail@domain.com</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: "visible", animationdelay: "0.3s", animationname: "fadeInUp"}}>
        <iframe class="position-relative rounded w-100 h-100" src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0" style={{minheight:"300px",border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <div class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationdelay: "0.3s", animationname: "fadeInUp"}}>
        <form action="#" method="post">
          <div class="row g-3">
            <div class="col-md-6">
              <div class="form-floating">
                <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                <label for="name">Your Name</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                <label for="email">Your Email</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating">
                <input type="text" class="form-control" id="subject" placeholder="Subject"/>
                <label for="subject">Subject</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a message here" id="message" style={{height:"100px"}}></textarea>
                <label for="message">Message</label>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</div>





    
        </>
    )
 }

 export default Contact;