class Tabuleiro {
    
    constructor(quandoClicar) {
        this.quandoClicar = quandoClicar;
        this.inicializar();
    }

    inicializar() {
        this.valor = [];
        for (let linha = 0; linha < 3; linha++) {
            let linhaAux = []
            for(let coluna = 0; coluna < 3; coluna++) {
                linhaAux.push(0);
            }
            this.valor.push(linhaAux);
        }
    }

    desenhar() {
        const container = this.#criaContainerTabuleiro();
        for(let linha = 0; linha < this.valor.length; linha++) {
            const linhaContainer = this.#criaContainerLinha();
            const colunaLista = this.valor[linha];
            for(let coluna = 0; coluna < colunaLista.length; coluna++) {
                const itemContainer = this.#criaItemContainer(coluna, linha);
                const textoConteudo = document.createTextNode(colunaLista[coluna] == 0 ? '' : colunaLista[coluna]);
                itemContainer.appendChild(textoConteudo);
                linhaContainer.appendChild(itemContainer);
            }
            container.appendChild(linhaContainer);
        }
        return container;
    }

    obterPosicao(tentativa) {
        return this.valor[tentativa.linha][tentativa.coluna];
    }

    atribuirPosicao = (jogador, tentativa) => {
        this.valor[tentativa.linha][tentativa.coluna] = jogador.nome;
    }

    jogadaValida(tentativa) {
        return this.obterPosicao(tentativa) == 0;
    }

    checarLinhas() {}

    checarColunas() {}

    checarDiagonais() {}

    checarTabuleiroCompleto() {}

    #criaContainerTabuleiro() {
        const container = document.createElement('div');
        container.id = 'container-tabuleiro';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
        container.style.width = '100%';
        return container;
    }

    #criaContainerLinha() {
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'row';
        return container;
    }

    #criaItemContainer (coluna, linha) {
        const container = document.createElement('div');
        container.style.width = '200px';
        container.style.height = '200px';
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
        container.style.fontSize = '100px';
        if (coluna > 0) {
            container.style.borderLeft = '1px solid #333';
        }
        if (linha != 2) {
            container.style.borderBottom = '1px solid #333';
        }

        const tentativa = new Tentativa(coluna, linha);

        container.onclick = () => {
            this.quandoClicar(tentativa);
    }
    return container;
    }
}