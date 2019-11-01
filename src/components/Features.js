import React from 'react'
import fet from "../img/prd.jpg"
class Features extends React.Component {
    render (){
        return (
            <div className="container"> 
            <div id="about">
            <div className="fet">
                <img src={fet} />
            </div>
            <div className="fet2">
                <h4>Features</h4>    
                <h6>It is sun dried</h6>
                <h6>Rich in Vitamin A,C,D and E</h6>
                <h6>It has no additives</h6>
                <h6>It has no Preservertives</h6>
            </div>
            </div>
            </div>
        )
    }
}

export default Features