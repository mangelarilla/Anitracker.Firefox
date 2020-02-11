(function() {
	/**
   	* Check and set a global guard variable.
   	* If this content script is injected into the same page again,
   	* it will do nothing next time.
   	*/
  	if (window.hasRun) {
    	return;
  	}
	window.hasRun = true;

	function handleResponse(message) {
	  alert(`Message from the background script:  ${message.response}`);
	}

	function handleError(error) {
	  alert(`Error: ${error}`);
	}

	function notifyBackgroundPage(e) {
	  var sending = browser.runtime.sendMessage({
	    greeting: "Greeting from the content script"
	  });
	  sending.then(handleResponse, handleError);  
	}

	window.addEventListener("load", notifyBackgroundPage);

	// let sending = browser.runtime.sendMessage({
	// 	path: window.location.pathname
	// });

	// sending.then((msg) => {
	// 	console.log(msg);
	// }, (err) => {
	// 	console.error(err);
	// });
})();