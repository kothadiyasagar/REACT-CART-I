import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContexProvider";
import './Electronic.css'
import { useNavigate } from "react-router-dom"
import { Link,NavLink, Outlet } from "react-router-dom";


const Electronic =()=>{
    let navigate = useNavigate()
     const {FechData,fech,Add,add}=useContext(AuthContext)
    let h=30
    let i=41
    useEffect(()=>{
        FechData(h,i)
    
    },[])
    console.log(fech)
    const Sagar =(item)=>{
        console.log(item,"sagar")
        add.push(item)
         Add(...add)
    }
      console.log(add,"add")
    return(
        <>
           <div className="menmain">
           {fech.map((item,index,)=>{
            return(
                <>
                <div>
                <NavLink  className="b" to={`/electronic/${item.id}`} > <img className="img2" src={item.image_url}/>
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

export default Electronic