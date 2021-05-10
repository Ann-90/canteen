const pistacheElements = [
	document.querySelectorAll(".carousel__btn"),
	document.querySelector(".fast-access__bin"),
	document.querySelector(".fast-access__phone"),
	document.querySelector(".add"),
	document.querySelector(".sales__link"),
	document.querySelector(".logoRIP__alllogos"),
	document.querySelector(".bottom-menu"),
];

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

// carousel
let carouselTimer = setInterval(() => {
	scroll();
}, 6000);

function scroll() {
	removeClass(switchers, "switch__switcher_active");
	let next = findPosition();
	changeSwitcherClass(next);
	moveScroll(next);
}

function removeClass(element, id) {
	element.forEach((elem) => {
		elem.classList.remove(id);
	});
}

function findPosition() {
	let next;
	let scrollLeft = carousel.scrollLeft;
	const step = carousel.clientWidth;
	const fullscroll = carousel.scrollWidth;

	if (scrollLeft === fullscroll - step) {
		// scrollLeft = 0;
		next = 0;
	} else if (scrollLeft > fullscroll - step * 2.5) {
		next = 3;
	} else if (scrollLeft > fullscroll - step * 3.5) {
		next = 2;
	} else if (scrollLeft === 0) {
		next = 1;
	} else next = 0;
	return next;
}

function changeSwitcherClass(pos) {
	removeClass(switchers, "switch__switcher_active");
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
		changeSwitcherClass(index);
		moveScroll(index);
	});
});

switchArrows.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		let next = findPosition();
		next === 0 ? (next = 3) : next--;

		if (e.target === switchArrows[0]) {
			next === 0 ? (next = 3) : next--;
		} else {
			next === 3 ? (next = 0) : next++;
		}

		changeSwitcherClass(next);
		moveScroll(next);
	});
});
