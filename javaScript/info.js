const botao1 = document.querySelector(".bnt1");
const botao2 = document.querySelector(".bnt2");
const botao3 = document.querySelector(".bnt3");
const botao4 = document.querySelector(".bnt4");

var texto = document.getElementById("text");

botao1.addEventListener("click", () => {
    texto.textContent = "como funciona"
})

botao2.addEventListener("click", () => {
    texto.textContent = "indicações"
})

botao3.addEventListener("click", () => {
    texto.textContent = "cuidados"
})

botao4.addEventListener("click", () => {
    texto.textContent = "perguntas"
})