import React from 'react';
import Button from './../../common/button/index';

class EditTemplate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
			name: this.props.name,
			content: this.props.content
		}
	}

	// componentDidMount() {
	// 	this.setState({template: this.props.data});

	// }

	onSave() {
		if (this.state.content !== '' && this.state.content !== undefined
			&& this.state.name !== '' && this.state.name !== undefined
		) {
			this.props.onEditting(this.state.id, this.state.name, this.state.content);
		} else {
			alert('Something error');
		}
	}

	onChangeContent(event) {
		this.setState({content: event.target.value});
	}

	onChangeInput(event) {
		this.setState({name: event.target.value});
	}

	onCancel() {
		this.props.onCancel();
	}

	render() {
		return (
			<div className="table-title">
                <div className="row input-field">
                	<input value={this.state.name} onChange={(event) => this.onChangeInput(event)} className="name-template" placeholder="Template name"/>
	                <textarea className="template-input" value={this.state.content} onChange={(event) => this.onChangeContent(event)} >{this.state.content}</textarea>
	                <div className="row input-button edit-button">
		                <div className="col-sm-5 button-func">
		                	<Button type="button" className="btn btn-info save-template" type="save" onSave={() => this.onSave()} title="Save template" name="Save" />
	                    </div>
	                    <div className="col-sm-5 button-func">
	                    	<Button type="button" className="btn btn-info cancel" type="cancel" onCancel={this.props.onCancel} title="Save template" name="Cancel" />
	                    </div>
                    </div>
                </div>
            </div>

		);
	}
}

export default EditTemplate;
