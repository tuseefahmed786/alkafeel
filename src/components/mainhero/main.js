import React from 'react'
import "../../style/main.css"
import main from "../../assests/mainimage/mainimage.png"
import cluth from "../../assests/socialmediaicon/cluth.png"
import linkdein from "../../assests/socialmediaicon/linkedin.png"
import instagram from "../../assests/socialmediaicon/instagram.png"
import arrowicon from "../../assests/mainimage/right-arrow.png"
function mains() {
  return (
<>
<main className='flex-center'>
       
<div className='social-mediaicon'>
            <ul>
                <li className="icon-s">
                    <img src={cluth} alt="" />
                </li>
                <li className="icon-s">
                    <img src={linkdein} alt="" />
                </li>
                <li className="icon-s">
                    <img src={instagram} alt="" />
                </li>
            </ul>
        </div>
    <article className='main-text'>
    <div className='cover-maintext'>
     

        <h1>We design and develop website <span className='circle-span'></span>  </h1>
        </div>
   <p>Elevate your online presence
with us
Experts in <span>React JS </span> and <span>Figma</span>  </p>
<div className='startproject-wraper'>
    <button className='startproject-btn'>Start Project With US <span className='circle-span-project'><img src={arrowicon} alt="" /></span></button>
</div>
    </article>

  
</main>


</>
    )
}

export default mains