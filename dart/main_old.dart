void main() {
  int idade;
  double peso = 60.5;
  String nome = 'César Augusto';
  bool acordado = true;
  List filhos = ['Liz', 'Augusto'];
  Set esposas = {'Veida'};
  Map parentes = {
    'pais': {'pai': 'Dreine', 'mae': 'Rosangela'},
    'primos': {}
  };

  // filhos.add('Lavinia');
  // filhos.addAll(['Joao', 'Maria']);
  // filhos.contains('Augusto');
  // for (var item in filhos) {
  //   print(item);
  // }

  // esposas.add('Jerusa');
  // esposas.add('Veida');
  // print(esposas);

  // parentes['primos']['primeiroGrau'] = 'Pedro';

  // parentes.forEach((key, value) {
  //   print('Key: $key  - Value: $value');
  // });

  // for (var key in parentes.keys) {
  //   print(parentes[key]);
  // }

  // var pessoa = new Pessoa('Cesar', '131.131.123-10', null);
  var pessoa = new Pessoa(cpf: '70373281110');
  pessoa.cpf = '131.131.123-10';
  print(pessoa.nome);
  print(pessoa.cpf);
  print(pessoa.dataNascimento);
}

class Pessoa {
  late String? nome;
  String? cpf;
  late DateTime dataNascimento;

  // Pessoa(this.nome, this.cpf, this.dataNascimento);
  Pessoa({this.cpf}) {
    ///consultar api de CPF
    this.nome = 'Cesar';
    this.dataNascimento = DateTime(1997, 09, 07);
  }
}
