
function validateCredentials(){
	var userName = $('#userName').val();
	var password = $('#password').val();
	var loggedUser = { 'username': userName};
	if(userName == 'krishna' || userName == 'hari' || userName == 'naveen'){
		localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
		console.log(window.location.href);
		var url = window.location.href;
		window.location.href = window.location.href.substr(0, url.lastIndexOf("\\"))+"index.html" ;
	}
	else{
		alert('invalid credentials');
	}
}