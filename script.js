
let peso = document.querySelector('#peso');
let size = document.querySelector('#altura');

let result = document.querySelector('#result');
let newResult = 0;

function calcular(){
newResult = peso.value / (size.value * size.value)

resultConteiner.classList.remove("hide");

result.innerHTML = parseFloat(newResult.toFixed(2))
return
}