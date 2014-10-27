console.log("Calculator initialized!");

window.onload = function () {

	var buttonPress;
	var equation;
	var values = [];
	var operands = [];

	displayValOps();

	document.getElementById("calcClear").addEventListener("click", clearDisplay);
	document.getElementById("calcReturn").addEventListener("click", returnOperation);

	var numbers = document.getElementsByClassName("number");
	for (var i = 0;i<numbers.length;i++){
		numbers[i].addEventListener("click", displayNumber);
	}

	var numbers = document.getElementsByClassName("operation");
	for (var i = 0;i<numbers.length;i++){
		numbers[i].addEventListener("click", setOperand);
	}

	function displayValOps() {
		console.log("Values: "+values);
		console.log("Operands: "+operands);
	}

	function clearDisplay() {
		document.getElementById("calcDisplay").innerHTML = "";
		equation = "";

		displayValOps();
	}

	function displayNumber() {

		buttonPress = parseInt(this.innerHTML);

		if (equation == undefined) {
			equation = 0 + buttonPress;
		} else {
			equation = (equation * 10)+buttonPress;
		}

		if(operands.length == 0) {
			values[0]=equation;
		} else {
			values[operands.length]=equation;
		}

		console.log(buttonPress + " is a " + typeof buttonPress);

		document.getElementById("calcDisplay").innerHTML = equation;

		displayValOps();
	}

	function setOperand() {
		currentOperand = this.innerHTML;
		operand = currentOperand;

		if(values.length > 0) {
			operands[values.length-1] = operand;
		}

		equation = "";

		displayValOps();
	}

	function returnOperation() { //  -456+123
		equation = values.shift(); // 789

		for (var i = operands.length; i > 0;i--) { // 2, 1
			currentOperand = operands.shift(); // -, +
			console.log(currentOperand);
			if (currentOperand == "+") {
				equation += values.shift(); // (789-456) + 123
			} else if (currentOperand == "-") {
				equation -= values.shift(); // 789-456
			} else if (currentOperand == "/") {
				equation /= values.shift(); // 789-456
			} else if (currentOperand == "*") {
				equation *= values.shift(); // 789-456
			}
		}


		/*
		while (values.length>0) {
			equation += values.shift();
			displayValOps();
			equation += operands.shift();
		}*/

		document.getElementById("calcDisplay").innerHTML = equation;
		values[0] = equation;

	}

};