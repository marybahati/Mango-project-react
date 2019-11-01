import React from 'react'
import one from "../img/two.png"
import two from "../img/one.png"
import three from "../img/three.png"
class Product extends React.Component {
    render (){
        return (
<div className="container">
  <div id="product">
     <h2 className="pro">Products</h2>
<div className="prd">
      <div className="pro1">
      <img src={one} />
      <h5>For baking,cooking and facial(100g) </h5>
      <h5>Ksh.280 </h5>
      <a href="#" className="btn btn-success">Buy Now</a>
      </div>

     <div className="pro2">
      <img src={two} />
      <h5>For cooking and making juice(200g)</h5>
      <h5>Ksh.450 </h5>
      <a href="#" className="btn btn-success">Buy Now</a>
      </div>

     <div className="pro3">
      <img src={three} />
      <h5>For making juice(500g) </h5>
      <h5>Ksh.850 </h5>
      <a href="#" className="btn btn-success">Buy Now</a>
      </div>
</div>

  </div>
</div>
        )
    }
}

export default Product