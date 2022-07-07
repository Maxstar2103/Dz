
// const fetchPromisse = fetch('items.json')
// 	.then(data => { return data.json() })
// 	.then(data => console.log(data));

// const storageImgBlock = document.querySelector('.storage__images');
// const storagePicture = document.querySelector('.storage__picture');
// const storageBtn = document.querySelector('.storage__btn');
// const storagePopap = document.querySelector('.storage__popap');

// const storageLikeBtn = document.querySelector('.btn-kike');
// const valueBtn = document.getElementById('value')
const app = document.getElementById('app')




function readJSON(file) {
	let request = new XMLHttpRequest();
	request.open('GET', file, false);
	request.send(null);
	if (request.status == 200)
		return request.responseText;
};
const info = JSON.parse(readJSON('items.json'))

console.log(info)

const renderList = () => {



	for (const item of info) {

		let divBlock = document.createElement('div')
		let div = document.createElement('div')
		divBlock.className = 'img-block'
		div.className = 'img-container'
		div.insertAdjacentHTML('afterbegin', `<img  src=${item.url}></img>`)
		divBlock.appendChild(div)
		app.appendChild(divBlock)








	}

}
renderList()



// storageBtn.addEventListener('click', () => {
// 	storagePopap.classList.toggle('hiden')
// })

// let count = 0
// storageLikeBtn.addEventListener('click', () => {
// 	if (storageLikeBtn) {
// 		count++
// 	}
// 	valueBtn.textContent = count;
// })
























