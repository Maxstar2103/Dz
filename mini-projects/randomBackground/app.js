const colors = ["green", "red", "rgba(133,122,200)", "yellow", "blue", "grey", "pink", "purple", "grey"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const colorFlipper = document.querySelector('.color-flipper')
const simpleHex = document.querySelector('.simple-hex')


function getRandomBall() {
	return Math.floor(Math.random() * colors.length);
}


btn.addEventListener('click', () => {
	// console.log(getRandomBall())
	const randomNumber = getRandomBall();
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
	color.style.color = colors[randomNumber];
})

window.addEventListener('DOMContentLoaded', () => {
	colorFlipper.style.color = 'red'
})
