/*
let arr = []

function getNumToArr(numSatart, numFinish, arrow) {

	for (let i = numSatart; i <= numFinish; i++) {
		arrow.push(i)
		if (arrow(-i)) {
			arrow.shift(-i)
		}
	}
}
getNumToArr(-50, 50, arr)
console.log(arr)
*/
/*
 function removeNegativeNum(arrow) {
	  for (let i = 0; i <= arrow.length; i++) {
			 arrow.shift(-i)
	  }
 }
 */

/*
 function removeDivisibleNum(arrow, num) {
	  for (let i = 0; i <= arrow.length; i++) {
			 if (arrow[i] % num === 0) {
				  arrow.splice(i, 1)
			 }
	  }
 }
*/
/*
 function getContent(arrow) {
	  for (let i = 0; i <= arrow.length - 1; i++) {

			 document.getElementById('app').textContent += arrow[i]

	}
 }
*/

// getNumToArr(-50, 50, arr)
// removeNegativeNum(arr)
// removeDivisibleNum(arr, 11)
// getContent(arr)




/*
Чому функція працює тільки для -і в масиві???

let arr = []
let num = 11

function getNumToArr(numSatart, numFinish, arrow) {

	for (let i = numSatart - 1; i <= numFinish; i++) {

		if (arrow[i] % num === 0) {
			arrow.splice(i, 1)
		}
		else {
			arrow.push(i)
		}
	}

}
getNumToArr(-50, 50, arr)
console.log(arr)
*/

