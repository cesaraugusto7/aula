var arrayCientes = [];
var emEdicao = null;
async function salvar() {
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
    await firebase.firestore().collection('clientes').doc(idDocumento).set(objCliente);
  } else {
    await firebase.firestore().collection('clientes').add(objCliente);
  }
  alert('Salvo com sucesso!');
  limparImputs();
  buscaDados();
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

async function buscaDados() {
  arrayCientes = [];
  // firebase.firestore().collection('clientes').get().then(function (result) {
  //   if (result.docs && result.docs.length > 0) {
  //     var arrayDocs = result.docs;
  //     for (var index = 0; index < arrayDocs.length; index++) {
  //       var cliente = arrayDocs[index].data();
  //       arrayCientes.push(cliente);
  //     }
  //     listaDados();
  //   }
  // }).catch(function (error) {
  //   console.log(error);
  // });

  var result = await firebase.firestore().collection('clientes').get();
  if (result.docs && result.docs.length > 0) {
    var arrayDocs = result.docs;
    for (var index = 0; index < arrayDocs.length; index++) {
      var cliente = arrayDocs[index].data();
      arrayCientes.push(cliente);
    }
    listaDados();
  }
}
window.onload = function () {
  buscaDados()
}











// function somar(params1, parmas2) {
//   var total = params1 + parmas2;
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       reject(total);
//     }, 5000);

//   })

// }
// console.log('Inicia a soma');
// somar(2, 3)
//   .then(function (resultado) {
//     console.log('Resultado da soma: ', resultado);
//     console.log('Fim da soma');
//   }).catch(function (error) {
//     console.log(error)
//   })


// class Veiculo {
//   cor;
//   ano;
//   modelo;
//   placa;

//   transferir() {

//   }

//   acelerar() {
//   }

//   freiar() {

//   }

//   velocidadeMedia() {

//   }

//   aceleracao() {

//   }

// }