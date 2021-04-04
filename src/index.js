/*global chrome*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const defaultContent = `[info][title]Please review my PR[/title][Nội dung ticket]
Github: url pull request
Redmine: url ticket
[/info]`;
const defaultId = 1;
const defaultName = 'Example template';

chrome.storage.sync.get(null, function (data) {
	if (data.templateList == undefined) {
		let defaultTemplate = {
			id: defaultId,
			name: defaultName,
			content: defaultContent
		}

		chrome.storage.sync.set({'templateList': [defaultTemplate]}, function () {
			chrome.storage.sync.get(null, function (result) {
				ReactDOM.render(
				  	<React.StrictMode>
				    	<App {...result}/>
				  	</React.StrictMode>,
				  	document.getElementById('root')
				);
			})
		});
	} else {
		ReactDOM.render(
		  	<React.StrictMode>
		    	<App {...data}/>
		  	</React.StrictMode>,
		  	document.getElementById('root')
		);
	}
	
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
