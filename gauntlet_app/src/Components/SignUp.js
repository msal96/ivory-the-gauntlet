import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    onSubmit = (e) => {
        e.preventDefault()
        console.log('Submit:', this.state.form)
        this.props.createUser(this.state.form)
    }
    render () {
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

const mapDispatchToProps = {
    createUser
}
export default connect(null, mapDispatchToProps)(SignUp)