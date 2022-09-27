console.log("hello world");

const mousePic = () => {
	alert('You are amazing')
}

function handleSubmit(evt) {
	evt.preventDefault();

	console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
document.getElementById("img").addEventListener("mouseover", mousePic)