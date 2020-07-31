function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText = num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    //if there is no number then show empty
    if(num==""){
        document.getElementById("output-value").innerText = num;
    }
    //if there is number then show the value which is given printoutput function
    else{
        document.getElementById("output-value").innerText = getFormattedNumber(num);
}
    }
    

//for giving comma between number
function getFormattedNumber(num){
    if(num=="="){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

//to calculate we need to remove the comma for this we have use the reverse function

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

//for enable all operations

var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length;i++){
    operator[i].addEventListener('click', function(){
        //to clear the number
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        
        //for backspace operation
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){ //if output has a value
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        
        //if output is not empty the operator will operate and calculate
        else{
            var output = getOutput();
            var history = getHistory();
            if(output=="" && history!=""){
                if(isNaN(history[history.length-1])){
                    history= history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output= output==""?
                output:reverseNumberFormat(output);
                history = history + output;
                if(this.id=="="){
                    var result =eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

//for enable all numbers

var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
        
        //to show the digit 
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
