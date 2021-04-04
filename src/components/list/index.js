import React from 'react';
import Row from './../../common/table/row';
class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			isDeleting: false
		}
	}

	render() {
		return (
			<table className="table table-bordered template-table">
	            <thead className="table-head">
	                <tr>
	                    <th className="table-name">Template</th>
	                    <th className="table-edit">Edit</th>
	                    <th className="table-del">Del</th>
	                </tr>
	            </thead>
				<tbody>
					{
						this.props.templateList.map(template => {
							return  <Row {...template} key={template.id} 
										onEditting={this.props.onEditting} 
										onDeleting={this.props.onDeleting} 
									/>;
						})
					}
				</tbody>
			</table>
		);
	}
}

export default List;
