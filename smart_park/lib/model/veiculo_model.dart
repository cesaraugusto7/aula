// ignore_for_file: public_member_api_docs, sort_constructors_first
class Veiculo {
  late String id;
  final String cor;
  final String placa;
  final String modelo;
  final String marca;
  final String idEstacionamento;

  Veiculo({
    required this.id,
    required this.cor,
    required this.placa,
    required this.modelo,
    required this.marca,
    required this.idEstacionamento,
  });

  setId(String id) {
    this.id = id;
  }
}
