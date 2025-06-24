// Lista inicial de pontos
const pontos = [
    {
        id: "pontoA1",
        nome: "Ponto A1",
        capacidade: 20,
        ocupadas: 18,
        local: "Entrada, lado direito, em direção ao ponto de ônibus",
        detalhes: "Coberto, com vigilância e iluminação"
    },
    {
        id: "pontoA2",
        nome: "Ponto A2",
        capacidade: 6,
        ocupadas: 6,
        local: "Entrada, lado esquerdo, em direção ao estacionamento",
        detalhes: "Ao ar livre, sem iluminação e sem vigilância"
    },
    {
        id: "pontoB1",
        nome: "Ponto B1",
        capacidade: 6,
        ocupadas: 4,
        local: "Entre o Bloco 1 e o Bloco de Automação Industrial",
        detalhes: "Ao ar livre, com vigilância e com iluminação"
    },
    {
        id: "pontoC1",
        nome: "Ponto C1",
        capacidade: 8,
        ocupadas: 3,
        local: "Atrás do Bloco da T.I",
        detalhes: "Ao ar livre, sem vigilância e com iluminação"
    }
];

// Função para atualizar visual
function atualizarPonto(ponto) {
    const div = document.getElementById(ponto.id);
    const status = div.querySelectorAll("p");
    status[1].textContent = `Vagas: ${ponto.ocupadas}/${ponto.capacidade}`;

    // Define a classe conforme a ocupação
    const ocupacao = ponto.ocupadas / ponto.capacidade;
    div.classList.remove("disponivel", "quase-cheio", "lotado");
    if (ocupacao === 1) {
        div.classList.add("lotado");
    } else if (ocupacao >= 0.5) {
        div.classList.add("quase-cheio");
    } else {
        div.classList.add("disponivel");
    }
}

// Adiciona botões e eventos
function montarInterface() {
    pontos.forEach(ponto => {
        const div = document.getElementById(ponto.id);

        // Botões
        const btnAdd = document.createElement("button");
        btnAdd.textContent = "+";
        btnAdd.onclick = () => {
            if (ponto.ocupadas < ponto.capacidade) {
                ponto.ocupadas++;
                atualizarPonto(ponto);
            }
        };

        const btnSub = document.createElement("button");
        btnSub.textContent = "-";
        btnSub.onclick = () => {
            if (ponto.ocupadas > 0) {
                ponto.ocupadas--;
                atualizarPonto(ponto);
            }
        };


        div.appendChild(btnAdd);
        div.appendChild(btnSub);

        atualizarPonto(ponto);
    });
}

// Inicializa a interface quando o DOM estiver pronto
window.onload = montarInterface;