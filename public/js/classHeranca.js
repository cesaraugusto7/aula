class Pessoa {
  #nome;
  getNome() {
    return this.#nome;
  }
  setNome(nome) {
    this.#nome = nome;
  }
  validarCpf() {
    if (this.cpf) {
      return true;
    }
  }
}


class Funcionario extends Pessoa {
  #cargo;
  #salario;
  getCargo() {
    return this.#cargo;
  }
  setCargo(cargo) {
    this.#cargo = cargo;
  }
  getSalario() {
    return this.#salario;
  }
  setSalario(salario) {
    this.#salario = salario;
  }
}

var funcionario = new Funcionario();
funcionario.setNome('Cesar')
funcionario.setSalario(6000);
funcionario.setCargo('DEV');
