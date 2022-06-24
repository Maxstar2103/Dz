let arr = []

function getNumToArr(numSatart, numFinish, arrow) {

	for (let i = numSatart; i <= numFinish; i++) {
		arrow.push(i)
	}

}

function removeNegativeNum(arrow) {
	for (let i = 0; i <= arrow.length; i++) {
		arrow.shift(-i)
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
	for (let i = 0; i <= arrow.length - 1; i++) {

		document.getElementById('app').textContent += arrow[i]

	}
}


getNumToArr(-50, 50, arr)
removeNegativeNum(arr)
removeDivisibleNum(arr, 11)
getContent(arr)