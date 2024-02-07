var input = document.getElementById("screen");

function inputKeys(key){
    input.value += key;
}

document.getElementById("clear").addEventListener('click', function (){
    input.value = '';
});

document.getElementById("equals").addEventListener('click', function(){
    input.value = eval(input.value);
});


