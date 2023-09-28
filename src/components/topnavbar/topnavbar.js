import React from 'react'
import "../../style/topnavbar.css"
function topnavbar() {
  return (
<>
<div className='topnavbar-wrapper'>
<div className='alkafeel-logo'>
<h1>Al-Kafeel<span className='circle-span circle-logo'></span></h1>
</div>

<nav class="navbar">
    <ul class="nav ">
      <li class="nav-item"><a href="#">Services</a></li>
      <li class="nav-item"><a href="#">Work</a></li>
      <li class="nav-item"><a href="#">About</a></li>
      <li class="nav-item "><a href="#">Case</a></li>
      <li class="nav-item button"><button href="#" className='button-contact'>Contact Us</button></li>
    </ul>
  </nav>
</div>
</>
    )
}

export default topnavbar