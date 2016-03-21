'use strict';

var number = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '/'];

for(var i = 0; i < number.length; i++) {
    number[i].onclick = function(e) {
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;

        if(btnVal == 'C') {
            input.innerHTML = '';
        }
        else if(btnVal == '=') {
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];

            equation = equation.replace(/x/g, '*');

            if(equation)
                input.innerHTML = eval(equation);
        }

        else if(operators.indexOf(btnVal) > -1) {
            var lastChar = inputVal[inputVal.length - 1];

            if(inputVal != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += btnVal;
            else if(inputVal == '' && btnVal == '-')
                input.innerHTML += btnVal;
        }

        else {
            input.innerHTML += btnVal;
        }
    }
}