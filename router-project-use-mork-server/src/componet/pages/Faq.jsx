import React  from "react";
import { Link,NavLink } from "react-router-dom";
  const Faq =()=>{
     
    return(
        <>
        <div style={{width:"70%",margin:"auto",backgroundColor:" whitesmoke",marginTop:"150px", borderRedius:"20px"}}>
            <div style={{marginLeft:"40px"}}>
                <h3>Can I make special requests?</h3>
                <p>Unfortunately, we cannot make special requests for your order as we usually see a high frequency of orders very rapidly.</p>
               <br></br>
               <hr></hr>
               <h3>When will my sample sale order ship?</h3>
               <p>To accommodate a high volume of sales with our current crew at the warehouse, we will be shipping between Aug 9th - 13th. You should receive an email confirmation shortly after we ship your order. Orders will be shipped either UPS or USPS depending on size and weight.</p>
                <br></br>
                <hr></hr>
                <h3>What makes a product B-Grade?</h3>
                <p>Nearly all Mazama and Tanner Goods pieces are created using a skilled, hand-crafted process. This is why each product has a unique feel.  In the course of creating these pieces, it is inevitable that some products come through which don’t quite meet our specifications to be deemed “first quality.”  These pieces we call “seconds” or “B-grades” and while they may have some cosmetic imperfections they are still beautiful and functional pieces worthy of a good home</p>
                <br></br>
                <hr></hr>
                <h3>Can I return or exchange my order?</h3>
                <p>Unfortunately, we do not accept returns or exchanges on B-Grade products</p>
            </div>

        </div>
        </>
    )

  }
  export default Faq