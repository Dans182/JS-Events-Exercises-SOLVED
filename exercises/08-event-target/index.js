window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		const item = event.target.nodeName;
		alert(item);
	});
};
// document.addEventListener("click", function(e) {
//     const item = e.target.parentElement;
//     ul.removeChild(item);
// });

