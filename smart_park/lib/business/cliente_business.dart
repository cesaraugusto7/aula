import 'package:smart_park/dao/cliente_dao.dart';

import '../model/cliente_model.dart';

class ClienteBusiness {
  Future<String> criarCliente(Cliente cliente) async {
    print('Cliente business: ${cliente.hashCode}');
    if (cliente.nome.length > 150) {
      print('Nome não pode ultrapassar 150 caracteres');
      return '';
    } else if (cliente.telefone.length < 10) {
      print('Número de telefone informado é inválido');
      return '';
    } else {
      print('Gravando no banco de dados...');
      var clienteDao = ClienteDao();
      String id = await clienteDao.add(cliente);
      return id;
    }
  }

  void atualizarCliente(Cliente cliente) {
    if (cliente.nome.length > 150) {
      print('Nome não pode ultrapassar 150 caracteres');
    } else if (cliente.telefone.length < 10) {
      print('Número de telefone informado é inválido');
    } else {
      print('Gravando no banco de dados...');
    }
  }

  void deletarCliente() {}
}
