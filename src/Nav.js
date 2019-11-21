import React from 'react'
import './App.css'


class Navbar extends React.Component {
    render(){
        let {navColor} = this.props
        let navStyle = {
            width: '100%',
            height: '100px',
            backgroundColor: navColor,  
        }
        return(
            <div className="navBar" style={navStyle}>
                <h3>CURRENT-WEATHER</h3>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href='/map'>MAP</a></li>
                </ul>
                </div>
                )
}
}

export default Navbar