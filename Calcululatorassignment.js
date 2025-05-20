function displayNumber(abel){
    console.log(abel)
    document.getElementById('firstValue').value+= abel
}



function solveCalculation(){
    let value = 
    document.getElementById('firstValue').value

    let evaluateValue =eval(value)

    document.getElementById('firstValue').value= evaluateValue
  console.log(evaluateValue)
}


function resetButton(){
    document.getElementById("firstValue").value ='';
    document.getElementById("answer").innerHTML ='';
}


function deleteLast(){
     firstValue.value = firstValue.value.slice(0, -1);

   }