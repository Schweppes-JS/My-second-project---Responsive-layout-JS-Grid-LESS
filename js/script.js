let sliderImage = document.querySelectorAll('.slider-img');
let img = document.getElementById('img');
console.log(img.style);

// Insert preview image on main block
function changingImage(e) {
	const url = e.target.attributes.src.nodeValue;
	img.style.backgroundImage = `url("${url}")`;
}

// Add event listener to all preview image
sliderImage.forEach(element => {
	element.addEventListener('click', changingImage);
});




// for (let i = 0; i < sliderImg.length; i++) {
// 	sliderImg[i].onclick = function () {
// 		var url = 'url' + "('" + sliderImg[i].children[0].attributes[0].nodeValue + "')";
// 		img.style.backgroundImage = url;
// 		for (let l =0; l < sliderImg.length; l++) {
// 			sliderImg[l].style.margin = '12px 0 ';
// 		}
// 		sliderImg[i].style.margin = '8px 0 16px 0';
// 	}
// }

// let button = document.querySelectorAll('.button')
// button[0].onclick = function () {
// 	for (let i = 0; i < sliderImg.length; i++) {
// 		if (getComputedStyle(sliderImg[i]).marginTop == '8px') {
// 			if (i==0) {
// 				break;
// 			}
// 			else if (i>0) {
// 				sliderImg[i].style.margin = '12px 0';
// 				sliderImg[i-1].style.margin = '8px 0 16px 0';
// 				var url = 'url' + "('" + sliderImg[i-1].children[0].attributes[0].nodeValue + "')";
// 				img.style.backgroundImage = url;
// 				if ((i>2) && (i<=sliderImg.length-3)) {
// 					sliderImg[i-3].style.display = 'block';
// 					sliderImg[i+2].style.display = 'none';
// 				}
// 			}
// 		}
// 	}
// }
// button[1].onclick = function () {
// 	for (let i = 0; i < sliderImg.length; i++) {
// 		if (getComputedStyle(sliderImg[i]).marginTop == '8px') {
// 			if ((i>=0) && (i!=sliderImg.length-1)) {
// 				sliderImg[i].style.margin = '12px 0';
// 				sliderImg[i+1].style.margin = '8px 0 16px 0';
// 				var url = 'url' + "('" + sliderImg[i+1].children[0].attributes[0].nodeValue + "')";
// 				img.style.backgroundImage = url;
// 				if ((i>1) && (i<sliderImg.length-3)) {
// 					sliderImg[i-2].style.display = 'none';
// 					sliderImg[i+3].style.display = 'block';
// 				}
// 				break;
// 			}
// 			else if (i==sliderImg.length-1) {
// 				break;
// 			}
// 		}
// 	}
// }