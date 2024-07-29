
//ESTRUTURA COLUNAS
    const colunas = dadosDoQuadro.colunas.sort((a, b) => a.posicao - b.posicao);
    const nomeColuna = document.getElementById('nome-coluna');

    // Função para criar a estrutura das colunas padrões do quadro
    function criarColuna(coluna) {
        const colunaElement = document.createElement('div');
        colunaElement.id = `coluna-${coluna.nome}`;
        colunaElement.classList.add('coluna');

        colunaElement.innerHTML = `
        <br>
            <h3>${coluna.nome}</h3>
            <br>
            <div class="botao"> + Adicionar Tarefa</div>
            <br>
            <div class="cards-container"></div>
        `;

        return colunaElement;
    }

    // Estrutura de organização das colunas do quadro
    colunas.forEach(coluna => {
        const colunaElement = criarColuna(coluna);
        nomeColuna.appendChild(colunaElement);

        const cardsDaColuna = dadosDoQuadro.cards.filter(card => card.coluna === coluna.posicao);
        adicionarCards(colunaElement, cardsDaColuna);
    });


//ESTRUTURA CARDS   
    // Função para criar a estrutura dos cards dentro da coluna
    function criarCards(card, colunaElement, cardsContainer) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('draggable', 'true');
        cardElement.innerHTML = `
            <h3>${card.titulo}</h3>
            <p><strong>Responsável:</strong> ${card.responsavel}</p>
            <p><strong>Data de Início:</strong> ${card.dataInicio}</p>
        `;

        cardElement.addEventListener('click', () => {
            modalDetalhesCard(card, colunaElement, cardsContainer);
        });

        return cardElement;
    }

    // Função responsável pelo botão de criação de cards
    function adicionarCards(colunaElement, cards) {
        const cardsContainer = colunaElement.querySelector('.cards-container');
        cards.forEach(card => {
            const cardElement = criarCards(card);
            cardsContainer.appendChild(cardElement);
        });

        const botaoCriarCard = colunaElement.querySelector('.botao');
        botaoCriarCard.addEventListener('click', () => {
            modalCriarCard(colunaElement, cardsContainer);
        });
    }

    // Função responsável por criar novos cards
    function criarNovoCard(colunaElement, cardsContainer, novoCard) {
        
        const novaPosicao = dadosDoQuadro.cards.length;
        novoCard.posicao = novaPosicao;
        novoCard.coluna = parseInt(colunaElement.id.split('-')[1]);

        dadosDoQuadro.cards.push(novoCard);

        const novoCardElement = criarCards(novoCard);
        cardsContainer.appendChild(novoCardElement);

        console.log(dadosDoQuadro.cards);
    }

    function atualizarCard(colunaElement, cardsContainer, cardOriginal, cardAtualizado) {
        console.log(cardOriginal);
        console.log(cardAtualizado);

        cardOriginal = cardAtualizado;

        console.log(cardOriginal);

    }
