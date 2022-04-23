import React from "react";
import { Link,NavLink } from "react-router-dom";
import "./Navbar.css" 

const Navbar = ()=>{


    return (
        <>
        <div style={{background:"rgb(198,156,109)", color:"white",marginTop:"0px",textAlign:"center",marginBottom:"0px"}}>
        <p>FREE INDIA SHIPPING $199+ | EASY RETURNS | WORTH HOLDING ONTO & OFFER 30% APPLY CODE MASAI-30</p>
        </div>
        <div className="navbar">
      
          <NavLink to="/" className="b">Home</NavLink>
          <NavLink  className="b" to="/about">ABOUT</NavLink>
         <div className="rama">
         <NavLink  className="b" to="/contact"><span>BY CATEGORY</span></NavLink>
         <div className="kiran">
                        <span>Clothing</span>
                        <br></br>
                        <hr></hr>
                        <span>Electronic</span>
                        <br></br>
                        <hr></hr>
                        <span> Paintings</span>
                        <br></br>
                        <hr></hr>
                       
                       
                    </div>
         </div>
         
          {/* <NavLink to="/post/mobile">Post</NavLink> */}
          {/* <NavLink  style={({isActive})=>{return{color:isActive ?"white":""}}}to="/post/mobile/1">Post</NavLink> */}
         <NavLink  to="/addToCard">
         <img style={{width:"50px"}} src="https://www.freeiconspng.com/thumbs/shopping-cart-icon/shopping-cart-icon-30.png"></img>
             </NavLink> 
        </div>
       
        
        <div className="a">cdgf</div>
        </>
    )
}

export default Navbar 