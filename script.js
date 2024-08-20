const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o nome completo do personagem principal de Breaking Bad?",
        alternativas: [
            {
                texto: "Walter White",
                correta: true
            },
            {
                texto: "Gustavo Fring",
                correta: false
            }
        ]
    },
    {
        enunciado: "Qual é a doença terminal que Walter White é diagnosticado no início da série?",
        alternativas: [
            {
                texto: "Câncer de estômago",
                correta: false
            },
            {
                texto: "Câncer de pulmão",
                correta: true
            }
        ]
    },
    {
        enunciado: "Qual é o apelido criado por Walter White para manter sua identidade escondida?",
        alternativas: [
            {
                texto: "Mr. Cook",
                correta: false
            },
            {
                texto: "Heisenberg",
                correta: true
            }
        ]
    },
    {
        enunciado: 'Qual é o nome do advogado criminal que se torna conhecido por seu bordão "Better Call Saul"?',
        alternativas: [
            {
                texto: "Jimmy McGill",
                correta: false
            },
            {
                texto: "Saul Goodman",
                correta: true
            }
        ]
    },
    {
        enunciado: "Qual o nome do spin-off de Breaking Bad?",
        alternativas: [
            {
                texto: "El Camino",
                correta: false
            },
            {
                texto: "Better Call Saul",
                correta: true
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    if (opcaoSelecionada.correta) {
        historiaFinal += "Resposta correta! ";
    } else {
        historiaFinal += "Resposta incorreta. ";
    }
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim do Quiz!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
