const input=document.getElementById("display");
function del(){
    input.value=input.value.slice(0,-1)
}

function res(){
    input.value = eval(input.value)
}