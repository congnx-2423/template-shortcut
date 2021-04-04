import React from 'react';
import {
	getTemplateToView
} from './../../assets/js/main';
import EditTemplate from './../../components/edit/index';

class Row extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}

	getName() {
		return (this.props.name.length > 20) ? this.props.name.substring(0, 20) + '...' : this.props.name; 
	}

	getRow() {
		getTemplateToView(this.props.content);
	}

	onEditting(id, name, content) {
		this.props.onEditting(id, name, content);
		this.onCancel();
	}

	onOpenEditting() {
		this.setState({open: !this.state.open});
	}

	onCancel() {
		this.setState({open: false});
	}

	render() {
		let editArea;
		if (this.state.open) {
			editArea =  <EditTemplate {...this.props} 
							onEditting={(id, name, content) => this.onEditting(id, name, content)}
							onCancel={() => this.onCancel()}
						/>;
		} else {
			editArea = '';
		}
		return (
			<>
				<tr>
					<td title={this.props.name} className="template-row" onClick={() => this.getRow()}>{this.getName()}</td>
			    	<td><a className="edit" title="Edit" data-toggle="tooltip" onClick={() => this.onOpenEditting()}><i className="material-icons">&#xE254;</i></a></td>
			    	<td><a className="delete" title="Delete" data-toggle="tooltip" onClick={() => this.props.onDeleting(this.props.id)}><i className="material-icons">&#xE872;</i></a></td>
				</tr>
				{editArea}
			</>
		);
	}
}

export default Row;
