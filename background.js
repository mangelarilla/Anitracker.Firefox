var anime = {};

function handleMessage(request, sender, sendResponse) {
	anime = parsePath(request.path);
}

function parsePath(path) {
	var matches = path.matchAll(/\/ver\/\d+\/(.+)-(\d+)/gi).next().value;

	return {
		title: matches[1],
		episode: matches[2]
	}
}

browser.runtime.onMessage.addListener(handleMessage);