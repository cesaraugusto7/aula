class Multiplicacao {
  #numero1;
  #numero2;

  constructor(numero1, numero2) {
    this.#numero1 = numero1;
    this.#numero2 = numero2;
  }

  getNumero1() {
    return this.#numero1;
  }
  setNumero1(numero1) {
    this.#numero1 = numero1;
  }
  getNumero2() {
    return this.#numero2;
  }
  setNumero2(numero2) {
    if (numero2 == 1) {
      this.#numero2 = 2;
    } else {
      this.#numero2 = numero2;
    }
  }
  multiplicar() {
    return this.#numero1 * this.#numero2;
  }

}

var multiplicacao = new Multiplicacao(14, 7);

console.log(multiplicacao.getNumero1());
multiplicacao.setNumero1(12);
console.log(multiplicacao.getNumero1());

multiplicacao.setNumero2(2);
console.log(multiplicacao.getNumero2());

console.log(multiplicacao.multiplicar());


var data = new Date();


class Cliente {
  #nome;
  #sobreNome;
  #idade;
  #nomeMae;

  constructor(nome, sobreNome, idade, nomeMae) {
    this.#nome = nome;
    this.#sobreNome = sobreNome;
    this.#idade = idade;
    this.#nomeMae = nomeMae;
  }

  getNome() {
    return this.#nome;
  }

  getSobreNome() {
    return this.#sobreNome;
  }

  getIdade() {
    return this.#idade;
  }

  getNomeMae() {
    return this.#nomeMae;
  }

  verificaMaiorIdade() {
    if (this.#idade >= 18) {
      return true;
    } else {
      return false;
    }
  }

}


var cliente = new Cliente('Cesar', 'Carvalho', 26, 'Rosângela');


function teste(cliente) {
  if (cliente.verificaMaiorIdade()) {
    console.log('Maior de idade')
  } else {
    console.log('Menor de idade')
  }

}

window.cpfCliente = '703.732.811-10'



class PecasCarro {
  descricao;
  constructor() {
    this.descricao = this.descricao;
  }
}




class Carro {
  modelo;
  placa;
  cor;
  marca;
  ano;
  listaPecas;

  constructor(modelo, cor, marca, ano, listaPecas) {
    this.modelo = modelo;
    this.cor = cor;
    this.marca = marca;
    this.ano = ano;
    this.listaPecas = listaPecas;
  }

  addPlaca(placa) {
    this.placa = placa;
  }

}


class Moto {
  modelo;
  placa;
  cor;
  marca;
  ano;
  listaPecas;

  constructor({ modelo, cor, marca, ano, listaPecas }) {
    this.modelo = modelo;
    this.cor = cor;
    this.marca = marca;
    this.ano = ano;
    this.listaPecas = listaPecas;
  }

  addPlaca(placa) {
    this.placa = placa;
  }

}


var obj = {
  nome: 'Cesar',
  idade: 26
}

var { nome, idade } = obj;







class Pessoa {
  nome;
  altura;
  peso;
  corOlhos;

  constructor() {

  }

  caminhar() {
  }

  falar() {
  }

  mastigar() {
  }

  colocarLente(corDaLente) {
    this.corOlhos = corDaLente;
  }

  corOlhos() {
    return this.corOlhos;
  }

}

var pessoa1 = new Pessoa();
