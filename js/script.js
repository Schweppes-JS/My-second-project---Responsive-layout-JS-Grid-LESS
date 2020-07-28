let left = document.querySelector('.left');
let right = document.querySelector('.right');
let phone = document.querySelector('.phone');
let recycle = document.querySelector('.recycle');
let search = document.querySelector('.search');
let menu = document.querySelector('.menu');
let advertising = document.querySelector('.advertising');
let news = document.querySelector('.news');
let gallery = document.querySelector('.gallery');
let blog = document.querySelector('.blog');
let feedback = document.querySelector('.feedback');
let description = document.querySelector('.description-options');
window.onload = function (e) {
	if (window.innerWidth > 1162) {
    let winsize = Math.ceil((window.innerWidth - 1142)/2);
    left.style.marginLeft = (winsize) + 'px';
    right.style.marginRight = (winsize) + 'px';
    phone.style.marginLeft = (winsize) + 'px';
    recycle.style.marginRight = (winsize) + 'px';
    search.style.marginLeft = (winsize) + 'px';
    menu.style.marginRight = (winsize) + 'px';
    advertising.style.marginLeft = (winsize) + 'px';
    advertising.style.marginRight = (winsize) + 'px';
    news.style.marginLeft = (winsize) + 'px';
    news.style.marginRight = (winsize) + 'px';
    gallery.style.marginLeft = (winsize) + 'px';
    gallery.style.marginRight = (winsize) + 'px';
    blog.style.marginLeft = (winsize) + 'px';
    blog.style.marginRight = (winsize) + 'px';
    feedback.style.marginLeft = (winsize) + 'px';
    feedback.style.marginRight = (winsize) + 'px';
    description.style.marginLeft = (winsize) + 'px';
    description.style.marginRight = (winsize) + 'px';
	}
  else {
    left.style.marginLeft = 10 + 'px';
    right.style.marginRight = 10 + 'px';
    phone.style.marginLeft = 10 + 'px';
    recycle.style.marginRight = 10 + 'px';
    search.style.marginLeft = 10 + 'px';
    menu.style.marginRight = 10 + 'px';
    advertising.style.marginLeft = 10 + 'px';
    advertising.style.marginRight = 10 + 'px';
    news.style.marginLeft = 10 + 'px';
    news.style.marginRight = 10 + 'px';
    gallery.style.marginLeft = 10 + 'px';
    gallery.style.marginRight = 10 + 'px';
    blog.style.marginLeft = 10 + 'px';
    blog.style.marginRight = 10 + 'px';
    feedback.style.marginLeft = 10 + 'px';
    feedback.style.marginRight = 10 + 'px';
    description.style.marginLeft = 10 + 'px';
    description.style.marginRight = 10 + 'px';
  }
}
window.onresize = function (e) {
	if (window.innerWidth > 1162) {
    let winsize = Math.ceil((window.innerWidth - 1142)/2);
    left.style.marginLeft = (winsize) + 'px';
    right.style.marginRight = (winsize) + 'px';
    phone.style.marginLeft = (winsize) + 'px';
    recycle.style.marginRight = (winsize) + 'px';
    search.style.marginLeft = (winsize) + 'px';
    menu.style.marginRight = (winsize) + 'px';
    advertising.style.marginLeft = (winsize) + 'px';
    advertising.style.marginRight = (winsize) + 'px';
    news.style.marginLeft = (winsize) + 'px';
    news.style.marginRight = (winsize) + 'px';
    gallery.style.marginLeft = (winsize) + 'px';
    gallery.style.marginRight = (winsize) + 'px';
    blog.style.marginLeft = (winsize) + 'px';
    blog.style.marginRight = (winsize) + 'px';
    feedback.style.marginLeft = (winsize) + 'px';
    feedback.style.marginRight = (winsize) + 'px';
    description.style.marginLeft = (winsize) + 'px';
    description.style.marginRight = (winsize) + 'px';
	}
  else {
    left.style.marginLeft = 10 + 'px';
    right.style.marginRight = 10 + 'px';
    phone.style.marginLeft = 10 + 'px';
    recycle.style.marginRight = 10 + 'px';
    search.style.marginLeft = 10 + 'px';
    menu.style.marginRight = 10 + 'px';
    advertising.style.marginLeft = 10 + 'px';
    advertising.style.marginRight = 10 + 'px';
    news.style.marginLeft = 10 + 'px';
    news.style.marginRight = 10 + 'px';
    gallery.style.marginLeft = 10 + 'px';
    gallery.style.marginRight = 10 + 'px';
    blog.style.marginLeft = 10 + 'px';
    blog.style.marginRight = 10 + 'px';
    feedback.style.marginLeft = 10 + 'px';
    feedback.style.marginRight = 10 + 'px';
    description.style.marginLeft = 10 + 'px';
    description.style.marginRight = 10 + 'px';
  }
}

