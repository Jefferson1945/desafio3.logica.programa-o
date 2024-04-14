class Heroi {
    constructor(nome, idade, tipoHeroi) {
        this.nome = nome;
        this.idade = idade;
        this.tipoHeroi = tipoHeroi;
    }

    atacar() {
        let ataque;
        switch (this.tipoHeroi) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "não possui um ataque definido";
        }
        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`);
    }
}

let mago = new Heroi("Gandalf", 150, "mago");
let guerreiro = new Heroi("Aragorn", 35, "guerreiro");
let monge = new Heroi("Bruce Lee", 32, "monge");
let ninja = new Heroi("Ryu Hayabusa", 30, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();