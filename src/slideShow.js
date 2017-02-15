var image=1;
var imageClass = document.getElementsByClassName("slideImg");
disappearImages();
plusImages(1);

function plusImages(number){
	image += number;
	if(image< 0) {
		image=imageClass.length -1;
	} else if(image>=imageClass.length){
		image=0;
	}
	appearImages(image);
}

function appearImages(number) {
	disappearImages();
	image=number;
	imageClass[number].style.display = "block";

}

function disappearImages() {
	for (var i = 0; i < imageClass.length; i++) {
		imageClass[i].style.display = "none";
	}
}