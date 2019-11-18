import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Nav';
import Weather from './weather';

class App extends React.Component {
  state = {
    color: 'black',
    size: '30px',
    navColor: 'beige',
    linkWidth: '15%',
    speed: '0'
  }
  render(){

    return (
    <div className="App" style={{animation: `spin ${this.state.speed}s linear infinite`}}>
      <Navbar linkWidth={this.state.linkWidth} navColor={this.state.navColor}/>
     <Header title='Weather' color={this.state.color} size={this.state.size}/>
     <Weather />
    </div>
  );
}


 
}
export default App;
