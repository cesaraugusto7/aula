import '../model/cliente_model.dart';

class ClienteBusiness {
  int criarCliente(Cliente cliente) {
    print('Cliente business: ${cliente.hashCode}');
    if (cliente.nome.length > 150) {
      print('Nome não pode ultrapassar 150 caracteres');
      return 0;
    } else if (cliente.telefone.length < 10) {
      print('Número de telefone informado é inválido');
      return 0;
    } else {
      print('Gravando no banco de dados...');
      return 1;
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
