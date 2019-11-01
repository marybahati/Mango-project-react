import React from 'react'

class Contact extends React.Component {
    render (){
        return (
<div className="contact">
<div id="contact">
<div className="container">
<form method="post" action="#">
    <div className="input">
      <h4>Contact</h4>
    <div className="form-row">
    <div className="col">
      <input type="text" className="form-control" placeholder="Name" />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Email" />
    </div>
  </div> 
  </div> 
  <div className="msg">
  <div className="form-group">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</div>
  
</form>      
  <div className="details">
    <p>Savelberg Retreat center,Muringa road, Nairobi</p>
    <p>0728287616</p>
    <p>stirjuice@gmail.com</p>
    <p className="link"><a href="">Facebook</a><a href="">Twitter</a><a href="">LinkedIn</a></p>
  </div>

</div>
 
</div>
</div>

        )
    }
}

export default Contact