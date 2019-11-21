import React from 'react'
import { fetchUser } from './apiFetches'
import './App.css'

class User extends React.Component {
    
    constructor(){
        super()    
        this.state = {
            user: {}
        }
    }

    componentDidMount(){
        const url = 'https://randomuser.me/api/'
        fetchUser(url)
        .then((res) => this.setState({user: res}))
    }

    render(){
        return(
            <div>
                <div className="user" style={{color: 'white'}}>
                        <img src={this.state.user.picture} alt=""></img>
                    <h3>{this.state.user.name}</h3>
                    <h3>{this.state.user.lastName}</h3>
                </div>
                <div className="location">
                    <h5>{this.state.user.country}: </h5>
                    <h5 style={{color: 'white'}}>{this.state.user.city}</h5>
                </div>
            </div>
        )
    }
}

export default User