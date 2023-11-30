// ignore_for_file: public_member_api_docs, sort_constructors_first
class Veiculo {
  String cor;
  String placa;
  final String modelo;
  final String marca;
  final int chassi;

  Veiculo({
    required this.cor,
    required this.placa,
    required this.modelo,
    required this.marca,
    required this.chassi,
  });

  String getCor() {
    return this.cor;
  }

  String getPlaca() {
    return this.cor;
  }

  String getModelo() {
    return this.cor;
  }

  String getMarca() {
    return this.cor;
  }

  void setPlaca(String placa) {
    this.placa = placa;
  }

  void setCor(String cor) {
    this.cor = cor;
  }
}
