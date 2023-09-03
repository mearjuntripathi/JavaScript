function ask(age, yes, no){
	if(age > 18) yes();
	else no();
}

function allow(){
	console.log("You are Welcome");
}

function notallow(){
	console.log("You are not allowed");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask(21,allow,notallow);

ask(
	22,
	function(){console.log("adult")},
	function(){console.log("teen")}
)