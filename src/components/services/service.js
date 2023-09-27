import React from "react";
import "../../style/service.css"
import rocket from "../../assests/service/rocket.png"
function service() {
  return (
    <>
     <div className="wrapSection">
<div className="serviceTitle">
    <h1>We Deliver
These <span>Digital Service</span></h1>
</div>

     <div className="wrapService">
     <div class="sectionServiceCard">
        <div class="section-card-info-item-icon">
          
        <img src={rocket} alt="" srcset="" />
        </div>
        <div class="section-card-info-item-title"><h3>Web Development</h3> </div>
        <div class="sectioDescription">
        <p>  Design and custom development of websites, startups, and web-based
          applications<span> - REACT JS </span></p>
        </div>
      </div>
      <div class="sectionServiceCard">
      <div class="section-card-info-item-icon">
          
          <img src={rocket} alt="" srcset="" />
          </div>
        <div class="section-card-info-item-title"><h3>UX/UI Design</h3> </div>
        <div class="sectioDescription">
        <p> 
User experience (UX) and user interface (UI) design services</p>
        </div>
      </div>
     </div>
     </div>


     
    </>
  );
}

export default service;
