import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	renderTitleField(field) {
		return (
			<div>
				<input
					type="text"
					{...field.input}	// Handling several events
				/>
			</div>
		);
	}

	render() {
		return (
			<form>
				<Field
					name="title"
					component={this.renderTitleField}
				/>
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm'	// Make sure the string used is unique
})(PostsNew);