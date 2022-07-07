// const arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 		[5, 6, {
// 			name: "YUra",
// 			age: 22
// 		}]
// 	],
// 	['Yura']
// ]

// console.log(arr[0][2][2].name)

// arr[0][2][2].name

// document.getElementById('app').textContent = arr[0][2][2].name

// const user = {
// 	name: 'max',
// 	surname: 'starchenkov',
// 	age: 21
// }
// // console.log(user)

// function copuObj(obj) {
// 	const result = {};

// 	for (const key in obj) {
// 		result[key] = obj[key];
// 	}
// 	return result
// }

// function logObject(obj) {
// 	for (const key in obj) {
// 		console.log(key, user[key])
// 	}
// }

// const user3 = copuObj(user)


const grade = {
	Anton: getRandomBall(0, 90),
	Max: 90,
	Lena: getRandomBall(),
	Sveta: getRandomBall(40),
	Tanya: getRandomBall(40, 70),
	Liza: getRandomBall(15, 80),
};

function getRandomBall(min = 0, max = 100) {
	return Math.round(min + Math.random() * (max - min));
}

console.log(grade)



function getLeader(grade) {
	let maxValue = 0;
	let leaderName = '';
	let result
	for (const name in grade) {
		if (grade[name] > maxValue) {
			leaderName = name
			maxValue = grade[name]
			result = leaderName
		}
	}
	return result
}

console.log(getLeader(grade))

function getAverageValue(grade) {
	let sum = 0;
	let length = 0;

	for (const name in grade) {
		sum += grade[name]
		length++
	}
	return sum / length
}
// console.log(getAverageValue(grade))


function getAverageUser(grade) {
	const averageValue = getAverageValue(grade);
	let minDiff = Infinity;
	let averageUserName = '';

	for (const name in grade) {
		const currentDiff = Math.abs(grade[name] - averageValue);

		if (currentDiff < minDiff) {
			minDiff = currentDiff;
			averageUserName = name;
		}
	}
	return averageUserName;
}
// console.log(getAverageUser(grade))

function getLastUser(grade) {
	const averageValue = getAverageValue(grade);
	const result = [];
	const userNames = Object.keys(grade);

	for (let i = 0; i < userNames.length; i++) {
		if (grade[userNames[i]] < averageValue) {
			result.push(userNames[i])
		}
	}


	return result


}
// console.log(getLastUser(grade))

function getLeaders(grade) {
	const result = [];
	const gradeCopy = { ...grade };

	for (let place = 0; place < 3; place++) {
		const leaderName = getLeader(gradeCopy);
		result.push(leaderName);


		delete gradeCopy[leaderName]
		console.log(gradeCopy)
	}
	return result;
}

// console.log(getLeaders(grade))




