const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const simpleHex = document.querySelector('.simple-hex')

btn.addEventListener('click', () => {
	let hexColor = '#'
	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumber()]
		// console.log(hexColor)
	}
	color.textContent = hexColor;
	color.style.color = hexColor;
	document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
	return Math.floor(Math.random() * hex.length)
}
window.addEventListener('DOMContentLoaded', () => {
	simpleHex.style.color = 'red'
})





