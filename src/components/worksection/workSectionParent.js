import React from "react";
import "../../style/worksection.css";
import workone from "../../assests/worksection/firstwork.png";
import workSec from "../../assests/worksection/secondwork.png";

function WorkSection(props) {
  return (
    <>
        <div className="workSectionWrapper">
          <div className="workSectionTitle">
            <div className="workSectionDetails">
              {/* <h1>{props.projectName}</h1> */}
              <div className="workingCategiory">
                <span>Web Design 🧑‍🎨</span>
                {/* <span>{props.idustryName} 👗</span> */}
                <span>E-Commerce 🛍️</span>
                <span>UI & UX Design</span>
              </div>
            </div>
          </div>
          <div className="workSectionImage">
            <img src={props.imgName} alt="" />
          </div>
        </div>
    </>
  );
}

function workSectionParent(params) {
  const workSectionData = [workone,workSec]
  return(
    
    <>
      <div className="workSection">

<div className="sectionTitle">
<h2>Our Work</h2>
<a href="https://dribbble.com/farazahmed4462">View All</a>
</div>
    {workSectionData.map((e)=>{
    return  <WorkSection imgName={e} />

    })}
    </div>

    </>
  )
}
export default workSectionParent;
