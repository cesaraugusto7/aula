class Estacionamento {
  late String id;
  final String nome;
  int numeroVagas;
  double precoHora;
  double precoHoraAdicional;
  int tempoTolerancia;

  Estacionamento({
    required this.nome,
    required this.numeroVagas,
    required this.precoHora,
    required this.precoHoraAdicional,
    required this.tempoTolerancia,
  });

  setId(String id) {
    this.id = id;
  }
}
