console.log("Calculator initialized!");

window.onload = function () {
	document.getElementById("calcClear").addEventListener("click", clearDisplay);

	var numbers = document.getElementsByClassName("number");
	for (var i = 0;i<numbers.length;i++){
		numbers[i].addEventListener("click", displayNumber);
	}

	function clearDisplay() {
		document.getElementById("calcDisplay").innerHTML = "";
	}

	function displayNumber() {
		var value = this.innerHTML;
		var currentDisplay = document.getElementById("calcDisplay").innerHTML;
		console.log(currentDisplay);
	}

};