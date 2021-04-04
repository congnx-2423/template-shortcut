/*global chrome*/
export function stored(template) {
	chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
		chrome.storage.sync.set({'templateList': template}, function() {
			if (chrome.runtime.lastError) {
    			console.log('error!')			
    		}
		});
	});
}

export function copyCurrentLink(template) {
  	chrome.tabs.query({
  		active: true, 
  		lastFocusedWindow: true
  	}, tabs => {
	    let url = tabs[0].url;
	});
}

export function getTemplateToView(template) {
	chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {getToView: 'getToView', content: template}, function (response) {
			if (response != undefined && response.status === true) {
				console.log('Copied!');
			}
		})
	});
}
