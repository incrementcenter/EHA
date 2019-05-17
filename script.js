let dot = document.querySelector(".dot");
let img = document.querySelectorAll(".images");// img = [images, images, images]
function slide(){
	
function clone() {
    for(let i = 1; i < img.length; i++){
        document.querySelector(".dots").appendChild(dot.cloneNode(true))
    }
}
clone();

let style = getComputedStyle(document.querySelector(".img_slider"))
let imgwidth = style.width;
let dotall = document.querySelectorAll(".dot"); // dotall = [dot, dot, dot]
let container = document.querySelector(".img-container")
function width(){
	for(let i = 0; i<img.length; i++){
		img[i].style.width = imgwidth
	}
}
width();

	dotall.forEach(function (divs, index){
		divs.onclick = function (){
			container.style.transform = "translateX(" + -index * parseFloat(imgwidth) + "px)"
			
}
})
}
slide()