<<<<<<< HEAD
//Let's try one more time...
=======
//Just want to make sure I'm using git reset correctly...
>>>>>>> eb8aa8b9b81e8b5541ab81149eb46430ebedbd51

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	renderField(field) {
		const { meta: { touched, error } } = field;		//ES6
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<div className="className has-danger">
					<label>{field.label}</label>
					<input
						className="form-control"
						type="text"
						{...field.input}	// Handling several events
					/>
					<div className="text-help">
						{touched ? error : ''}
					</div>
					{field.meta.error}
				</div>
			</form>
		);
	}

	onSubmit(values) {
		// this === component
		console.log(values);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form>
				<Field
					label="Title For Post"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

function validate(values) {
	//An object, empty by default
	const errors = {};

	// Validate the inputs from 'values'
	if (!values.title) {
		errors.title = "Enter a title!";
	}

	if (!values.categories) {
		errors.categories = "Enter some categories!";
	}

	if (!values.content) {
		errors.content = "Enter some content!";
	}

	//If errors is empty, the form is fine to submit
	//If errors has *any* properties, redux-form assumes form is invalid
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'	// Make sure the string used is unique
})(PostsNew);