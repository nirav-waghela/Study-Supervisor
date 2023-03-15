import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleValidateUser } from '../actions/index'
import { withRouter} from 'react-router-dom'


class Login extends Component {
    state = {
        formData: { 
            email: "",
            password: "",
          },
          errors: {},
    }
    
    validateEmail = (email) =>{
        const regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm
        return regex.test(email)
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        const { formData , errors} = this.state
        const { email, password } = formData
        if(password.length === 0){
            this.setState({
                errors:{
                    ...errors,
                    password:'Password Required!'
                }
            })
        }
        if(email.length < 1){
            this.setState({
                errors:{
                    ...errors,
                    email:'Email Required!'
                }
            })
        }
        if(!this.validateEmail(email)){
            this.setState({
                errors:{
                    ...errors,
                    email:'Please enter a valid Email'
                }
            })
        }
        if(Object.keys(errors).length === 0){
            this.props.dispatch(handleValidateUser(email, password))
        }
    
    }

    handleChange = (e) => {
        const { formData } = this.state;
      
        this.setState({
          formData: {
            ...formData, 
            [e.target.name]: e.target.value, 
          }
        });
    }

    render() {
        const {formData,errors} = this.state
        const {email , password} = formData
        return (
            <div className='center'>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label><b>Email</b></label>
                    </div>
                    <div>
                        <input className='input-style' type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) => this.handleChange(e)}></input>
                    </div>
                        {errors.email && <span className='error-msg'>{errors.email}</span>}
                    <div>
                        <label><b>Password</b></label>
                    </div>
                    <div>
                        <input className='input-style' type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => this.handleChange(e)}></input>
                    </div>
                    {errors.password && <span className='error-msg'>{errors.password}</span>}
                    <div>
                        <button className='button' type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default withRouter(connect(mapStateToProps)(Login))