import 'business/cliente_business.dart';
import 'business/estacionamento_business.dart';
import 'business/veiculo_business.dart';
import 'model/cliente_model.dart';
import 'model/estacionamento_model.dart';
import 'model/vagas_model.dart';
import 'model/veiculo_model.dart';

void main() {
  final estacionamento = criarEstacionamento();
  var idVeiculo = criarVeiculo();
  var idCliente = criarCliente(idVeiculo);
}

Estacionamento criarEstacionamento() {
  Estacionamento estacionamento = Estacionamento(numeroVagas: 20);
  for (var i = 0; i < 20; i++) {
    Vaga vaga = Vaga(numero: i + 1);
    estacionamento.setVagas(vaga);
  }
  return estacionamento;
}

int criarCliente(int idVeiculo) {
  String nome = 'Cesar';
  String telefone = '62984484720';

  var cliente = Cliente(nome: nome, telefone: telefone, idVeiculo: idVeiculo);
  print('Cliente main: ${cliente.hashCode}');
  ClienteBusiness clienteBusiness = ClienteBusiness();
  int idCliente = clienteBusiness.criarCliente(cliente);
  return idCliente;
}

int criarVeiculo() {
  String cor = 'preto';
  String placa = 'NWH-1234';
  String modelo = 'GOL';
  String marca = 'VOLKSWAGEN';
  String chassi = '123123123';

  var veiculo = Veiculo(
      cor: cor,
      placa: placa,
      modelo: modelo,
      marca: marca,
      chassi: int.parse(chassi));
  VeiculoBusiness veiculoBusiness = VeiculoBusiness();
  int idVeiculo = veiculoBusiness.validarDados(veiculo);

  return idVeiculo;
}

ocuparVaga(Vaga vaga, Cliente cliente) {
  print(vaga.hashCode);
  vaga.setCliente(cliente);
}
