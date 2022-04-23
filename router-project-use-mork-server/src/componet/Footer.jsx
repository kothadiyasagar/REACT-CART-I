import React from "react";
import "./pages/Footer.css"
const Footer = ()=>{
  return (
      <>
    <div id="footer">
        <div className="fmain">
          <div style={{color:"white"}}>
            <h3>FAQ</h3>
            <h3>CONTACT</h3>
            <h3>BLOG</h3>
            <h3>LOYALTY PROGRAM</h3>
            <h3>SITEMAP</h3>
          </div>
          <div style={{color:"white"}}><h3>PRESS</h3>
          <h3>TERMS</h3>
          <h3>PRIVACY</h3>
          <h3>SHIPPING & RETURNS</h3>
          <h3>WHOLESALE</h3></div>
          <div style={{color:"white"}}>
         <h3 style={{color:"white"}}>Be in the Know</h3>
          <div style={{display:"flex"}}>
              <img src="https://cdn-icons-png.flaticon.com/512/60/60580.png" />
           <img src="https://i.pinimg.com/originals/ca/3b/f0/ca3bf05cfab74677e5b73b130bd30991.png"/>
           <img src="https://friconix.com/png/fi-xnsuxx-pinterest.png"/>
           <img src="https://www.clipartmax.com/png/full/256-2569207_instagram-icon-transparent-background-instagram-logo.png"/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
              <h4>Email Address</h4>
              <h3>SUBSCRIBE</h3>
          </div>
            <div className="line"></div>
            <div>
                <h4 style={{color:"rgb(133,197,213)"}}>Get updates,coupons, and news from Patake!</h4>
            </div>
          </div>

        </div>
       
    </div>
         
      </>
  )
}
export default Footer

