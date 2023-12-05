import 'package:smart_park/dao/estacionamento_dao.dart';

import '../model/estacionamento_model.dart';

class EstacionamentoBusiness {
  criar(Estacionamento estacionamento) async {
    try {
      if (estacionamento.nome == '') {
        throw 'Favor informar o nome do estacionamento';
      }
      if (estacionamento.numeroVagas == 0) {
        throw 'Favor informar o numero de vagas';
      }
      if (estacionamento.precoHora == 0.0) {
        throw 'Favor informar o preço da hora.';
      }
      if (estacionamento.precoHoraAdicional == 0.0) {
        throw 'Favor informar o preço da hora adicional.';
      }
      if (estacionamento.tempoTolerancia == 0.0) {
        throw 'Favor informar o tempo de tolerancia.';
      }
      EstacionamentoDao estacionamentoDao = EstacionamentoDao();
      await estacionamentoDao.add(estacionamento);
    } catch (e) {
      rethrow;
    }
  }
}
