function abrirPopupCriarCard(colunaElement, cardsContainer) {
    // Exemplo de implementação de um popup/modal simulado
    const titulo = prompt("Digite o título do novo card:");
    const responsavel = parseInt(prompt("Digite o responsável pelo card (número):"));
    const dataInicio = prompt("Digite a data de início (DD/MM):");

    if (titulo && !isNaN(responsavel) && dataInicio) {
        const novaPosicao = dadosDoQuadro.cards.length;
        const novoCard = {
            posicao: novaPosicao,
            titulo: titulo,
            coluna: parseInt(colunaElement.id.split('-')[1]),
            responsavel: responsavel,
            dataInicio: dataInicio
        };

        dadosDoQuadro.cards.push(novoCard);

        const novoCardElement = criarCards(novoCard);
        cardsContainer.appendChild(novoCardElement);
    } else {
        alert("Preencha todos os campos corretamente.");
    }
}