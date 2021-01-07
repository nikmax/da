window.oncontextmenu = function (){return false;} // sperre rechte maustaste
let pictures = ["10.jpg","11.jpg","12.jpg","13.webp","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","1.jpg","20.jpg","21.webp","22.webp","23.webp","24.jpg","24.webp","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","2.jpg","30.jpg","31.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","7.webp","8.webp","9.webp"];
let cur = 0;
function showPicture(picture){
	let node = document.getElementById('picture');
	node.firstChild.setAttribute('src','pictures/'+pictures[picture]);
}
function startPicture(picture){
	showPicture(picture);
	document.getElementById('picture').classList.remove('hidden');
	
	document.getElementById('message').classList.remove('hidden');  // zeige Bedienung
}

function nextPicture(event){
	let node = document.getElementById('picture');
	//console.log(event.button);
	if(event.button == 0) {
		if(++cur >= pictures.length) cur = 0;
	}
	else if (event.button == 2){
		if(--cur < 0) cur = pictures.length-1;
	}
	else {
		hiddenDiv(node);
		return;
	}
	showPicture(cur);
}
function hiddenDiv(div){
	div.classList.add('hidden');
	return;
}
function showGalerie(){
	let div = document.getElementById('galerie');
	for (let i = 0; i < pictures.length; i++){
		let img = document.createElement('img');
		img.setAttribute('src','pictures/'+pictures[i]);
		div.appendChild(img);
		img.classList.add('picture');
		img.addEventListener('click', function(){startPicture(i);});
	}
}