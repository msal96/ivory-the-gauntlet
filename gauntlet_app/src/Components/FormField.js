import React, { Component } from 'react'

export default class FormField extends Component {
	render () {
        console.log(this.props)
		const { labelName, name, tagName, onChange, value } = this.props
		return <div>
			<label htmlFor={ tagName }>{ labelName }</label>
			<input type='text' name={ tagName } value={value} onChange={onChange(name)} />
		</div>
	}
}