console.log("Calculator initialized!");

window.onload = function () {

	var prevOperand = null;
    var currentOperand = "0";
	var operator;

	document.getElementById("calcClear").addEventListener("click", clearClicked);
	document.getElementById("calcReturn").addEventListener("click", equalsClicked);

	var numbers = document.getElementsByClassName("input");
	for (var i = 0;i<numbers.length;i++){
		numbers[i].addEventListener("click", inputClicked);
	}

	var numbers = document.getElementsByClassName("operator");
	for (var i = 0;i<numbers.length;i++){
		numbers[i].addEventListener("click", operatorClicked);
	}

	function clearClicked() {
        prevOperand = null;
        currentOperand = "0";
        operator = null;
		updateCalcDisplay();
	}

	function inputClicked() {
        
        if (currentOperand.indexOf(".") >= 0 && this.innerHTML === ".") {
            return;
        } else {
            if (currentOperand.length>12) {
                return;
            }
            if (currentOperand === "0"){
                currentOperand = this.innerHTML;
            } else {
                currentOperand += this.innerHTML;
            }
            updateCalcDisplay();
        }
  
	}

    function updateCalcDisplay() {
        document.getElementById("calcDisplay").innerHTML = currentOperand;
    }

	function operatorClicked() {
        
        if (prevOperand === null) {
            prevOperand = currentOperand;
            operator = this.innerHTML;
            currentOperand = "0";
        } else {
            performOperation();
            operator = this.innerHTML;
        }    
           
	}

    function equalsClicked() {
        performOperation();   
    }

	function performOperation() {
        
        var operand1 = parseFloat(prevOperand);
        var operand2 = parseFloat(currentOperand);
        
        if (operator === "+") {
            prevOperand = operand1 + operand2;
        } else if (operator === "-") {
            prevOperand = operand1 - operand2;
        } else if (operator === "/") {
            prevOperand = operand1 / operand2;
        } else if (operator === "*") {
            prevOperand = operand1 * operand2;
        }

        prevOperand = prevOperand.toString();

		document.getElementById("calcDisplay").innerHTML = prevOperand;
        currentOperand = "0";

	}

};


