import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContexProvider";
import { Link,NavLink, Outlet } from "react-router-dom";
import './Men.css'
const Men =()=>{
    console.log("123")
     const {FechData,fech,add,Add}=useContext(AuthContext)
     const Sagar =(item)=>{
        console.log(item,"sagar")
        add.push(item)
         Add(...add)
    }
    let e=0
    let f=14
    useEffect(()=>{
        FechData(e,f)
     },[])
    console.log(fech)
  return(
        <>
           <div className="menmain">
           {fech.map((item,index,)=>{
            return(
                <>
                <div>
                <NavLink  className="b" to={`/electronic/${item.id}`} >    <img src={item.image_url}/>
                <h3 style={ {textAlign:"center"}}>{item.name}</h3>
                <div style={{display:"flex" ,justifyContent:"space-around"}}>
                    <h4>{`Rs ${item.price}`}</h4>
                    <h4 style={{ textDecoration: "line-through"}}>{`Rs ${item.strikedoffprice}`}</h4>
                </div></NavLink> 
                <button onClick={() => Sagar(item)}>add to Card</button>
                </div>
               
                </>
          )
        })}
                </div>
                <Outlet/>
        </>
    )
}
export default Men