class Divisao {
  #dividendo;
  #divisor;
  #resultado;

  dividir() {
    this.#resultado = this.#dividendo / this.#divisor;
  }

  setDividendo(dividendo) {
    this.#dividendo = dividendo;
  }

  setDivisor(divisor) {
    if (divisor == 0) {
      alert('Divisor deve ser maior que zero.')
    } else {
      this.#divisor = divisor;
    }
  }

  getResultado() {
    return this.#resultado ? this.#resultado : 0;
  }


}

const divisao = new Divisao();
divisao.setDividendo(10);
divisao.setDivisor(2);
divisao.dividir();
console.log(divisao.getResultado());