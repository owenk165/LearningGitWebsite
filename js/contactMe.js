var nameRegex = /^[a-zA-Z\/ ]{1,50}$/; //Regex for any alphabets,space and / with 1~ 50 characters
var emailRegex = /^[\w_+-]{1,39}@[\w_-]{1,30}\.[a-zA-Z]{2,4}$/;//Regex for any email, 1-39 characters, @ , 1-30 characters, ., 2-4 characters
var titleRegex = /^[\w_+-\.,?! ]{1,255}$/;//Regex for title with basic sentence infrastuctures.
var msgRegex =/'|"/;
var nameValid = emailValid = msgValid = titleValid =false;

function nameValidation(){
	var name = document.getElementsByName("nameBox")[0].value;
	if(name.length == 0)
	{
		document.getElementById("warningName").innerHTML = "Please fill out this field!";
		document.getElementById("nameBox").style.border = "1px solid red";
		disablecontactButton();
		nameValid = false;
	}
	else if(!nameRegex.test(name)){
		document.getElementById("warningName").innerHTML = "Name contains special characters!";
		document.getElementById("nameBox").style.border = "1px solid red";
		disablecontactButton();
		nameValid = false;
	}
	else{
		document.getElementById("warningName").innerHTML = "&nbsp;";
		document.getElementById("nameBox").style.border = "1px solid #716040";
		nameValid = true;
		if( nameValid && emailValid  && msgValid && titleValid )
		{
			enablecontactButton();
		}
	}
}

function emailValidation(){
	var email = document.getElementsByName("emailBox")[0].value;
	if(email.length == 0)
	{
		document.getElementById("warningEmail").innerHTML = "Please fill out this field!";
		document.getElementById("emailBox").style.border = "1px solid red";
		disablecontactButton();
		emailValid = false;
	}
	else if(!emailRegex.test(email)){
		document.getElementById("warningEmail").innerHTML = "Email format is invalid!";
		document.getElementById("emailBox").style.border = "1px solid red";
		disablecontactButton();
		emailValid = false;
	}
	else{
		document.getElementById("warningEmail").innerHTML = "&nbsp;";
		document.getElementById("emailBox").style.border = "1px solid #716040";
		emailValid = true;
		if( nameValid && emailValid  && msgValid && titleValid )
		{
			enablecontactButton();
		}
	}	
}

function titleValidation(){
	var contactNo = document.getElementsByName("titleBox")[0].value;
	if(contactNo.length == 0)
	{
		document.getElementById("warningTitle").innerHTML = "Please fill out this field!";
		document.getElementById("titleBox").style.border = "1px solid red";
		disablecontactButton();
		titleValid = false;
	}
	else if(!titleRegex.test(contactNo)){
		document.getElementById("warningTitle").innerHTML = "Title must not contain special characters";
		document.getElementById("titleBox").style.border = "1px solid red";
		disablecontactButton();
		titleValid = false;	
	}
	else{
		document.getElementById("warningTitle").innerHTML = "&nbsp;";
		document.getElementById("titleBox").style.border = "1px solid #716040";
		titleValid = true;
		if( nameValid && emailValid  && msgValid && titleValid )
		{
			enablecontactButton();
		}
	}	
	
}

function msgValidation(){
	var msg = document.getElementsByName("msgBox")[0].value;
	if(msg.length == 0)
	{
		document.getElementById("warningMsg").innerHTML = "Please fill out this field!";
		document.getElementById("msgBox").style.border = "1px solid red";
		disablecontactButton();
		msgValid = false;
	}
	else if(msgRegex.test(msg)){
		document.getElementById("warningMsg").innerHTML = "Message must not contain apostrophe or double quote";
		document.getElementById("msgBox").style.border = "1px solid red";
		disablecontactButton();
		msgValid = false;	
	}
	else{
		document.getElementById("warningMsg").innerHTML = "&nbsp;";
		document.getElementById("msgBox").style.border = "1px solid #716040";
		msgValid = true;
		if( nameValid && emailValid && msgValid && titleValid )
		{
			enablecontactButton();
		}
	}
	
}

function enablecontactButton(){
	document.getElementById("contact_button").disabled = false;
}

function disablecontactButton(){
	document.getElementById("contact_button").disabled = true;
}