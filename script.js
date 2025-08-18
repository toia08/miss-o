const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Qual é o objetivo principal de um lutador de boxe durante uma luta?",
        alternativas:[
            {
                texto:"Derrubar ou pontuar mais que o adversário",
                afirmação:"resposta correta",
                pontos:1
            },
            {
                texto:"Impedir o adversário de se mover com chutes",
                afirmação:"resposta errada",
                pontos:0
            }
        ]
    },
     {
        enunciado:"Qual é o nome do espaço onde ocorrem as lutas de boxe?",
        alternativas:[
            {
                texto:"Ringue",
                afirmação:"resposta correta",
                pontos:1
            },
            {
                texto:"Tatame",
                afirmação:"resposta errada",
                pontos:0
            }
        ]
    },
      {
        enunciado:"Quantos rounds geralmente tem uma luta profissional de boxe?",
        alternativas:[
            {
                texto:"12 rounds",
                afirmação:"resposta correta",
                pontos:1
            },
            {
                texto:"5 rounds",
                afirmação:"resposta errada",
                pontos:0
            }
        ]
    },
     {
        enunciado:" Qual parte do corpo é usada para atacar no boxe?",
        alternativas:[
            {
                texto:"Os punhos",
                afirmação:"resposta correta",
                pontos:1
            },
            {
                texto:"Os pés",
                afirmação:"resposta errada",
                pontos:0
            }
        ]
    },
     {
        enunciado:"Qual destes equipamentos é obrigatório no boxe?",
        alternativas:[
            {
                texto:"Luvas de boxe",
                afirmação:"resposta correta",
                pontos:1
            },
            {
                texto:"Espada",
                afirmação:"resposta errada",
                pontos:0
            }
        ]
    },
]

let atual = 0; 
let perguntaAtual; 
let historiaFinal = ""; 
let pontos = 0;  

function mostraPergunta(){ 
    perguntaAtual = perguntas[atual]; 
    caixaPerguntas.textContent = perguntaAtual.enunciado; 
    caixaAlternativas.textContent = ""; 
    mostraAlternativas(); 
}

function mostraAlternativas(){ 
    for(const alternativa of perguntaAtual.alternativas){ 
        const botaoAlternativas = document.createElement("button"); 
        botaoAlternativas.textContent = alternativa.texto; 
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); 
        caixaAlternativas.appendChild(botaoAlternativas); 
    }
}

function respostaSelecionada(alternativa) { 
    const afirmacao = alternativa.afirmacao; 
    historiaFinal = afirmacao; 
    pontos += alternativa.pontos;  
    atual++; 

    if (atual < perguntas.length) { 
        mostraPergunta();  
    } else {
        exibeResultado();  
    }
}

function exibeResultado() { 
    caixaPerguntas.textContent = "Fim do Quiz!"; 
    caixaAlternativas.textContent = "";  
    textoResultado.textContent = `Sua pontuação final é: ${pontos} pontos.`; 

    if (pontos === perguntas.length) { 
        textoResultado.textContent += " Parabéns! Você acertou todas as questões!"; 
    } else if (pontos > perguntas.length / 2) { 
        textoResultado.textContent += " Bom trabalho, você teve um desempenho legal!"; 
    } else { 
        textoResultado.textContent += " Você pode melhorar! Tente novamente!"; 
    }
}

mostraPergunta();