let currency = document.getElementById('choise-currency');
let listCurrency = document.getElementById('list-currency');
let selectedCurrency = document.getElementById('selected-currency');
let firstCurrency = document.getElementById('first-currency');
let secondCurrency = document.getElementById('second-currency');
let thirdCurrency = document.getElementById('third-currency');
	selectedCurrency.onclick = function () {
		listCurrency.style.visibility = 'hidden';
		currency.innerHTML = '&#11206;';
	}
	currency.onclick = function () {
		if (this.innerHTML == '\u2BC6') {
			this.innerHTML = '&#11205;';
			listCurrency.style.visibility = 'visible';
			listCurrency.style.opacity = "1";
		}
		else {
			this.innerHTML = '&#11206;';
			listCurrency.style.opacity = '0';
			setTimeout(function(){listCurrency.style.visibility = 'hidden'}, 200)
		}
	}
	firstCurrency.onclick = function () {
		currency.innerHTML = '&#11206;';
		let variable = firstCurrency.innerHTML;
		let selected = selectedCurrency.innerHTML;
		selectedCurrency.innerHTML = variable;
		firstCurrency.innerHTML = selected;
		listCurrency.style.opacity = '0';
		setTimeout(function(){listCurrency.style.visibility = 'hidden'}, 200)
	}
	secondCurrency.onclick = function () {
		currency.innerHTML = '&#11206;';
		let variable = secondCurrency.innerHTML;
		let selected = selectedCurrency.innerHTML;
		selectedCurrency.innerHTML = variable;
		secondCurrency.innerHTML = selected;
		listCurrency.style.opacity = '0';
		setTimeout(function(){listCurrency.style.visibility = 'hidden'}, 200)
	}
	thirdCurrency.onclick = function () {
		currency.innerHTML = '&#11206;';
		let variable = thirdCurrency.innerHTML;
		let selected = selectedCurrency.innerHTML;
		selectedCurrency.innerHTML = variable;
		thirdCurrency.innerHTML = selected;
		listCurrency.style.opacity = '0';
		setTimeout(function(){listCurrency.style.visibility = 'hidden'}, 200)
	}

let language = document.getElementById('choise-language');
let listLanguage = document.getElementById('list-language');
let selectedLanguage = document.getElementById('selected-language');
let firstLanguage = document.getElementById('first-language');
let secondLanguage = document.getElementById('second-language');
	selectedLanguage.onclick = function () {
		listLanguage.style.visibility = 'hidden';
		language.innerHTML = '&#11206;';
	}
	language.onclick = function () {
		if (this.innerHTML == '\u2BC6') {
			this.innerHTML = '&#11205;';
			listLanguage.style.visibility = 'visible';
			listLanguage.style.opacity = "1";
		}
		else {
			this.innerHTML = '&#11206;';
			listLanguage.style.opacity = '0';
			setTimeout(function(){listLanguage.style.visibility = 'hidden'}, 200)
		}
	}
	firstLanguage.onclick = function () {
		language.innerHTML = '&#11206;';
		let variable = firstLanguage.innerHTML;
		let selected = selectedLanguage.innerHTML;
		selectedLanguage.innerHTML = variable;
		firstLanguage.innerHTML = selected;
		listLanguage.style.opacity = '0';
		setTimeout(function(){listLanguage.style.visibility = 'hidden'}, 200)
	}
	secondLanguage.onclick = function () {
		language.innerHTML = '&#11206;';
		let variable = secondLanguage.innerHTML;
		let selected = selectedLanguage.innerHTML;
		selectedLanguage.innerHTML = variable;
		secondLanguage.innerHTML = selected;
		listLanguage.style.opacity = '0';
		setTimeout(function(){listLanguage.style.visibility = 'hidden'}, 200)
	}

let help = document.getElementById('choise-help');
let listHelp = document.getElementById('list-help');
let selectedHelp = document.getElementById('selected-help');
let firstHelp = document.getElementById('first-help');
let secondHelp = document.getElementById('second-help');
	help.onclick =  function () {
		if (this.innerHTML == '\u2BC6') {
			this.innerHTML = '&#11205;';
			listHelp.style.opacity = "1";
			listHelp.style.visibility = 'visible';
		}
		else {
			this.innerHTML = '&#11206;';
			listHelp.style.opacity = '0';
			setTimeout(function(){listHelp.style.visibility = 'hidden'}, 200)
		}
	}
	selectedHelp.onclick =  function () {
		help.innerHTML = '&#11206;';
		listHelp.style.opacity = '0';
		setTimeout(function(){listHelp.style.visibility = 'hidden'}, 200)
	}
	firstHelp.onclick =  function () {
		help.innerHTML = '&#11206;';
		listHelp.style.opacity = '0';
		setTimeout(function(){listHelp.style.visibility = 'hidden'}, 200)
	}
	secondHelp.onclick =  function () {
		help.innerHTML = '&#11206;';
		listHelp.style.opacity = '0';
		setTimeout(function(){listHelp.style.visibility = 'hidden'}, 200)
	}

