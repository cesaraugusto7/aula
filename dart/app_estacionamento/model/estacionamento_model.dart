// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'vagas_model.dart';

class Estacionamento {
  int numeroVagas;
  List<Vaga> vagas = [];

  Estacionamento({required this.numeroVagas});

  setVagas(Vaga vaga) {
    vagas.add(vaga);
  }

  List<Vaga> getVagas() {
    return vagas;
  }

  List<Vaga> getVagasDesocupadas() {
    List<Vaga> vagasDesocupadas = [];
    for (var vaga in vagas) {
      if (vaga.getStatus() == false) {
        vagasDesocupadas.add(vaga);
      }
    }
    return vagasDesocupadas;
  }

  List<Vaga> getVagasOcupadas() {
    List<Vaga> vagasOcupadas = [];
    for (var vaga in vagas) {
      if (vaga.getStatus() == true) {
        vagasOcupadas.add(vaga);
      }
    }
    return vagasOcupadas;
  }
}
