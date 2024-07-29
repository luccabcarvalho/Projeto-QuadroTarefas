//Modal de criação de cards
    function modalCriarCard(colunaElement, cardsContainer) {
        const modal = document.createElement('div');
        modal.classList.add('modalCriacao');
        modal.innerHTML = `
            <div class="modalCriacao-content">
                <span class="close">&times;</span>
                <h2>Novo Card</h2>
                <label for="titulo">Título:</label>
                <input type="text" id="titulo" name="titulo" required><br><br>
                <label for="responsavel">Responsável:</label>
                <input type="number" id="responsavel" name="responsavel" required><br><br>
                <label for="dataInicio">Data de Início (DD/MM):</label>
                <input type="text" id="dataInicio" name="dataInicio" required><br><br>
                <button id="salvarCard">Salvar</button>
            </div>
        `;
        document.body.appendChild(modal);

        const closeModal = modal.querySelector('.close');
        closeModal.addEventListener('click', () => {
            modal.remove();
        });

        const salvarButton = modal.querySelector('#salvarCard');
        salvarButton.addEventListener('click', () => {
            const titulo = modal.querySelector('#titulo').value;
            const responsavel = parseInt(modal.querySelector('#responsavel').value);
            const dataInicio = modal.querySelector('#dataInicio').value;

            let novoCard = {
                titulo: titulo,
                responsavel: responsavel,
                dataInicio: dataInicio
            };

            criarNovoCard(colunaElement, cardsContainer, novoCard);

            modal.remove();
        });

        modal.style.display = 'block'; // Exibe o modal
    }


//Modal de detalhes do card
function modalDetalhesCard(card, colunaElement, cardsContainer) {

    const modal = document.createElement('div');
    modal.classList.add('modalDetalhes');
    modal.innerHTML = `
        <div class="modalDetalhes-content">
            <span class="close">&times;</span>
            <h4>Detalhes do Card: ${card.titulo}</h4>
            <div class="row">
                <div class="col-3">
                    <label for="bucket">Bucket</label>
                    <br>
                    <select id="bucket" name="bucket">
                        <option value="exemplo1">Exemplo 1</option>
                        <option value="exemplo2">Exemplo 2</option>
                        <option value="exemplo3">Exemplo 3</option>
                        <option value="exemplo4">Exemplo 4</option>
                    </select>
                </div>
                <div class="col-3">
                    <label for="progresso">Progresso</label>
                    <br>
                    <select id="progresso" name="progresso">
                        <option value="baixo">Baixo</option>
                        <option value="médio">Médio</option>
                        <option value="alto">Alto</option>
                    </select>
                </div>
                <div class="col-3">
                    <label for="prioridade">Prioridade</label>
                    <br>
                    <select id="prioridade" name="prioridade">
                        <option value="baixa">Baixa</option>
                        <option value="média">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <label for="dataInicio">Data de Início</label>
                    <br>
                    <input type="date" id="dataInicio" name="dataInicio" value="${card.dataInicio}">
                </div>
                <div class="col-3">
                    <label for="dataConclusao">Data de Conclusão</label>
                    <br>
                    <input type="date" id="dataConclusao" name="dataConclusao" value="${card.dataConclusao || ''}">
                </div>
                <div class="col-6">
                    <label for="repetir">Repetir</label>
                    <br>
                    <select id="repetir" name="repetir">
                        <option value="nunca">Nunca</option>
                        <option value="diariamente">Diariamente</option>
                        <option value="semanalmente">Semanalmente</option>
                        <option value="mensalmente">Mensalmente</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <label for="anotacoes">Anotações</label>
                    <br>
                    <textarea id="anotacoes" name="anotacoes" rows="4">${card.anotacoes || ''}</textarea>
                </div>
            </div>
            <button id="salvarCard">Salvar Anotações</button>
        </div>
    `;
    document.body.appendChild(modal);

    const closeModal = modal.querySelector('.close');
    closeModal.addEventListener('click', () => {
        modal.remove();
    });

    const salvarButton = modal.querySelector('#salvarCard');
    salvarButton.addEventListener('click', () => {
        const bucket = modal.querySelector('#bucket').value;
        const progresso = modal.querySelector('#progresso').value;
        const prioridade = modal.querySelector('#prioridade').value;
        const dataInicio = modal.querySelector('#dataInicio').value;
        const dataConclusao = modal.querySelector('#dataConclusao').value;
        const repetir = modal.querySelector('#repetir').value;
        const anotacoes = modal.querySelector('#anotacoes').value;

        let novoCard = {
            titulo: card.titulo,
            responsavel: card.responsavel,
            dataInicio: dataInicio,
            bucket: bucket,
            progresso: progresso,
            prioridade: prioridade,
            dataConclusao: dataConclusao,
            repetir: repetir,
            anotacoes: anotacoes,
        };

        atualizarCard(colunaElement, cardsContainer, card, novoCard);

        modal.remove();
    });

    modal.style.display = 'block';
}
