class Jogo {
    #jogada;

    constructor() {
        this.jogadorX = new Jogador('X');
        this.jogadorO = new Jogador('O');
        this.tabuleiro = new Tabuleiro(this.jogar);
        this.#jogada = 1;
    }

    iniciar() {
        this.#desenharTabuleiro(this.tabuleiro);
    }

    jogar = (tentativa) => {
        const jogadorVez = this.#obtemJogadorVez()
        if (this.tabuleiro.jogadaValida(tentativa)) {
            jogadorVez.jogar(this.tabuleiro, tentativa);
            this.#jogada++;
            this.#desenharTabuleiro(this.tabuleiro);
        } else {
            alert('Tá Ocupado!')
        }
    }

    #obtemJogadorVez() {
        if (this.#jogada % 2 == 0) {
            return this.jogadorO;
        }
        return this.jogadorX;
    }

    checarVitoria() {}

    #desenharTabuleiro(tabuleiro) {
        const containerAntigo = document.getElementById('container-tabuleiro');
        if (containerAntigo) {
            document.body.removeChild(containerAntigo);    
        }
        document.body.appendChild(tabuleiro.desenhar());
    }
}