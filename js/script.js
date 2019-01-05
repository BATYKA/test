var opn = document.getElementById('popUpButton'),
	cls = document.getElementById('buttonClose'),
	wndw = document.getElementById('popUp'),
	btn1 = document.getElementById('prB1'),
	btn2 = document.getElementById('prB2'),
	btn3 = document.getElementById('prB3'),
	pr1 = document.getElementById('pr1'),
	pr2 = document.getElementById('pr2'),
	pr3 = document.getElementById('pr3');

opn.addEventListener('click', function() {
	wndw.classList.remove('visually-hidden');
});

cls.addEventListener('click', function() {
	wndw.classList.add('visually-hidden');
});

btn1.addEventListener('click', function() {
	btn1.classList.add('presentation-button1-alt');
	pr1.classList.remove('visually-hidden');
	if (btn2.classList.contains('presentation-button2-alt')) {
		btn2.classList.remove('presentation-button2-alt');
	}
	if (btn3.classList.contains('presentation-button3-alt')) {
		btn3.classList.remove('presentation-button3-alt');
	}
	if (pr2.classList.contains('visually-hidden')) {
		pr3.classList.add('visually-hidden');
	}
	if (pr3.classList.contains('visually-hidden')) {
		pr2.classList.add('visually-hidden');
	}
});

btn2.addEventListener('click', function() {
	btn2.classList.add('presentation-button2-alt');
	pr2.classList.remove('visually-hidden');
	if (btn1.classList.contains('presentation-button1-alt')) {
		btn1.classList.remove('presentation-button1-alt');
	}
	if (btn3.classList.contains('presentation-button3-alt')) {
		btn3.classList.remove('presentation-button3-alt');
	}
	if (pr1.classList.contains('visually-hidden')) {
		pr3.classList.add('visually-hidden');
	}
	if (pr3.classList.contains('visually-hidden')) {
		pr1.classList.add('visually-hidden');
	}
});

btn3.addEventListener('click', function() {
	btn3.classList.add('presentation-button3-alt');
	pr3.classList.remove('visually-hidden');
	if (btn1.classList.contains('presentation-button1-alt')) {
		btn1.classList.remove('presentation-button1-alt');
	}
	if (btn2.classList.contains('presentation-button2-alt')) {
		btn2.classList.remove('presentation-button2-alt');
	}
	if (pr2.classList.contains('visually-hidden')) {
		pr1.classList.add('visually-hidden');
	}
	if (pr1.classList.contains('visually-hidden')) {
		pr2.classList.add('visually-hidden');
	}
});