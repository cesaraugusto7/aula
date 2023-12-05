import 'package:smart_park/business/estacionamento_business.dart';
import 'package:smart_park/model/estacionamento_model.dart';

class EstacionamentoController {
  criar() async {
    try {
      Estacionamento estacionamento = Estacionamento(
          nome: 'Estacionamento do Hebin',
          numeroVagas: 35,
          precoHora: 4.0,
          precoHoraAdicional: 2.0,
          tempoTolerancia: 15);
      EstacionamentoBusiness estacionamentoBusiness = EstacionamentoBusiness();
      await estacionamentoBusiness.criar(estacionamento);
      print(estacionamento.id);
    } catch (e) {
      print(e);
    }
  }

  editar() {}
}
