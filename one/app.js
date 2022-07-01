const colors = ["green", "red", "rgba(133,122,200)", "yellow", "blue", "grey", "pink", "purple", "grey"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

function getRandomBall() {
	return Math.floor(Math.random() * colors.length);
}

// console.log(getRandomBall(0, 3))

btn.addEventListener('click', () => {
	// console.log(getRandomBall())
	const randomNumber = getRandomBall();
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
	color.style.color = colors[randomNumber];
})

