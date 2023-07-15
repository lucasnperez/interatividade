//let div = document.getElementById("titulo");

//div.classList.add("verde");

let btn = document.getElementById("botao");
btn.addEventListener('click', function trocar(){
    let div = document.getElementById("titulo");
    div.classList.toggle("verde");
})