let itemPrice = document.querySelectorAll('.item-priсe');
let itemSale = document.querySelectorAll('.item-sale');
	for (let i = 0; i < itemPrice.length; i++) {
		if (itemPrice[i].children[0].id != 'item-discount') {
			itemSale[i].style.visibility = 'hidden';
		}
	}
	

let raiting = document.querySelectorAll('.raiting');
let raitingStars = document.querySelectorAll('.star-raiting');
	for (let i = 0; i < raiting.length; i++) {
		raiting[i].onclick = function (e) {
			let targer = e.target;
			if (targer.classList[1] == 'n1') {
				targer.innerHTML = '&#9733';
				targer.style.color = '#d58e32';
			}
			else if (targer.classList[1] == 'n2') {
				raiting[i].children[1].innerHTML = '&#9733';
				raiting[i].children[1].style.color = '#d58e32';
				raiting[i].children[0].innerHTML = '&#9733';
				raiting[i].children[0].style.color = '#d58e32';
			}
			else if (targer.classList[1] == 'n3') {
				raiting[i].children[2].innerHTML = '&#9733';
				raiting[i].children[2].style.color = '#d58e32';
				raiting[i].children[1].innerHTML = '&#9733';
				raiting[i].children[1].style.color = '#d58e32';
				raiting[i].children[0].innerHTML = '&#9733';
				raiting[i].children[0].style.color = '#d58e32';
			}
			else if (targer.classList[1] == 'n4') {
				raiting[i].children[3].innerHTML = '&#9733';
				raiting[i].children[3].style.color = '#d58e32';
				raiting[i].children[2].innerHTML = '&#9733';
				raiting[i].children[2].style.color = '#d58e32';
				raiting[i].children[1].innerHTML = '&#9733';
				raiting[i].children[1].style.color = '#d58e32';
				raiting[i].children[0].innerHTML = '&#9733';
				raiting[i].children[0].style.color = '#d58e32';
			}
			else if (targer.classList[1] == 'n5') {
				raiting[i].children[4].innerHTML = '&#9733';
				raiting[i].children[4].style.color = '#d58e32';
				raiting[i].children[3].innerHTML = '&#9733';
				raiting[i].children[3].style.color = '#d58e32';
				raiting[i].children[2].innerHTML = '&#9733';
				raiting[i].children[2].style.color = '#d58e32';
				raiting[i].children[1].innerHTML = '&#9733';
				raiting[i].children[1].style.color = '#d58e32';
				raiting[i].children[0].innerHTML = '&#9733';
				raiting[i].children[0].style.color = '#d58e32';
			}
		}
	}
	for (let i = 0; i < raitingStars.length; i++) {
			raitingStars[i].onmouseenter = function (e) {
				let targer = e.target;
				if (targer.classList[1] == 'n1') {
					targer.style.color = '#d58e32';
				}
				else if (targer.classList[1] == 'n2') {
					targer.style.color = '#d58e32';
					targer.parentElement.children[0].style.color = '#d58e32';
				}
				else if (targer.classList[1] == 'n3') {
					targer.style.color = '#d58e32';
					targer.parentElement.children[1].style.color = '#d58e32';
					targer.parentElement.children[0].style.color = '#d58e32';
				}
				else if (targer.classList[1] == 'n4') {
					targer.style.color = '#d58e32';
					targer.parentElement.children[2].style.color = '#d58e32';
					targer.parentElement.children[1].style.color = '#d58e32';
					targer.parentElement.children[0].style.color = '#d58e32';
				}
				else if (targer.classList[1] == 'n5') {
					targer.style.color = '#d58e32';
					targer.parentElement.children[3].style.color = '#d58e32';
					targer.parentElement.children[2].style.color = '#d58e32';
					targer.parentElement.children[1].style.color = '#d58e32';
					targer.parentElement.children[0].style.color = '#d58e32';
				}
			}
		}
	for (let i = 0; i < raitingStars.length; i++) {
		raitingStars[i].onmouseleave = function (e) {
			let targer = e.target;
			if (targer.classList[1] == 'n1') {
				if (targer.innerHTML == '\u2606') {
					targer.style.color = 'black';
				}
			}
			else if (targer.classList[1] == 'n2') {
				if (targer.innerHTML == '\u2606') {
					targer.style.color = 'black';
					if (targer.parentElement.children[0].innerHTML == '\u2606') {
						targer.parentElement.children[0].style.color = 'black';
					}
				}
			}
			else if (targer.classList[1] == 'n3') {
				if (targer.innerHTML == '\u2606') {
					targer.style.color = 'black';
					if (targer.parentElement.children[1].innerHTML == '\u2606') {
						targer.parentElement.children[1].style.color = 'black';
					}
					if (targer.parentElement.children[0].innerHTML == '\u2606') {
						targer.parentElement.children[0].style.color = 'black';
					}
				}
			}
			else if (targer.classList[1] == 'n4') {
				if (targer.innerHTML == '\u2606') {
					targer.style.color = 'black';
					if (targer.parentElement.children[2].innerHTML == '\u2606') {
						targer.parentElement.children[2].style.color = 'black';
					}
					if (targer.parentElement.children[1].innerHTML == '\u2606') {
						targer.parentElement.children[1].style.color = 'black';
					}
					if (targer.parentElement.children[0].innerHTML == '\u2606') {
						targer.parentElement.children[0].style.color = 'black';
					}
				}
			}
			else if (targer.classList[1] == 'n5') {
				if (targer.innerHTML == '\u2606') {
					targer.style.color = 'black';
					if (targer.parentElement.children[3].innerHTML == '\u2606') {
						targer.parentElement.children[3].style.color = 'black';
					}
					if (targer.parentElement.children[2].innerHTML == '\u2606') {
						targer.parentElement.children[2].style.color = 'black';
					}
					if (targer.parentElement.children[1].innerHTML == '\u2606') {
						targer.parentElement.children[1].style.color = 'black';
					}
					if (targer.parentElement.children[0].innerHTML == '\u2606') {
						targer.parentElement.children[0].style.color = 'black';
					}
				}
			}
		}
	}

