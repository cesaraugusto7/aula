class Cliente {
  final String nome;
  String telefone;
  int idVeiculo;

  Cliente(
      {required this.nome, required this.telefone, required this.idVeiculo});

  String getNome() {
    return this.nome;
  }

  void setTelefone(String telefone) {
    this.telefone = telefone;
  }

  String getTelefone() {
    return this.telefone;
  }

  void setVeiculo(int idVeiculo) {
    this.idVeiculo = idVeiculo;
  }
}
