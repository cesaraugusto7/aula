import 'package:cloud_firestore/cloud_firestore.dart';

import '../model/cliente_model.dart';

class ClienteDao {
  late final db;
  ClienteDao() {
    db = FirebaseFirestore.instance;
  }
  Future<String> add(Cliente cliente) async {
    var obj = toMap(cliente);
    obj['data_create'] = DateTime.now();
    var result = await db.collection('cliente').add(obj);
    var id = result.id;
    return id;
  }

  Future<bool> set(Cliente cliente, String idCliente) async {
    try {
      var obj = toMap(cliente);
      obj['data_create'] = DateTime.now();
      await db.collection('cliente').doc(idCliente).set(obj);
      return true;
    } catch (e) {
      return false;
    }
  }

  getAll() {}

  get(String id) {}

  Map toMap(Cliente cliente) {
    var map = {
      'nome': cliente.nome,
      'telefone': cliente.telefone,
      'id_veiulo': cliente.idVeiculo,
    };
    return map;
  }
}
