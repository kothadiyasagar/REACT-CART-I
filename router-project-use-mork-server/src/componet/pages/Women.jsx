import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContexProvider";
import { Link,NavLink, Outlet } from "react-router-dom";
import './Men.css'


const Women =()=>{
    const {FechData,fech,add,Add}=useContext(AuthContext)
    const Sagar =(item)=>{
       console.log(item,"sagar")
       add.push(item)
        Add(...add)
   }
    let a=14
    let b=30
    useEffect(()=>{
        FechData(a,b)
    
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
       
        </>
    )
}

export default Women