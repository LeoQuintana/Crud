$(document).ready(function () {
	//window.alert('hola');
	var user = {
		usuario: '',
		correo:'',
	};
	var users = []; 
	$('#form').on('submit', function (e) {
		e.preventDefault();
		user.usuario = $('#user').val();
		user.correo = $('#correo').val();
	var us = JSON. parse(JSON.stringify(user));
	users.push(us);
	console.log(users);
	});

});