const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: Qual é o nome completo do personagem principal de Breaking Bad?",
        alternativas: [
            {
                texto: "Walter White",
                afirmacao: "afirmação"
            },
            {
                texto: "Gustavo Fring",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é a doença terminal que Walter White é diagnosticado no início da série?",
        alternativas: [
            {
                texto: "Câncer de estomago",
                afirmacao: "afirmação"
            },
            {
                texto: "Câncer de pulmão",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é o apelido criador por Walter White para manter sua identidade escondida?",
        alternativas: [
            {
                texto: "Mr.cook",
                afirmacao: "afirmação"
            },
            {
                texto: "Heisenberg",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é o nome do advogado criminal que se torna conhecido por seu bordão "Better Call Saul"?",
        alternativas: [
            {
                texto: "Jimmy McGill.",
                afirmacao: "afirmação"
            },
            {
                texto: "Saul Goodman",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual o nome do spin-off de Breaking Bad? ",
        alternativas: [
            {
                texto: "El Camino",
                afirmacao: "afirmação"
            },
            {
                texto: "Better Call Saul",
                afirmacao: "afirmação"
            }
        ]
    },
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
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
