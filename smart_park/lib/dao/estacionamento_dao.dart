import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:smart_park/model/estacionamento_model.dart';

class EstacionamentoDao {
  late final db;
  EstacionamentoDao() {
    db = FirebaseFirestore.instance;
  }

  add(Estacionamento estacionamento) async {
    try {
      var obj = toMap(estacionamento);
      var result = await db.collection('estacionamento').add(obj);
      estacionamento.setId(result.id);
    } catch (e) {
      throw 'Erro ao gravar no estacionamento na base de dados. Tente novamente';
    }
  }

  Map toMap(Estacionamento estacionamento) {
    var obj = {
      'nome': estacionamento.nome,
      'numero_vagas': estacionamento.numeroVagas,
      'preco_hora': estacionamento.precoHora,
      'preco_hora_adicional': estacionamento.precoHoraAdicional,
      'tempo_tolerancia': estacionamento.tempoTolerancia
    };
    return obj;
  }
}