let imgOptions = document.querySelectorAll('.img-option');
let hiddenMenu = document.querySelector('.hidden-menu');
	for (let i = 0; i < imgOptions.length; i++) {
	  imgOptions[i].onmouseenter = function () {
	    hiddenMenu.children[i].style.visibility = 'visible';
	  }
	}
	for (let i = 0; i < imgOptions.length; i++) {
	  imgOptions[i].onmouseleave = function () {
	    hiddenMenu.children[i].style.visibility = 'hidden';
	  }
	}

let sliderImg = document.querySelectorAll('.slider-img');
let img = document.querySelector('.img');
	for (let i = 0; i < sliderImg.length; i++) {
		sliderImg[i].onclick = function () {
			var url = 'url' + "('" + sliderImg[i].children[0].attributes[0].nodeValue + "')";
			img.style.backgroundImage = url;
			for (let l =0; l < sliderImg.length; l++) {
				sliderImg[l].style.margin = '12px 0 ';
			}
			sliderImg[i].style.margin = '8px 0 16px 0';
		}
	}


let button = document.querySelectorAll('.button')
	button[0].onclick = function () {
		for (let i = 0; i < sliderImg.length; i++) {
			if (getComputedStyle(sliderImg[i]).marginTop == '8px') {
				if (i==0) {
					break;
				}
				else if (i>0) {
					sliderImg[i].style.margin = '12px 0';
					sliderImg[i-1].style.margin = '8px 0 16px 0';
					var url = 'url' + "('" + sliderImg[i-1].children[0].attributes[0].nodeValue + "')";
					img.style.backgroundImage = url;
					if ((i>2) && (i<=sliderImg.length-3)) {
						sliderImg[i-3].style.display = 'block';
						sliderImg[i+2].style.display = 'none';
					}
				}
			}
		}
	}
	button[1].onclick = function () {
		for (let i = 0; i < sliderImg.length; i++) {
			if (getComputedStyle(sliderImg[i]).marginTop == '8px') {
				if ((i>=0) && (i!=sliderImg.length-1)) {
					sliderImg[i].style.margin = '12px 0';
					sliderImg[i+1].style.margin = '8px 0 16px 0';
					var url = 'url' + "('" + sliderImg[i+1].children[0].attributes[0].nodeValue + "')";
					img.style.backgroundImage = url;
					if ((i>1) && (i<sliderImg.length-3)) {
						sliderImg[i-2].style.display = 'none';
						sliderImg[i+3].style.display = 'block';
					}
					break;
				}
				else if (i==sliderImg.length-1) {
					break;
				}
			}
		}
	}