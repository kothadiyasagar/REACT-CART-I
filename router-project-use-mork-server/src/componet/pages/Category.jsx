import { useNavigate } from "react-router-dom"
import { Link,NavLink, Outlet } from "react-router-dom";
const Category =()=>{
    let navigate = useNavigate()
  return(
      <>
       <div  style={{marginTop:"150px"}}>
           <button  onClick={()=>{
               navigate("/clothing/menfashion")
           }}>Men Fashion</button>
           <button onClick={()=>{
                navigate("/clothing/womenfashion")
           }}>Women Fashion</button>
            <Outlet/>
       </div>
      </>
  )  
}

export default Category