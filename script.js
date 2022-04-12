


function calling(num) {
    var numero = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = numero + num
}

function remove() {
    document.getElementById("result").innerHTML = "";
}

function operation() {
    var result = document.getElementById("result").innerHTML;
    if(result) {
        document.getElementById('result').innerHTML = eval(result);
    }
}