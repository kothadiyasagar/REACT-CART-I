import React from "react";
import { Link,NavLink } from "react-router-dom";
import "./Navbar.css" 

const Navbar = ()=>{


    return (
        <>
        <div style={{background:"rgb(198,156,109)", color:"white",marginTop:"0px",textAlign:"center",marginBottom:"10px",position:"fixed"
        ,width:"100%",height:"30px"}}>
        <p style={{marginTop:"2px"}}>FREE INDIA SHIPPING $199+ | EASY RETURNS | WORTH HOLDING ONTO & OFFER 30% APPLY CODE MASAI-30</p>
        </div>
        <div className="navbar">
      
          <NavLink to="/" className="b">Home</NavLink>
          <NavLink  className="b" to="/about">ABOUT</NavLink>
         <div className="rama">
         <span>BY CATEGORY</span>
         <div className="kiran">
         <NavLink  className="b" to="/clothing"> <span>Clothing</span></NavLink>
                        <br></br>
                        <hr></hr>
                        <NavLink  className="b" to="/electronic"><span>Electronic</span></NavLink>
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