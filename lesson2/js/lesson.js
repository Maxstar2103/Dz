
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


let infoImageContainer
const renderList = () => {



	for (const item of info) {

		let divBlock = document.createElement('div')
		let div = document.createElement('div')
		divBlock.className = 'img-block'
		div.className = 'img-container'
		div.insertAdjacentHTML('afterbegin', `<img  src=${item.url}></img>`)
		divBlock.appendChild(div)
		app.appendChild(divBlock)

		divBlock.addEventListener('click', () => renderInfoImage(item))

	}
	removeBlock()
	addLike()

}
const addLike = () => {
	const spanLike = document.getElementById('span-like')
	const spanDiss = document.getElementById('span-diss')
	const likes = document.querySelectorAll('.left-block__like')

	let numLike = 0
	let numDissLike = 0
	likes.forEach((like) => {
		like.addEventListener('click', (e) => {
			const target = e.target
			console.log(target)
			if (target.closest('.icon-like')) {
				numLike++
				spanLike.textContent = numLike
			} else {
				numDissLike++
				spanDiss.textContent = numDissLike
			}

		})
	})
}
const renderInfoImage = (item) => {
	infoImageContainer = document.querySelector('.info-image__container')
	const infoImage = document.getElementById('left-block__picture')
	infoImageContainer.classList.add('active')
	// setTimeout(() => infoImageContainer.style.display = 'flex', 300)

	infoImage.src = item.url

	renderComments(item.comments)



}
const removeBlock = () => {
	const rightClose = document.querySelector('.right-block__close')
	rightClose.addEventListener('click', (e) => {
		const event = e.target
		if (!event === rightClose) {
			return
		} else {
			infoImageContainer.classList.remove('active')
		}
	})
}
renderList()

const renderComments = (list) => {
	const comments = document.getElementById('right-block__comments')

	for (const item of list) {
		console.log(item)
		const div = document.createElement('div')
		div.textContent = item
		div.className = 'right-block__comment'
		comments.appendChild(div)
	}
}




















