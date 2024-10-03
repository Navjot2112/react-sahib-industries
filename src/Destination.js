import React from 'react'
 const Destination=()=>{
    return(
        <>
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"500px"}} src="https://cdn.pixabay.com/photo/2017/01/11/17/52/porto-1972452__340.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div class="row justify-content-center py-5">
        <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 class="display-3 text-white animated slideInDown">Destination</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
              
              <li class="breadcrumb-item text-white active" aria-current="page">Destination</li>
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
<h2 class="section-title bg-white text-center text-primary px-3">DESTINATION</h2>
      <h1 class="mb-5">Popular Destination</h1>
    </div>
</div>
  </div>
   <div className='container'>
  <div class="row g-3">
      <div class="col-lg-7 col-md-6">
        <div class="row g-3">

        <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s" style={{visibility: "visible", animationdelay: "0.1s" ,animationname: "zoomIn"}}><a class="position-relative d-block overflow-hidden"> <img class="img-fluid"style={{height:"250px" ,width:"900px"}} src="https://cdn.pixabay.com/photo/2016/06/12/03/48/thailand-1451379__340.jpg" alt="" />
            <div class="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">30% OFF</div>
            <div class="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Thailand</div>
            </a></div>

           <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s"style={{visibility: "visible", animationdelay: "0.1s" ,animationname: "zoomIn"}}><a class="position-relative d-block overflow-hidden" ><img class="img-fluid"style={{height:"200px" ,width:"500px"}} src="https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619__340.jpg" alt=""/>
            <div class="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">25% OFF</div>
            <div class="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Malaysia</div>
            </a></div>
          <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s" style={{visibility: "visible", animationdelay: "0.1s" ,animationname: "zoomIn"}}><a class="position-relative d-block overflow-hidden"><img class="img-fluid"style={{height:"200px" ,width:"500px"}} src="https://cdn.pixabay.com/photo/2016/07/28/02/02/santorini-1546901__340.jpg" alt=""/>
            <div class="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">35% OFF</div>
            <div class="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Australia</div>
            </a></div>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{visibility: "visible", animationdelay: "0.1s" ,animationname: "zoomIn"}}><a class="position-relative d-block h-100 overflow-hidden" href="https://www.free-css.com/free-css-templates"><img class="img-fluid position-absolute w-100 h-100" style={{height:"500px" ,width:"200px"}} src="https://cdn.pixabay.com/photo/2020/08/12/19/28/great-wall-of-china-5483516__340.jpg" alt="" />
        <div class="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">20% OFF</div>
        <div class="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Indonesia</div>
        </a></div>
    </div>
    </div>

                </>
    )
 }

 export default Destination;