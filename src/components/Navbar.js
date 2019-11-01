import React from 'react'
class Navbar extends React.Component {
    render (){
        return (
                <div className="first">
                <div className="bg">
                <div className="container">
                    <div className="topnav">
                    <a href="#contact">CONTACT</a>
                    <a href="#about">ABOUT</a>
                    <a href="#product">PRODUCT</a>
                    <a href="#">HOME</a>   
                    </div>
                    <div className="intro"> <h2>Mango flour, made from natural mangoes</h2></div>
                </div>
                </div>
                </div>
        )
    }
}

export default Navbar