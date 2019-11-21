import React from 'react'
import './App.css'
import Navbar from './Nav'
import Weather from './weather'
import Footer from './footer'



class App extends React.Component {
  state = {
    size: '30px',
  }
  render(){
    return (
    <div className="App" style={{animation: `spin ${this.state.speed}s linear infinite`}}>
      <Navbar linkWidth={this.state.linkWidth} navColor={this.state.navColor}/>
     <Weather />
     <Footer />    
     </div>
  )
}


 
}
export default App
