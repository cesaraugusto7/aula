import 'cliente_model.dart';

class Vaga {
  late final int _numero;
  late bool _status;
  late Cliente? _cliente;

  Vaga({
    required numero,
    status,
  }) {
    this._numero = numero;
    this._status = status ?? false;
  }

  bool getStatus() {
    return this._status;
  }

  void setStatus(bool status) {
    this._status = status;
  }

  int getNumero() {
    return this._numero;
  }

  setCliente(Cliente cliente) {
    this._cliente = cliente;
    this._status = true;
  }

  getCliente() {
    return this._cliente;
  }

  restart() {
    this._status = false;
    this._cliente = null;
  }
}
