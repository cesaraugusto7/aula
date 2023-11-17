
//Exemplo 1
class Pessoa {
  #nome;
  #endereço;
  #telefone;
  #dataNascimento;
  #carro;

  constructor(nome, endereco, telefone, dataNascimento, carro) {
    this.#nome = nome;
    this.#endereço = endereco;
    this.#telefone = telefone;
    this.#dataNascimento = dataNascimento;
    this.#carro = carro;
  }

  getCarro() {
    return this.#carro;
  }

}

class Carro {
  #modelo;
  #placa;
  #ano;
  #valor;

  constructor(modelo, placa, ano, valor) {
    this.#modelo = modelo;
    this.#placa = placa;
    this.#ano = ano;
    this.valor = valor;
  }

  #getModelo() {
    return this.#modelo;
  }
}


var carro = new Carro('Gol G5', 'NVT0987', '2011', 30000);

var pessoa = new Pessoa('Cesar', 'Avenida ferroviaria', '(62) 98448-4720', '1997-09-07', carro);


//Exemplo 2

class Pessoa2 {
  nome;
  dataNascimento;
  cpf;
  endereco;
  constructor({ nome, dataNascimento, cpf, endereco }) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
  }
  validarCpf() {
    if (this.cpf) {
      return true;
    }
  }
}

class Endereco2 {
  #logradouro;
  #bairro;
  #cidade;
  cep;
  #uf;
  constructor({ cep }) {
    this.cep = cep;
    buscaEnderecoCep();
  }

  buscaEnderecoCep() {
    this.#logradouro = 'Avenida Ferroviaria';
    this.#bairro = 'Vila formosa';
    this.#cidade = 'Anápolis'
    this.#uf = 'GO';
  }

  getLogradouro() {
    return this.#logradouro;
  }

  stringEndereco() {
    return `${this.logradouro}-${this.bairro},${this.cidade} - ${this.uf}, ${this.cep}`;
  }

}
var endereco = new Endereco2({ cep: '75100-725' });
var pessoa2 = new Pessoa2({ nome: 'Cesar', dataNascimento: new Date('1997-09-07'), cpf: '703.732.811-10', endereco: endereco });