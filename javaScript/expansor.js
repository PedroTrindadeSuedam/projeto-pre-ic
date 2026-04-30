// var botao1 = document.querySelector(".botao")
// var botao2 = document.querySelector(".botao2")
// botao2.addEventListener('click', () =>{
//     botao1.innerText = "O texto foi alterado!";
// })

const historico = [];

const arvore = {
  inicio: {
    pergunta: "Há indicação de expansão maxilar?",
    respostas: [
      { texto: "Sim", proximo: "deficiencia" },
      { texto: "Não", proximo: "parar" }
    ]
  },

  parar: {
    pergunta: "CONCLUSÃO: Não use expansor",
    respostas: []
  },

  deficiencia: {
    pergunta: "A deficiência transversa é dentoalveolar ou esquelética?",
    respostas: [
      { texto: "Esquelética", proximo: "protracao" },
      { texto: "Dentoalveolar", proximo: "resposta1" }
    ]
  },


  resposta1: {
    pergunta: "CONCLUSÃO: Expansão lenta da maxila",
    respostas: []
  },
  
  protracao: {
    pergunta : "Irá realizar protração maxilar?",
    respostas : [
        { texto: "Sim", proximo: "idade1" },
        { texto: "Não", proximo: "idade2" }
    ]
  },

  idade1:{
    pergunta: "Qual a idade do paciente?",
    respostas: [
        { texto: "Menos de 10 anos", proximo: "resposta2" },
        { texto: "entre 10 e 14 anos", proximo: "resposta3" }
    ]
  },

  resposta2: {
    pergunta: "CONCLUSÃO: Haas, Hyrax, borboleta ou diferencial ",
    respostas: []
  },

  resposta3: {
    pergunta: "CONCLUSÃO: hyrax hibrido ou marpe ",
    respostas: []
  },

  idade2: {
    pergunta: "Qual a idade do paciente?",
    respostas: [
        { texto: "Menos de 14 anos", proximo: "suporte_dentario" },
        { texto: "entre 14 e 16 anos", proximo: "suporte_dentario" },
        { texto: "Maior de 16 anos", proximo: "resposta4" },
    ]
  },

  resposta4: {
    pergunta: "CONCLUSÃO: MARPE",
    respostas: []
  },

  suporte_dentario: {
    pergunta: "O suporte dentário é adequado?",
    respostas: [
        { texto: "Sim", proximo: "mordida_cruzada" },
        { texto: "Não", proximo: "resposta5" }
    ]
  },

  resposta5: {
    pergunta: "CONCLUSÃO: Hyrax Híbrido",
    respostas: []
  },

  mordida_cruzada:{
    pergunta: "Há mordida cruzada posterior?",
    respostas:[
        { texto: "Sim", proximo: "atresia1" },
        { texto: "Não", proximo: "atresia2" }
    ]
  },

  atresia2: {
    pergunta: "Há mais atresia anterior do que posterior?",
    respostas: [
        { texto: "Sim", proximo: "resposta6" },
        { texto: "Não", proximo: "resposta7" }
    ]
  },

  resposta6:{
    pergunta: "CONCLUSÃO: borboleta",
    respostas:[]
  },

  resposta7:{
    pergunta: "CONCLUSÃO: convencional",
    respostas:[]
  },

  atresia1:{
    pergunta: "Há diferença entre atresia posterior e anterior?",
    respostas: [
        { texto: "Sim", proximo: "atresia3" },
        { texto: "Não", proximo: "resposta8" }
    ]
  },

  resposta8: {
    pergunta: "CONCLUSÃO: Haas / Hyrax / outros convencionais",
    respostas: []
  },

  atresia3:{
    pergunta: "Há mais atresia anterior do que posterior?",
    respostas: [
        { texto: "Sim", proximo: "resposta9" },
        { texto: "Não", proximo: "resposta10" }
    ]
  },

  resposta9: {
    pergunta: "CONCLUSÃO: Diferencial",
    respostas: []
  },

  resposta10: {
    pergunta: "CONCLUSÃO: convencional",
    respostas: []
  }
};

function mostrarPergunta(id) {
    const etapa = arvore[id];

    document.querySelector(".pergunta").textContent = etapa.pergunta;

    const divBotoes = document.querySelector(".respostas");
    divBotoes.innerHTML = "";

    etapa.respostas.forEach(resposta => {
        const botao = document.createElement("button");
        botao.textContent = resposta.texto;

        botao.onclick = function() {
            historico.push(id);
            mostrarPergunta(resposta.proximo);
        };

        divBotoes.appendChild(botao);
    });

    if (historico.length > 0) {
        const voltar = document.createElement("button");
        voltar.textContent = "Voltar";
        voltar.classList.add("voltar")

        voltar.onclick = function () {
            const anterior = historico.pop();
            mostrarPergunta(anterior);
        };

        divBotoes.appendChild(voltar);
    }
}

mostrarPergunta("inicio");