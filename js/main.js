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
	var us = JSON.parse(JSON.stringify(user));
	users.push(us);
	$('tbody').empty();
	users.forEach(function (user) {
		var tr = '<tr>' +
		'<td>' + user.usuario + '</td>' + 
		'<td>' + user.correo + '</td>' + 
		'<td><input type="button" id="btn" value="eliminar"></input></td>' + 
		'</tr>'
	$('tbody').append(tr);
	});
	$('table').on('click', 'input[type=button]', function (e) {
		$(this).closest('tr').remove();
	})
  });
});