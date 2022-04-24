import React, { useState } from "react";

export const AuthContext = React.createContext()

const AuthContextProvider = ({children})=>{
  const [fech,setFech] = useState([])
 
  
    const FechData = async(a,b)=>{
      try{
        let response=  await fetch(`http://localhost:3000/mensData?_start=${a}&_end=${b}`,{
      })
      
        let data = await response.json()
        // console.log(data)
        setFech(data)
  }catch(e){
      console.log(e)
  }
       
    }
    const value ={FechData,fech}
    return<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export {AuthContextProvider}