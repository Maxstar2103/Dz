

const userInfo = () => {

	for (i = 0; i < Infinity; i++) {
		const name = getName()
		const age = getAge()
		const job = getJob()
		const meal = getMeal()
		const userResult = confirm(`Your name ${name},age ${age},job ${job},meal ${meal}`)
		if (userResult === false) {

			return userInfo()
		} else {
			return
		}

	}
}


// userInfo()

function getName() {
	let userName = prompt('Hello, what is your name?')
	if (!isNaN(parseInt(userName)) || userName === null || userName.length === 0 || userName.length < 6) {
		return getName()
	} else {
		return userName
	}
}
function getAge() {
	let userAge = +prompt('How old are you?')
	let maxAge = 150
	if (userAge === null || userAge.length === 0 || (isNaN(userAge)) || userAge > maxAge) {
		return getAge()
	} else {
		return userAge
	}

}
function getJob() {
	let userJob = prompt('What is your job')
	if (!isNaN(parseInt(userJob)) || userJob === null || userJob.length === 0) {
		return getJob()
	} else {
		return userJob
	}
}
function getMeal() {
	let userMeal = prompt('What is your favorite meal?')
	if (!isNaN(parseInt(userMeal)) || userMeal === null || userMeal.length === 0) {
		return getMeal()
	} else {
		return userMeal
	}
}







// function del(personals) {
// 	for (let i = 0; i < personals.length; i++)
// 		if (personals[i].classList.contains('_active') || personals[i].classList.contains('_yellow')) {
// 			personals[i].classList.remove('_active')
// 			personals[i].classList.remove('_yellow')
// 		}
// }

const users = [
	{
		content: 'Frontend Misha',
		id: 'fe',
		relations: ['pm', 'be', 'ds']
	},
	{
		content: 'Design Pasha',
		id: 'ds',
		relations: ['pm', 'fe']
	},
	{
		content: 'Project Manager Sanya',
		id: 'pm',
		relations: ['ba', 'fe', 'be', 'ds']
	},
	{
		content: 'Backend Grisha',
		id: 'be',
		relations: ['pm', 'fe', 'ba']
	},
	{
		content: 'Business Analyst Sveta',
		id: 'ba',
		relations: ['pm']
	},

]


const renderList = () => {

	const app = document.getElementById('app')


	for (const item of users) {
		let div = document.createElement('div')


		div.textContent = item.content
		div.id = item.id
		div.className = 'static'




		div.addEventListener('click', function () {

			enabledItems(item)
		})
		app.appendChild(div)


	}
}


const enabledItems = (item) => {
	let div = document.getElementById(item.id)
	if (div.className !== 'en static') {
		setNullClass()
		div.className = 'en static'

		for (item of item.relations) {
			div = document.getElementById(item)
			div.className = 'active static'
		}
	} else {
		setNullClass()
	}
}


const setNullClass = () => {
	let div

	for (const user of users) {
		div.document.getElementById(user.id)
		div.className = 'static'
	}
}

renderList()




// const persons = document.querySelectorAll('.static')
// persons.forEach((person) => {
// 	person.addEventListener('click', (e) => {
// 		person.classList.add('en')
// 		console.log(item.relations)
// 	})
// })
