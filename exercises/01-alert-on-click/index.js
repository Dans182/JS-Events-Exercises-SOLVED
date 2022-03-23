window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

document.getElementById("button2").addEventListener("click", function(){ 
	alert("Don't click here!");
});