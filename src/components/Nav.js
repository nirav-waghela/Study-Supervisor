import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component{
    
    handleClick = () => {
        localStorage.clear();
        this.forceUpdate()
    }
    
    render(){
    return(
        <div className='topnav'>
            <NavLink to = '/'>
                Home
            </NavLink>
            <NavLink to='/login' onClick={this.handleClick}>
            {localStorage.hasOwnProperty('token') ? 'Logout' : 'Login'}
            </NavLink>
        </div>
    )
    }
}

export default Nav;