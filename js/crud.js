var arrayCientes = [];
var emEdicao = null;

function salvar() {
  var nome = document.getElementById('nome').value;
  var cpf = document.getElementById('cpf').value;
  var dataNascimento = document.getElementById('dataNascimento').value;
  var genero = document.getElementById('genero').value;

  if (nome == '') {
    alert('Preencha o campo Nome!');
    return;
  }

  if (cpf == '') {
    alert('Preencha o campo CPF!');
    return;
  }

  if (dataNascimento == '') {
    alert('Preencha o campo Data Nascimento!');
    return;
  }

  if (genero == '') {
    alert('Preencha o campo Gênero!');
    return;
  }

  var objCliente = {
    nome: nome,
    cpf: cpf,
    dataNascimento: dataNascimento,
    genero: genero
  }
  if (emEdicao != null) {
    arrayCientes[emEdicao] = objCliente;
  } else {
    arrayCientes.push(objCliente);
  }
  alert('Salvo com sucesso!');
  limparImputs();
  listaDados();
  emEdicao = null;
  gravaLocalStorage();
}

function limparImputs() {
  document.getElementById('nome').value = '';
  document.getElementById('cpf').value = '';
  document.getElementById('dataNascimento').value = '';
  document.getElementById('genero').value = '';
}

function listaDados() {
  document.getElementById('tableBody').innerHTML = '';
  var htmlBodyTable = '';
  for (var index = 0; index < arrayCientes.length; index++) {
    var cliente = arrayCientes[index]
    htmlBodyTable = htmlBodyTable + `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${cliente.nome}</td>
            <td>${cliente.cpf}</td>
            <td>${cliente.dataNascimento}</td>
            <td>${cliente.genero}</td>
            <td>
              <span onclick="editar(${index})" class="material-symbols-rounded" style="cursor: pointer;">
                edit
              </span>
              <span onclick="excluir(${index})" class="material-symbols-rounded" style="cursor: pointer;">
                delete
              </span>
            </td>
          </tr>
    `

  }
  document.getElementById('tableBody').innerHTML = htmlBodyTable;
}

function editar(index) {
  emEdicao = index;
  var cliente = arrayCientes[index];
  document.getElementById('nome').value = cliente.nome;
  document.getElementById('cpf').value = cliente.cpf;
  document.getElementById('dataNascimento').value = cliente.dataNascimento;
  document.getElementById('genero').value = cliente.genero;
}

function excluir(index) {
  arrayCientes.splice(index, 1);
  listaDados();
  gravaLocalStorage();
}

function gravaLocalStorage() {
  localStorage.setItem('arrayCientes', JSON.stringify(arrayCientes));
}

function buscaDados() {
  var resultado = localStorage.getItem('arrayCientes');
  console.log(resultado);
  if (resultado != undefined && resultado != null) {
    arrayCientes = JSON.parse(resultado);
  }
  listaDados();
}
document.addEventListener('load', buscaDados());


// https://api.jquery.com/


//retornam algo
function somaRetorna(num1, num2) {
  var resultado = num1 + num2
  return resultado;

}

// não retornam nada
// function soma(num1, num2) {
//   var result = num1 + num2
//   multiplicaRetorna(result, 5)
// }

// function multiplicaRetorna(num, mult) {
//   var result = num * mult;
//   console.log(result);
// }


// function multiplicaRetorna(num, mult) {
//   return num * mult;
// }

// var resultado = somaRetorna(2 + 2);
// console.log(resultado);

// var resultadoMult = multiplicaRetorna(resultado, 5);
// console.log(resultadoMult);


// soma(3 + 3);