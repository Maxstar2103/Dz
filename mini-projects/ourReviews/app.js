const reviews = [
	{
		id: 1,
		name: "susan smith",
		job: "web deweloper",
		alt: 'sssss',
		img: "https://i.ibb.co/4Jy5LH1/6a0a740e-9d48-4609-b118-79f8c5acf005.jpg",
		text:
			"adipisicing elit. Ipsum amet nostrum porroLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet nostrum porroLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet nostrum porro"
	},
	{
		id: 2,
		name: "sara para",
		job: "front-end",
		img:
			"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet nostrum porroLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet nostrum porroLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet nostrum porro"
	},
	{
		id: 3,
		name: "marina carina",
		job: "deweloper",
		img:
			"https://i.ibb.co/4Jy5LH1/6a0a740e-9d48-4609-b118-79f8c5acf005.jpg",
		text:
			" ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet nostrum porroLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet nostrum porroLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet nostrum porro"
	},
	{
		id: 4,
		name: "maks faks",
		job: "junior",
		img:
			"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
		text:
			" amet consectetur adipisicing elit. Ipsum amet nostrum porroLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet nostrum porroLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet nostrum porro"
	}

];


const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
	showPerson()
})
console.log(img)

function showPerson() {
	const item = reviews[currentItem];
	img.srs = item.img;
	img.alt = item.alt
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

nextBtn.addEventListener('click', () => {
	currentItem++
	if (currentItem > reviews.length - 1) {
		currentItem = 0
	}
	showPerson()
})
prevBtn.addEventListener('click', () => {
	currentItem--
	if (currentItem < 0) {
		currentItem = reviews.length - 1
	}
	showPerson()
})

