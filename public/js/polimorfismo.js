class Conta {
  saldo;
  saque(valor) {
    if (this.saldo < valor) {
      alert('saldo insuficiente');
    } else {
      this.saldo -= valor;
    }
  }

  setSaldo(saldo) {
    this.saldo = saldo;
  }
  getSaldo() {
    return this.saldo;
  }
}

class ContaCorrente extends Conta {
  #chequeEspecial;
  setChequeEspecial(chequeEspecial) {
    this.#chequeEspecial = chequeEspecial;
  }
  getChequeEspecial() {
    return this.#chequeEspecial;
  }
  saque(valor) {
    if (this.saldo + this.#chequeEspecial < valor) {
      alert('saldo insuficiente');
    } else {
      if (this.saldo < valor) {
        this.#chequeEspecial -= valor - this.saldo;
        this.saldo = 0;
      } else {
        this.saldo -= valor;
      }
    }
  }
}

class ContaPoupanca extends Conta {
}

const contaCorrente = new ContaCorrente();
contaCorrente.setSaldo(1000);
contaCorrente.setChequeEspecial(500)
