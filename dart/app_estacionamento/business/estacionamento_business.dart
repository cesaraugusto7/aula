import '../model/estacionamento_model.dart';
import '../model/vagas_model.dart';

class EstacionamentoBusiness {
  ocuparVaga(Estacionamento estacionamento) {
    List<Vaga> vagasDesocupadas = estacionamento.getVagasDesocupadas();
    if (vagasDesocupadas.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
