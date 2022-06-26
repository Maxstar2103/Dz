
// Завдання 1 методом циклу FOR __________________________________________

let arr = [-50]

function getNumToArr(numSatart, numFinish, arrow) {

	for (let i = numSatart; i <= numFinish; i++) {
		arrow.push(i)


	}
}




function removeNegativeNum(arrow) {
	for (let i = 0; i < arrow.length; i++) {
		arrow.shift(i)
		console.log(arr)

	}
}



function removeDivisibleNum(arrow, num) {
	for (let i = 0; i <= arrow.length; i++) {
		if (arrow[i] % num === 0) {
			arrow.splice(i, 1)
		}
	}
}


function getContent(arrow) {
	for (let i = 0; i < arrow.length; i++) {

		document.getElementById('app').textContent += arrow[i]

	}
}


// getNumToArr(-50, 50, arr)
// removeNegativeNum(arr)
// removeDivisibleNum(arr, 11)
// getContent(arr)
// console.log(arr)
// console.log(arr)

// Завдання 2  __________________________________________
// Вивести в вигляді списку (ul li) речі які знаходяться в портфелі 
// Дано масив bag 
// В html повинен бути лише div з id app
const bag = [
	{
		item: 'book',

	},
	{
		item: 'pen',

	},
	{
		item: 'note',

	},
	{
		item: 'laptop',

	},
	{
		item: 'ipad',

	},

]
// ----------------------------------------------------------------------------------
const app = document.getElementById('app')
const ul = document.createElement('ul')
app.appendChild(ul)


function getBag(bag) {
	for (let i = 0; i < bag.length; i++) {
		const li = document.createElement('li')
		const bagItem = bag[i]

		li.textContent = bagItem.item

		ul.appendChild(li)
	}
}
// getBag(bag)
// ----------------------------------------------------------------------------------

function getBag2(bag) {
	for (const item of bag) {
		const li = document.createElement('li')

		li.textContent = item.item

		ul.appendChild(li)
	}
}
// getBag2(bag)
// ----------------------------------------------------------------------------------

function getBag3(bag) {
	let i = 0;
	do {
		const li = document.createElement('li')

		li.textContent = bag[i].item

		ul.appendChild(li)

		i++;
	} while (i < bag.length);
}
// getBag3(bag)
// ----------------------------------------------------------------------------------

bag.forEach((item) => {
	const li = document.createElement('li')

	li.textContent = item.item

	ul.appendChild(li)
})
// ----------------------------------------------------------------------------------