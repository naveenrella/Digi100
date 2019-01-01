
function validateCredentials(){
	var userName = $('#userName').val();
	var password = $('#password').val();

	if(userName == 'krishna' || userName == 'hari' || userName == 'naveen'){
		console.log(window.location.href);
		var url = window.location.href;
		window.location.href = window.location.href.substr(0, url.lastIndexOf("\\"))+"index.html" ;
	}
	else{
		alert('invalid credentials');
	}
}