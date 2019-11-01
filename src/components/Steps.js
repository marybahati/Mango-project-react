import React from 'react'
import bg from "../img/prd.jpg"
import sec from "../img/ses.jpg"
import thd from "../img/ses2.jpg"
class Steps extends React.Component {
    render (){
        return (
            <div>
                <div className="container">
                <div id="about">
                <div className="step">
                    <div className="steps">
                    <h4>STEPS</h4>
                    <h6>1.Put 2 glasses of water</h6>
                    <h6>2.Add 250g of mango powder</h6>
                    <h6>3.Stir the juice and ready to drink</h6>  
                </div> 

                <div className="video">
                    <img src={bg}/>  
                </div>
                </div>
                </div>
                </div>
                <div className="container">
                <div id="about">
            <div className="video2">
                <div className="img1"><img src={sec}/></div>
                <div className="img2"><img src={thd}/></div>
            </div> 
            </div>
            </div>
        </div>
        )
    }
}

export default Steps