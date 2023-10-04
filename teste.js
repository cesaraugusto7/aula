class Pessoa {
  #nome;
  #endereço;
  #telefone;
  #dataNascimento;
  #carros;

  constructor(nome, endereco, telefone, dataNascimento, carros) {
    this.#nome = nome;
    this.#endereço = endereco;
    this.#telefone = telefone;
    this.#dataNascimento = dataNascimento;
    this.#carros = carros && Array.isArray(carros) ? carros : [];
  }

  getCarro() {
    return this.#carros;
  }
  setCarro(carro) {
    this.#carros.push(carro);
  }

  #getDadosClass() {
    return {
      nome: this.#nome,
      endereço: this.#endereço,
      telefone: this.#telefone,
      dataNascimento: this.#dataNascimento,
    };
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
    this.#valor = valor;
  }

  getModelo() {
    return this.#modelo;
  }

  async addBanco() {
    var dados = this.#getDadosClass();
    console.log(dados);
    // await firebase.firestore().collection('carro').add(dados);
  }

  #getDadosClass() {
    return {
      modelo: this.#modelo,
      placa: this.#placa,
      ano: this.#ano,
      valor: this.#valor,
    };
  }
}


var carro = new Carro('Gol G5', 'NVT0987', '2011', 30000);
var pessoa = new Pessoa('Cesar', 'Avenida ferroviaria', '(62) 98448-4720', '1997-09-07',);

pessoa.setCarro(carro);

console.log(pessoa.getCarro()[0].getModelo())
