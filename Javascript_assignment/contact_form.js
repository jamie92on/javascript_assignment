var btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
	e.preventDefault()
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var mobile = document.getElementById('mobile').value;
	var message = document.getElementById('message').value;
	var body = 'name: ' +name + '<br/> email: ' + email + '<br/> mobile' + mobile + '<br/> message' + message;
	Email.send({
			Host : "smtp.gmail.com",
			Username : "jamieon1992@gmail.com",
			Password : "tevthvnunhyxlhhj",
			To : 'jamieon1992@gmail.com',
			From : email,
			Subject : mobile,
			Body : body
		}).then(
		  message => alert(message)
		);
	})