
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerSom() {
        throw new Error('O método "fazerSom()" deve ser implementado.');
    }
}


class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    fazerSom() {
        return "Au Au!";
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    fazerSom() {
        return "Miau!";
    }
}


const cachorro1 = new Cachorro("Buddy", 3, "Golden Retriever");
const gato1 = new Gato("Whiskers", 2, "Preto");
const cachorro2 = new Cachorro("Max", 5, "Bulldog");

console.log(`${cachorro1.nome} tem ${cachorro1.idade} anos, é um ${cachorro1.raca} e faz ${cachorro1.fazerSom()}`);
console.log(`${gato1.nome} tem ${gato1.idade} anos, é um gato ${gato1.cor} e faz ${gato1.fazerSom()}`);
console.log(`${cachorro2.nome} tem ${cachorro2.idade} anos, é um ${cachorro2.raca} e faz ${cachorro2.fazerSom()}`);
