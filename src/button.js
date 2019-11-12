import React from 'react';


class Button extends React.Component {
    render(){
        let {onClick} = this.props;
        let buttonStyle = {
            backgroundColor: '#4b4b4b',
            width: '30%',
            height: '50px',
            fontSize: '25px',
            color: 'white',
            borderRadius: '20px',
            border: 'none',
            position: 'absolute',
            top: '80%',
            left: '35%'
        }
        return(
            <button className="button" style={buttonStyle} onClick={onClick}>
                click me
            </button>
        )
    }
}

export default Button;