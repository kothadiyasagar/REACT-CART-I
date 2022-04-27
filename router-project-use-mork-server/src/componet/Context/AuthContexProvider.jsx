import React, { useState } from "react";

export const AuthContext = React.createContext()
let adds=[]
const AuthContextProvider = ({children})=>{

  const [fech,setFech] = useState([])
  const[add,setAdd]=useState([])
  const [isAuth, setisAuth,]=useState(false)
  const[token,setToken]=useState("")
  const toggle =(item)=>{
      setisAuth(item)
       setToken("")
  }
  const handleLogin = (username,item) => {
      //  setisAuth(false);
      setToken(Date.now() + username);
    };
   const Add = (...item) =>{
     setAdd([...item])
   }  
    const FechData = async(a,b)=>{
      try{
        let response=  await fetch(`http://localhost:4000/mensData?_start=${a}&_end=${b}`,{
      })
      
        let data = await response.json()
        // console.log(data)
        setFech(data)
  }catch(e){
      console.log(e)
  }
       
    }
    const value ={isAuth,token ,toggle,handleLogin,FechData,fech,add,Add,setAdd}
    return<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export {AuthContextProvider}