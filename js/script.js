var opn = document.getElementById('popUpButton'),
	cls = document.getElementById('buttonClose'),
	wndw = document.getElementById('popUp');

opn.addEventListener('click', function() {
	wndw.classList.remove('visually-hidden');
});

cls.addEventListener('click', function() {
	wndw.classList.add('visually-hidden');
});