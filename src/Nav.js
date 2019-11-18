import React from 'react';
import './App.css';

class Navbar extends React.Component {
    render(){
        let {navColor} = this.props;
        let navStyle = {
            width: '100%',
            height: '100px',
            backgroundColor: navColor,  
        }

        let {linkWidth} = this.props;
        let linkStyle = {
            width: linkWidth
        }
        return(
            <div className="navBar" style={navStyle}>
                <ul style={linkStyle}>
                    <li><a href="/" style={{textTransform: 'uppercase'}}>current</a></li>
                    <li><a href='/' style={{textTransform: 'uppercase'}}>weather</a></li>
                </ul>
            </div>
        )
    }

}

export default Navbar;