import React from "react";
import { Link,NavLink } from "react-router-dom";
const Navbar =()=>{
    return(
        <div style={{marginBottom:"10px",
        padding:"40px",
        backgroundColor:"black",
        color:"white",
        fontSize:"30px",
        display:"flex" ,
        justifyContent:"space-between"}}>
      
          <NavLink to="/" style={({isActive})=>{return{color:isActive ?"white":""}}}>Home</NavLink>
          <NavLink style={({isActive})=>{return{color:isActive ?"white":""}}} to="/about">About</NavLink>
          <NavLink  style={({isActive})=>{return{color:isActive ?"white":""}}}to="/contact">Contact</NavLink>
          <NavLink  style={({isActive})=>{return{color:isActive ?"white":""}}}to="/post/mobile">Post</NavLink>
          <NavLink  style={({isActive})=>{return{color:isActive ?"white":""}}}to="/post/mobile/1">Post</NavLink>
        </div>
    )
}
export default Navbar


