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

  getModelo() {
    return this.#modelo;
  }
}


var carro = new Carro('Gol G5', 'NVT0987', '2011', 30000);

var pessoa = new Pessoa('Cesar', 'Avenida ferroviaria', '(62) 98448-4720', '1997-09-07', carro);

pessoa.getCarro().getModelo();
