// https://www.youtube.com/watch?v=In0nB0ABaUk
// const email = document.getElementbyId('email')
// const form = document.getElementbyId('form')
// const errorElement = document.getElementbyId('error')

// form.addEventListener('submit', e => {
// 	var dotcomemail = \S+@\S+\.+com;
// 	var ucsbemail = \S+@+ucsb+\.+edu;

// 	if(dotcomemail.test(email) || ucsbemail.test(email)) {
// 		document.getElementbyId("content").innerHTML = "Hello";
// 	}
// })

function verifyEmail() {
	var email = document.getElementById("email").value;
	var message = "Invalid email address"
	var ucsb = /\S+@\S+\b.com\b/;
	var com = /\S+@+\bucsb.edu\b/;

	document
		.getElementById("error")
		.innerHTML = message;

		if(ucsb.test(email) || com.test(email)) {
			document.getElementById("error").innerHTML = "Email succesfully recorded";
		}
};