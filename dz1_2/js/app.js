

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


// Функія renderList
const renderList = () => {
	// Отримуємо в const app  пустий div з html з id (app)
	const app = document.getElementById('app')

	// Створюємо цикл в якому item пробігається по кожному об єкту массиву users.
	for (const item of users) {

		// Отримуємо в let div створенний div
		//Присвоюємо кожному об єкту массиву users div 
		let div = document.createElement('div')


		//Тепер кожному div ми присвоюємо значення з массиву та добавляємо йому клас static
		div.textContent = item.content
		div.id = item.id
		div.className = 'static'



		//Вішаємо на всі div функцію слухач на клік
		div.addEventListener('click', function () {

			//Визиваємо фунцію enabledItems(item)
			enabledItems(item)
		})
		//Всі створенні та присвоєнні елементи вище ми додаємо в app(const app це пустий div з html )
		app.appendChild(div)
		// console.log(div)

	}

}

//Присвоюємо const enabledItems = arrow function (item) => де item це кожен об єкт массиву users
const enabledItems = (item) => {

	// console.log(item)
	//В let div отримуємо id кожного item з массиву users
	//наприклад 
	//item.id: 'fe',
	//item.id: 'ds',
	//item.id: 'pm',
	//item.id: 'be',
	//item.id: 'ba',
	// [fe,ds,pm,be,ba] ------??????????????? let div виглядаэ як массив з id ???? чи по іншому?
	//???????????????????? Як на данному етапі виглядає item,(це об єкт массиву чи це тег div створений вище чи це все разом вже?)
	let div = document.getElementById(item.id)

	//Якщо (клас divа) не дорівнює класам  'en static' ------------????Як це зрозуміти?
	if (div.className !== 'en static') {

		//Ми викликаємо функцію setNullClass яка обнуляє класи
		setNullClass()

		//div додаємо класи 'en static'
		div.className = 'en static'

		//Створюємо цикл в якому item пробігається по кожному об єкту массиву item.relations
		for (item of item.relations) {

			//???????????????????????????????? Не можу зрозуміти)
			//? МИ div присвоюємо Id item ?як це працює, не зрозуміло
			div = document.getElementById(item)
			//????????????????????????????????
			//? Додаємо клас 'active static'
			div.className = 'active static'
		}
		//Ми викликаємо функцію setNullClass яка обнуляє класи
	} else {
		setNullClass()
	}
}

//
const setNullClass = () => {
	// хай div
	let div
	// Створюємо цикл в якому user пробігається по кожному об єкту массиву users.
	for (const user of users) {
		//Додає кожному divу   id user
		div = document.getElementById(user.id)
		//Додає кожному div клас 'static'
		div.className = 'static'
	}
}

renderList()




