const botao1 = document.querySelector(".bnt1");
const botao2 = document.querySelector(".bnt2");
const botao3 = document.querySelector(".bnt3");
const botao4 = document.querySelector(".bnt4");

const texto = document.querySelector(".text");

var text1 = "como funciona"
var text2 = "indicações"
var text3 = "cuidados"
var text4 = "perguntas"

botao1.addEventListener("click", () => {
    texto.textContent = text1
})

botao2.addEventListener("click", () => {
    texto.textContent = text2
})

botao3.addEventListener("click", () => {
    texto.textContent = text3
})

botao4.addEventListener("click", () => {
    texto.textContent = text4
})

if (texto.textContent === "como funciona") {
  botao1.classList.add("link-verde");
}

