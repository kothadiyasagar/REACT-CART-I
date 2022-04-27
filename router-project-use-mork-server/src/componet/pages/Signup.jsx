import react from "react";
import { AuthContext } from "../Context/AuthContexProvider";
import {useState,useContext} from "react";
const Signup =()=>{
    const {isAuth,token ,toggle, handleLogin}=useContext(AuthContext)
    const [username, setUsername] = useState("");
     const onSubmit = (e) => {
       e.preventDefault();
       handleLogin(username);
     };
  return(
      <>
        <div style={{margin:"5% 15% ",marginTop:"120px"}}>
           (<form onSubmit={onSubmit}>
          <h3>Login</h3>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="name"  />
      <div>
        <input type="submit" value="SUBMIT" />
      </div>
          </form>
      </div>
      </>
  )
}

export default Signup