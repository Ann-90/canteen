const pistacheElements = [
	document.querySelectorAll(".drop-menu__item"),
	document.querySelectorAll(".carousel__btn"),
	document.querySelector(".fast-access__bin"),
	document.querySelector(".fast-access__phone"),
	document.querySelector(".add"),
	document.querySelector(".sales__link"),
	document.querySelector(".logoRIP__alllogos"),
	document.querySelector(".bottom-menu"),
	document.querySelectorAll(".nav__list li"),
];

const mainInfo = document.querySelector(".main-info");
const empty = document.querySelector(".empty");
const searchForm = document.querySelector(".search-form");
const search = document.querySelector(".fast-access__search");

const carousel = document.querySelector(".carousel__scroll");
const switchers = document.querySelectorAll(".switch__switcher");
const switchArrows = document.querySelectorAll(".switch span");

// 404
function giglet404() {
	location.href = "/404.html";
}
pistacheElements.forEach((elem) => {
	if (elem.length > 0) {
		elem.forEach((e) => {
			e.addEventListener("click", giglet404);
		});
	} else elem.addEventListener("click", giglet404);
});
//searchForm
[mainInfo, empty, carousel].forEach((elem) => {
	elem.addEventListener("click", (e) => {
		searchForm.classList.add("searchForm_inactive");
	});
});
search.addEventListener("click", (e) => {
	searchForm.classList.toggle("searchForm_inactive");
});
searchForm.addEventListener("submit", (e) => {
	alert(
		`Oops! It seems to be a test page ¯\\_(ツ)_/¯. Here is your message: ${e.target.childNodes[1].value}`
	);
});

// carousel
let carouselTimer = setInterval(() => {
	moveScroll(findNextPosition());
}, 6000);

function findNextPosition() {
	let scrollLeft = carousel.scrollLeft;
	const step = carousel.clientWidth + 20;
	const fullscroll = carousel.scrollWidth;
	let next;

	if (scrollLeft >= fullscroll - step) {
		next = 0;
	} else if (scrollLeft > fullscroll - step * 2) {
		next = 3;
	} else if (scrollLeft > fullscroll - step * 3) {
		next = 2;
	} else {
		next = 1;
	}

	return next;
}

function changeSwitcherClass(pos) {
	switchers.forEach((elem) => {
		elem.classList.remove("switch__switcher_active");
	});
	switchers[pos].classList.add("switch__switcher_active");
}

function moveScroll(pos) {
	document.body.clientWidth > 720
		? (carousel.scrollLeft = (carousel.clientWidth + 30) * pos)
		: (carousel.scrollLeft += (carousel.clientWidth + 63) * pos);
}

// switchers
function handleSwitchers(event) {
	// carousel.scrollLeft += carousel.scrollWidth / 4;
	// event.target === switchers[index]
	// changeSwitcherClass(this.index);
	// console.log(event.target);
}
/* carousel.addEventListener("scroll", handleScroll); */

switchers.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		// changeSwitcherClass(index);
		moveScroll(index);
	});
});

switchArrows.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		let next = findNextPosition();
		next === 0 ? (next = 3) : next--;

		if (e.target === switchArrows[0]) {
			next === 0 ? (next = 3) : next--;
		} else {
			next === 3 ? (next = 0) : next++;
		}

		// changeSwitcherClass(next);
		moveScroll(next);
	});
});

carousel.addEventListener("scroll", (ev) => {
	let position = findNextPosition() !== 0 ? findNextPosition() - 1 : 3;
	changeSwitcherClass(position);
});
