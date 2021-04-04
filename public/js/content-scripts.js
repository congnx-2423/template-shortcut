/*global chrome*/
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.STORED === 'STORED') {
		chrome.storage.sync.set({'templateList': request.TEMPLATELIST}, function() {
			if (chrome.runtime.lastError) {
    			console.log('error');
			}
		});

		sendResponse({status: true});
	}
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.getToView === 'getToView') {
		(request.content == undefined) ? '' : request.content;
		console.log(request.content);
		let chatText = $('#_chatText');
		let status = false;
		if (chatText != undefined && chatText.length) {
			chatText.val(chatText.val() + request.content);
			status = true;
		} else {
			alert('Text area input not found');
		}
		sendResponse({status: status});
	}
});

