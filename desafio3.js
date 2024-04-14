class heroi{

    constructor(tipoHeroi, tipoAtaque){
        this.tipoHeroi = tipoHeroi
        this.tipoAtaque = tipoAtaque    
    }

    index(){
        console.log(`O ${this.tipoHeroi} atacou usando ${this.tipoAtaque}`)
    }
}

let mago = new heroi("mago", "magia")
let guerreiro = new heroi("guerreiro", "espada")
let monge = new heroi("monge", "artes marciais")
let ninja = new heroi("ninja", "shuriken")

mago.index()