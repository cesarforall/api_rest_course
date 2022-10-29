const API_URL =
	'https://api.thecatapi.com/v1/images/search?limit=3&&api_key=live_Wlpvzt5p5LWEXlg9Q0pPmJGjnKHLrKaMajnZ2sKb3CaVzjUIXZrwSLmQWuzzuMF8';

// fetch(URL)
// 	.then(res => res.json())
// 	.then(data => {
// 		const img = document.querySelector('img');
// 		img.src = data[0].url;
// 	});

const cats = document.querySelector('#cats');

async function getCat() {
	const res = await fetch(API_URL);
	const data = await res.json();
	console.log(data);
	data.forEach(cat => {
		console.log(cat);
		const img = document.createElement('img');
		img.width = '200';
		img.id = 'cat' + cat.id;
		img.src = cat.url;
		cats.appendChild(img);
	});
}

getCat();

const button = document.querySelector('button');
button.onclick = getCat;
