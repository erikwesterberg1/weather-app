import React from 'react';

class Header extends React.Component {
    
    render(){
       let {title,color,size} = this.props;
        let style = {
            color: color,
            fontSize: size,
            textTransform: 'uppercase'
        }
        return <h1 style={style}>{title}</h1>
    }
}

export default Header;