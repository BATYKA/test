var opn = document.getElementById('popUpButton'),
	cls = document.getElementById('buttonClose'),
	wndw = document.getElementById('popUp'),
	btn1 = document.getElementById('prB1'),
	btn2 = document.getElementById('prB2'),
	btn3 = document.getElementById('prB3');

opn.addEventListener('click', function() {
	wndw.classList.remove('visually-hidden');
});

cls.addEventListener('click', function() {
	wndw.classList.add('visually-hidden');
});

btn1.addEventListener('click', function() {
	btn1.classList.add('presentation-button1-alt');
	if (btn2.classList.contains('presentation-button2-alt')) {
		btn2.classList.remove('presentation-button2-alt');
	}
	if (btn3.classList.contains('presentation-button3-alt')) {
		btn3.classList.remove('presentation-button3-alt');
	}
});

btn2.addEventListener('click', function() {
	btn2.classList.toggle('presentation-button2-alt');
	if (btn1.classList.contains('presentation-button1-alt')) {
		btn1.classList.remove('presentation-button1-alt');
	}
	if (btn3.classList.contains('presentation-button3-alt')) {
		btn3.classList.remove('presentation-button3-alt');
	}
});

btn3.addEventListener('click', function() {
	btn3.classList.toggle('presentation-button3-alt');
	if (btn1.classList.contains('presentation-button1-alt')) {
		btn1.classList.remove('presentation-button1-alt');
	}
	if (btn2.classList.contains('presentation-button2-alt')) {
		btn2.classList.remove('presentation-button2-alt');
	}
});