let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const styles = e.target.classList;
		if (styles.contains('decrease')) {
			count--;
		} else if (styles.contains('increase')) {
			count++;
		} else {
			count = 0;
		}
		if (count) {
			value.style.color = getRandomColor()
		}
		if (count === 0) {
			value.style.color = 'black'
		}



		value.textContent = count;
	})
})


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
function getRandomNumber() {
	return Math.floor(Math.random() * hex.length)
}


const getRandomColor = () => {
	let hexColor = '#'
	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumber()]
		// console.log(hexColor)
	}
	return hexColor
	// color.textContent = hexColor;
	// color.style.color = hexColor;
	// document.body.style.backgroundColor = hexColor;
}

console.log(getRandomColor())
