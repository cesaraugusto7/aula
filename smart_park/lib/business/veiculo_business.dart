import '../model/veiculo_model.dart';

class VeiculoBusiness {
  int validarDados(Veiculo veiculo) {
    if (veiculo.placa.length < 7) {
      print('Placa informada não existe.');
      return 0;
    } else if (veiculo.cor == 'preto') {
      print('não aceitamos veiculos pretos.');
      return 0;
    } else {
      print('salvando no banco de dados...');
      return 1;
    }
  }
}
