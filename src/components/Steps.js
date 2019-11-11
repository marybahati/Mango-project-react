import React from 'react'
import bg from "../img/glass.jpg"
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
                    <h6>1.Put 1 glasses of water</h6>
                    <h6>2.Add 5 tablespoons of mango powder</h6>
                    <h6>3.Stir the juice and ready to drink</h6>  
                </div> 

                <div className="video">
                    <img src={sec}  width='500px'/>  
                </div>
                </div>
                </div>
                </div>
                <div className="container">
                <div id="about">
            <div className="video2">
                <div className="img1"><img src={bg} height='435px' width='520px'/></div>
                <div className="img2"><img src={thd} width='520px'/></div>
            </div> 
            </div>
            </div>
        </div>
        )
    }
}

export default Steps