let vitorias = 60
let derrotas = 32

let resultado = ranked (vitorias,derrotas)

function ranked (vitorias,derrotas){
    let calculoranked = vitorias - derrotas
    return calculoranked
}

if (resultado < 10){
    console.log("O Herói tem de saldo de " + vitorias + " vitórias e está no nível de FERRO")
}

else if (resultado >= 11 && resultado <= 20){
    console.log("O Herói tem de saldo de " + vitorias + " vitórias e está no nível de BRONZE")
}

else if (resultado >= 21 && resultado <= 50){
    console.log("O Herói tem de saldo de " + vitorias + " vitórias e está no nível de PRATA")
}

else if (resultado >= 51 && resultado <= 80){
    console.log("O Herói tem de saldo de " + vitorias + " vitórias e está no nível de OURO")
}

else if (resultado >= 81 && resultado <= 90){
    console.log("O Herói tem de saldo de " + vitorias + " vitórias e está no nível de DIAMANTE")
}

else if (resultado >= 91 && resultado <= 100){
    console.log("O Herói tem de saldo de " + vitorias + " vitórias e está no nível de LENDÁRIO")
}

else if (resultado > 101){
    console.log("O Herói tem de saldo de " + vitorias + " vitórias e está no nível de IMORTAL")
}
