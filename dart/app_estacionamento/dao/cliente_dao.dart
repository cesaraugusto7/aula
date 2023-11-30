import '../model/cliente_model.dart';

class ClienteDao {
  String add(Cliente cliente) {
    var obj = this.toMap(cliente);
    obj['data_create'] = DateTime.now();
    return '';
  }

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
