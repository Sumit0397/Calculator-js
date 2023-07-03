

function clearResult(){
    document.getElementById('result').value = "";
}

function deleteLast(){
    let val = document.getElementById('result').value;
    document.getElementById('result').value = val.slice(0 , -1);
}

function calculateResult(){
    let val = document.getElementById('result').value;
    document.getElementById('result').value = eval(val);
}

function appendToResult(val){
    document.getElementById('result').value += val;
}

