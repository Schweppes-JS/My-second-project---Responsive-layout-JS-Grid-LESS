const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider-img');
const mainImg = document.getElementById('img');
const leftButton = document.querySelectorAll('.button')[0];
const rightButton = document.querySelectorAll('.button')[1];

// Insert preview image on main block
function changingImage(e) {
	sliderImages.forEach(element => element.classList.remove("selected"));
	e.path[1].classList.add("selected");
	const url = e.target.attributes.src.nodeValue;
	mainImg.style.backgroundImage = `url("${url}")`;
}

// Add event listener to all preview image
sliderImages.forEach(element => {
	element.addEventListener('click', changingImage);
});

// Slider position
let counter = 0;
const sliderWidth = parseInt(getComputedStyle(sliderContainer).width);

// Move slider to left
function toLeft() {
	if (counter > 0) {
		counter = counter - 93;
		sliderContainer.style.transform = `translateX(-${counter}px)`;
	}
	else return;
}

// Changing main image on click to left arrow
function setPreviousImg() {
	for (let i = 0; i < sliderImages.length; i++) {
		if(sliderImages[i].className == "slider-img selected") {
			if (i == 0) {
				break;
			}
			sliderImages[i].classList.remove("selected");
			sliderImages[i-1].classList.add("selected");
			const url = sliderImages[i-1].children[0].attributes.src.nodeValue;
			mainImg.style.backgroundImage = `url("${url}")`;
			break;
		}
	}
	toLeft();
}

// Move slider to right
function toRight() {
	if (counter < sliderWidth - 465) {
		counter = counter + 93;
		sliderContainer.style.transform = `translateX(-${counter}px)`;
	} else return;
} 

// Changing main image on click to right arrow
function setNextImg() {
	for (let i = 0; i < sliderImages.length; i++) {
		if(sliderImages[i].className == "slider-img selected") {
			if (i == sliderImages.length - 1) {
				break;
			}
			console.log(i);
			sliderImages[i].classList.remove("selected");
			sliderImages[i+1].classList.add("selected");
			const url = sliderImages[i+1].children[0].attributes.src.nodeValue;
			mainImg.style.backgroundImage = `url("${url}")`;
			break;
		}
	}
	toRight();
}

// Listeners for buttons
leftButton.addEventListener('click', setPreviousImg);
rightButton.addEventListener('click', setNextImg);