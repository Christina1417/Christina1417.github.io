var scriptURL = 'https://script.google.com/macros/s/AKfycbwI2JIG3hHFNuvKv0NRkNDKe_TC4DY2BiUOwewf/exec';

var pasteForm = function(){
	console.log('Form click');
	var siteVersion = 'M';
	var name = document.getElementById('form-name');
	var contact = document.getElementById('form-contact');
	var more = document.getElementById('form-more');

	var singleLine = siteVersion + " " + name.value + " " + contact.value + " " + more.value;
	var formBody = new FormData();
	formBody.set('version', 'M');
	formBody.set('name', name.value);
	formBody.set('contact', contact.value);
	formBody.set('more', more.value);
	console.log(singleLine);
	fetch(scriptURL, { method: 'POST', body: formBody})
		  .then(response => console.log('Success!', response))
		  .catch(error => console.error('Error!', error.message));
};

var init = function(e){
	var btn = document.getElementById('form-button');
	btn.addEventListener('click', pasteForm);
};

window.addEventListener('load', init);