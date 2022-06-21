

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


userInfo()

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


const all = document.querySelector('.dream-team__items')


const frontendMisha = document.querySelector(`#fe`)
const designPasha = document.querySelector(`#ds`)
const projectManagerSanya = document.querySelector(`#pm`)
const backendGrisha = document.querySelector(`#be`)
const businessAnalystSveta = document.querySelector(`#ba`)

const personals = document.querySelectorAll('.dream-team__item')

personals.forEach(personal => {
	personal.addEventListener("click", (e) => {
		const targetElement = e.target;
		if (targetElement === frontendMisha) {
			del(personals)
			frontendMisha.classList.add('_yellow')
			designPasha.classList.add('_active')
			projectManagerSanya.classList.add('_active')
			backendGrisha.classList.add('_active')
		} if (targetElement === designPasha) {
			del(personals)
			designPasha.classList.add('_yellow')
			projectManagerSanya.classList.add('_active')
			frontendMisha.classList.add('_active')
		} if (targetElement === projectManagerSanya) {
			del(personals)
			projectManagerSanya.classList.add('_yellow')
			frontendMisha.classList.add('_active')
			designPasha.classList.add('_active')
			backendGrisha.classList.add('_active')
			businessAnalystSveta.classList.add('_active')
		} if (targetElement === backendGrisha) {
			del(personals)
			backendGrisha.classList.add('_yellow')
			frontendMisha.classList.add('_active')
			projectManagerSanya.classList.add('_active')
			businessAnalystSveta.classList.add('_active')
		} if (targetElement === businessAnalystSveta) {
			del(personals)
			businessAnalystSveta.classList.add('_yellow')
			projectManagerSanya.classList.add('_active')
		}
	})

})



function del(personals) {
	for (let i = 0; i < personals.length; i++)
		if (personals[i].classList.contains('_active') || personals[i].classList.contains('_yellow')) {
			personals[i].classList.remove('_active')
			personals[i].classList.remove('_yellow')
		}
}



