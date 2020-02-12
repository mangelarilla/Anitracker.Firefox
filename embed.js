function onGot(page) {
	var anime = page.anime;
	if(anime) {
		document.getElementById("anitracker").src = `https://anitracker.maadsharp.net?title=${anime.title}&episode=${anime.episode}`;
	}
}

function onError(error) {
	console.error(error);
}

var getting = browser.runtime.getBackgroundPage();
getting.then(onGot, onError);

  