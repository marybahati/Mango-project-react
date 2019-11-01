import React from 'react'
import Navbar from './Navbar'
import Steps from './Steps'
import Product from './Product'
import Features from './Features'
import Contact from './Contact'

class Home extends React.Component {
    render (){
        return (
            <div>
                <Navbar/>
                <Product/>
                <Features/>
                <Steps/>
                <Contact/>
            </div>
        )
    }
}

export default Home