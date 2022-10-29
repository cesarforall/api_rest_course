const API_URL =
	'https://api.thecatapi.com/v1/images/search?limit=3&&api_key=live_Wlpvzt5p5LWEXlg9Q0pPmJGjnKHLrKaMajnZ2sKb3CaVzjUIXZrwSLmQWuzzuMF8';

// fetch(URL)
// 	.then(res => res.json())
// 	.then(data => {
// 		const img = document.querySelector('img');
// 		img.src = data[0].url;
// 	});

const cats = document.querySelector('#cats');
let randomCats = [];
let articlesNodes = [];

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
		randomCats.push(img);
	});
	console.log('random cats: ', randomCats);
	printCats();
}

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function createArticles(cat) {
	const article = document.createElement('article');
	const button = document.createElement('button');

	button.innerText = 'Favorite'

	article.appendChild(cat);
	article.appendChild(button);
	cats.appendChild(article);
}

function printCats() {
	removeAllChildNodes(document.querySelector('#cats'));
	randomCats.forEach(cat => createArticles(cat));
	randomCats = [];
}

getCat();
printCats();

const button = document.querySelector('button');
button.onclick = getCat;
