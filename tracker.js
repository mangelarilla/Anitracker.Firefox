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
	  console.log(`Message from the background script:  ${message.response}`);
	}

	function handleError(error) {
	  console.error(error);
	}

	browser.runtime.sendMessage({
	    path: window.location.pathname
	});
})();