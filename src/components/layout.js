/*global chrome*/
import React from 'react';
import Button from './../common/button/index';
import CreateTemplate from './create/index';
import {
	getTemplateList,
	copyCurrentLink,
	stored,
	clearData
} from './../assets/js/main';
import Row from './../common/table/row';
import List from './list/index';
import _findIndex from 'lodash/findIndex';
import _map from 'lodash/map';

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isCreating: false,
			templateList: []
		}	
	}

	componentDidMount() {
		this.setState({templateList: this.props.allData});
	}

	onCreate() {
		this.setState({isCreating: !this.state.isCreating});
	}

	onCancel() {
		this.setState({isCreating: false});
	}

	onSave(content, name) {
		const templateList = this.state.templateList;
		let max;
		if (templateList.length == 0) {
			max = 1;
		} else {
			let ids = _map(templateList, 'id');
			max = Math.max(...ids);
			max++;
		}
      	templateList.push({
        	id: max,
        	name: name,
        	content: content
      	});

      	this.setState({
      		templateList: templateList,
      		isCreating: false
      	}, function () {
      		stored(this.state.templateList);
      	});
	}

	onCopy() {
		copyCurrentLink();
	}

	onEditting(id, name, content) {
		const templateList = this.state.templateList;
      	let index = _findIndex(templateList, {id});
      	if (index !== -1) {
          	let template = templateList[index];
          	template.name = name;
          	template.content = content;
          	templateList[index] = template;
          	this.setState({
          		templateList: templateList
          	}, function () {
	      		stored(this.state.templateList);
	      	});
      	}
	}

	onDeleting(id) {		
		if (window.confirm('Do you want to delete this template?')) {
			const templateList = this.state.templateList;
	      	let left = templateList.filter(t => t.id !== id);
	      	this.setState({
	      		templateList: left
	      	}, function () {
	      		stored(this.state.templateList);
	      	});
      	}
	}

	render() {
		let createTemplate;
		let tableContent = <p className="empty-template">Nothing to show. Adding a template.</p>;
		
		if (this.state.isCreating === true) {
			createTemplate = <CreateTemplate onCancel={() => this.onCancel()} onSave={(content, name) => this.onSave(content, name)}/>;
		} else {
			createTemplate = '';
		}

		if (this.state.templateList.length > 0) {
			tableContent =  <List templateList={this.state.templateList} 
								onDeleting={(id) => this.onDeleting(id)} 
								onEditting={(id, name, content) => this.onEditting(id, name, content)}
							/>;
		}

		return (
			<div className="container">
			    <div className="table-responsive">
			        <div className="table-wrapper">
			            <div className="table-title">
			                <div className="row">
			                    <div className="col-sm-5 button-func">
			                    	<Button type="button" type="create" onCreate={() => this.onCreate()} className="btn btn-info add-new" title="Adding new template" name="Add" />
			                    </div>
			                    {/*<div className="col-sm-5 button-func">
			                    	<Button type="button" type="copy" className="btn btn-info copy-link" onCopy={() => this.onCopy()} title="Copy current page's url" name="Copy" />
			                    </div>*/}
			                </div>
			            </div>
			            {createTemplate}
			            {tableContent}
			        </div>
			    </div>
			</div>     

		);
	}
}

export default Layout;
