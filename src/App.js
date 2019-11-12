import React from 'react';
import './App.css';
import Header from './Header';
import Button from './button';
import Navbar from './Nav';
import Weather from './weather';

class App extends React.Component {
  state = {
    color: 'red',
    size: '30px',
    navColor: 'beige',
    linkWidth: '30%',
    speed: '0'
  }
  render(){

    return (
    <div className="App" style={{animation: `spin ${this.state.speed}s linear infinite`}}>
      <Navbar linkWidth={this.state.linkWidth} navColor={this.state.navColor}/>
     <Header title='Weather' color={this.state.color} size={this.state.size}/>
     <Button onClick={this.onClick} />
     <Weather />
    </div>
  );
}


  onClick = () => {
    let {color,size,navColor,linkWidth} = this.state;
    if (color === 'red' && size === '30px' && navColor === 'beige' && linkWidth === '30%'){
      this.setState({color: 'blue', size: '50px', navColor: 'bisque', linkWidth: '70%'})
    }
    if (color === 'blue' && size === '50px' && navColor === 'bisque' && linkWidth === '70%') {
      this.setState({color: 'yellow', size: '70px', navColor: 'burlywood', linkWidth: '120%'})
    } else {
      if (color === 'yellow' && size === '70px'){
        this.setState({color: 'red', size: '30px', navColor: 'beige', linkWidth: '30%'})
      }
    }
  }
}
export default App;
