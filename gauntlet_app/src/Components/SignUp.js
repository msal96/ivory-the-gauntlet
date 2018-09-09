import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Auth } from 'aws-amplify'
import { createUser } from '../Actions/Actions' 
import FormField from './FormField'
class SignUp extends Component {
    constructor () {
        super()
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            }
        }
    }
    onChange = (stateAttribute) => (event) => {
		let newFormState = {
			...this.state.form
		}

		newFormState[stateAttribute] = event.target.value
		this.setState({
			form: newFormState
        })
    }
    // onSubmit = async event => {
    //     event.preventDefault()
    //     try {
    //       await Auth.signUp({
    //         firstName: this.state.firstName,
    //         lastName: this.state.lastName,
    //         username: this.state.username,
    //         password: this.state.password
    //       }).then(data => console.log('data:', data))
    //         .catch(err => console.log(err));
    //     } catch (error) {
    //       console.log(error)
    //     }
    // }
    onSubmit = (e) => {
        e.preventDefault()
        console.log('Submit:', this.state.form)
        this.props.createUser(this.state.form)
        console.log('Succesfully registered')
    }
    render () {
        console.log('sign:', this.props.isLoggedIn)
        const { firstName, lastName, username, password } = this.state.form
        return (<div>
                <form onSubmit = {this.onSubmit}>
                <FormField labelName='First Name' name='firstName' tagName='first-Name' value={firstName} onChange={this.onChange} />
                <FormField labelName='Last Name' name='lastName' tagName='last-Name' value={lastName} onChange={this.onChange} />
                <FormField labelName='Username' name='username' tagName='username' value={username} onChange={this.onChange} />
                <FormField labelName='Password' name='password' tagName='password' value={password} onChange={this.onChange} />
                <input type='submit' value='Register me' onSubmit={this.onSubmit} />
                </form>
            </div>    
        )
    }
}
const mapStateToProps = state => {
    console.log('state:', state)
    return{
    isLoggedIn: state.isLoggedIn
    }
}
const mapDispatchToProps = {
    createUser
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)