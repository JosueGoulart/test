class Jogador {
    constructor(nome) {
        this.nome = nome;
    }

    jogar(tabuleiro, tentativa) {
        console.log(tabuleiro, tentativa);
        tabuleiro.atribuirPosicao(this, tentativa);
    }
}