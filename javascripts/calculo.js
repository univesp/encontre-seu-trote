//Array que guarda as pontuações, do 1 ao 17 modelos.
let resultado = [];

let perfis = [];

//Alimenta o array com 0's
for (var i = 0; i < 18; i++) {
  resultado[i] = 0;
}

//Função que adiciona/subtrai uma quantidade na posição desejada.
function atualizaResultado(adiciona, quantidade, posicao) {
  for (var i = 0; i < quantidade; i++) {
    if (adiciona)
      resultado[posicao]++;
    else
      resultado[posicao]--;
  }
}

function tela1() {
  //Checa os inputs e guarda na

  let id = 'p1-';
  let resposta = 33;
  for (var i = 0; i < 4; i++) {
    if (document.getElementById(id + String.fromCharCode(97 + i)).checked)
      resposta = i;
  }

  // console.log('resposta: ' + resposta);
  // console.log('resultado  antes :');
  // console.log(resultado);
  //Faz a atualização do vetor resultado, com as pontuações conforme roteiro.
  switch (resposta) {
    case 0:
      atualizaResultado(true, 1, 1);
      atualizaResultado(true, 1, 2);
      atualizaResultado(true, 1, 3);
      atualizaResultado(true, 1, 6);
      break;
    case 1:
      atualizaResultado(true, 1, 2);
      atualizaResultado(true, 1, 7);
      atualizaResultado(true, 1, 11);
      atualizaResultado(true, 1, 12);
      atualizaResultado(true, 1, 13);
      atualizaResultado(true, 1, 14);
      atualizaResultado(true, 1, 15);
      break;
    case 2:
      atualizaResultado(true, 1, 8);
      atualizaResultado(true, 1, 9);
      atualizaResultado(true, 1, 16);
      atualizaResultado(true, 1, 17);
      break;
    case 3:
      atualizaResultado(true, 1, 4);
      atualizaResultado(true, 1, 5);
      atualizaResultado(true, 1, 10);
      break;
    default:
      break;
  }

  // console.log('resultado  depois :');
  // console.log(resultado);


}

function tela2() {
  let id = 'p2-';
  let ranges = [];
  for (var i = 0; i < 5; i++) {
    ranges[i] = document.getElementById(id + String.fromCharCode(97 + i)).value;
  }

  console.log('tela 2');
  console.table(ranges);
  atualizaResultado(true, ranges[0], 2);
  atualizaResultado(true, ranges[1], 4);
  atualizaResultado(true, ranges[2], 5);
  atualizaResultado(true, ranges[2], 10);
  atualizaResultado(true, ranges[3], 11);
  atualizaResultado(true, ranges[3], 12);
  atualizaResultado(true, ranges[4], 14);
  atualizaResultado(true, ranges[4], 15);
}

function tela3() {
  let id = 'p3-';
  let ranges = [];
  for (var i = 0; i < 6; i++) {
    ranges[i] = document.getElementById(id + String.fromCharCode(97 + i)).value;
  }
  console.log('tela 3');
  console.table(ranges);
  atualizaResultado(true, ranges[0], 3);
  atualizaResultado(true, ranges[1], 7);
  atualizaResultado(true, ranges[1], 13);
  atualizaResultado(true, ranges[2], 16);
  atualizaResultado(true, ranges[3], 1);
  atualizaResultado(true, ranges[3], 8);
  atualizaResultado(true, ranges[3], 17);
  atualizaResultado(true, ranges[4], 6);
  atualizaResultado(true, ranges[5], 9);
}

function tela4() {
  let caixa = document.querySelectorAll('#sortable li');
  let elemento;
  for (var i = 0; i < caixa.length; i++) {
    elemento = caixa[i].id;
    switch (elemento) {
      case 'p4-a':
        atualizaResultado(true, 5 - i, 7);
        atualizaResultado(true, 5 - i, 11);
        atualizaResultado(true, 5 - i, 12);
        atualizaResultado(true, 5 - i, 13);
        atualizaResultado(true, 5 - i, 14);
        atualizaResultado(true, 5 - i, 15);
        break;
      case 'p4-b':
        atualizaResultado(true, 5 - i, 1);
        atualizaResultado(true, 5 - i, 2);
        atualizaResultado(true, 5 - i, 8);
        atualizaResultado(true, 5 - i, 16);
        break;
      case 'p4-c':
        atualizaResultado(true, 5 - i, 5);
        atualizaResultado(true, 5 - i, 10);
        break;
      case 'p4-d':
        atualizaResultado(true, 5 - i, 9);
        atualizaResultado(true, 5 - i, 17);
        break;
      case 'p4-e':
        atualizaResultado(true, 5 - i, 3);
        atualizaResultado(true, 5 - i, 4);
        atualizaResultado(true, 5 - i, 6);
        break;
      default:
        break;
    }
  }
}

function tela5() {
  let id = 'p5-';
  let resposta = 33;
  for (var i = 0; i < 6; i++) {
    if (document.getElementById(id + String.fromCharCode(97 + i)).checked)
      resposta = i;
  }

  //Faz a atualização do vetor resultado, com as pontuações conforme roteiro.
  switch (resposta) {
    case 0:
      atualizaResultado(true, 1, 3);
      atualizaResultado(true, 1, 10);
      break;
    case 1:
      atualizaResultado(true, 1, 6);
      atualizaResultado(true, 1, 7);
      atualizaResultado(true, 1, 11);
      atualizaResultado(true, 1, 12);
      atualizaResultado(true, 1, 13);
      atualizaResultado(true, 1, 14);
      atualizaResultado(true, 1, 15);
      break;
    case 2:
      atualizaResultado(true, 1, 4);
      atualizaResultado(true, 1, 5);
      break;
    case 3:
      atualizaResultado(true, 1, 1);
      atualizaResultado(true, 1, 9);
      atualizaResultado(true, 1, 17);
      break;
    case 4:
      atualizaResultado(true, 1, 2);
      atualizaResultado(true, 1, 8);
      break;
    case 5:
      atualizaResultado(true, 1, 16);
      break;
    default:
      break;
  }
}

function tela6() {
  let id = 'p6-';
  let resposta = 33;
  for (var i = 0; i < 5; i++) {
    if (document.getElementById(id + String.fromCharCode(97 + i)).checked)
      resposta = i;
  }

  //Faz a atualização do vetor resultado, com as pontuações conforme roteiro.
  switch (resposta) {
    case 0:
      atualizaResultado(true, 1, 3);
      atualizaResultado(true, 1, 6);
      break;
    case 1:
      atualizaResultado(true, 1, 9);
      atualizaResultado(true, 1, 17);
      break;
    case 2:
      atualizaResultado(true, 1, 1);
      atualizaResultado(true, 1, 5);
      atualizaResultado(true, 1, 8);
      atualizaResultado(true, 1, 10);
      atualizaResultado(true, 1, 16);
      break;
    case 3:
      atualizaResultado(true, 1, 4);
      break;
    case 4:
      atualizaResultado(true, 1, 2);
      atualizaResultado(true, 1, 7);
      atualizaResultado(true, 1, 11);
      atualizaResultado(true, 1, 12);
      atualizaResultado(true, 1, 13);
      atualizaResultado(true, 1, 14);
      atualizaResultado(true, 1, 15);
      break;
    default:
      break;
  }
}

function tela7() {
  let id = 'p7-';
  let resposta = 33;
  for (var i = 0; i < 5; i++) {
    if (document.getElementById(id + String.fromCharCode(97 + i)).checked)
      resposta = i;
  }

  //Faz a atualização do vetor resultado, com as pontuações conforme roteiro.
  switch (resposta) {
    case 0:
      atualizaResultado(true, 1, 8);
      atualizaResultado(true, 1, 9);
      atualizaResultado(true, 1, 17);
      break;
    case 1:
      atualizaResultado(true, 1, 4);
      break;
    case 2:
      atualizaResultado(true, 1, 3);
      atualizaResultado(true, 1, 6);
      break;
    case 3:
      atualizaResultado(true, 1, 1);
      atualizaResultado(true, 1, 2);
      atualizaResultado(true, 1, 5);
      atualizaResultado(true, 1, 10);
      atualizaResultado(true, 1, 16);
      break;
    case 4:
      atualizaResultado(true, 1, 7);
      atualizaResultado(true, 1, 11);
      atualizaResultado(true, 1, 12);
      atualizaResultado(true, 1, 13);
      atualizaResultado(true, 1, 14);
      atualizaResultado(true, 1, 15);
      break;
    default:
      break;
  }
}

function tela8() {
  let id = 'p8-';
  let resposta = 33;
  for (var i = 0; i < 7; i++) {
    if (document.getElementById(id + String.fromCharCode(97 + i)).checked)
      resposta = i;
  }

  //Faz a atualização do vetor resultado, com as pontuações conforme roteiro.
  switch (resposta) {
    case 0:
      atualizaResultado(true, 1, 4);
      atualizaResultado(true, 1, 5);
      atualizaResultado(true, 1, 10);
      break;
    case 1:
      atualizaResultado(true, 1, 3);
      atualizaResultado(true, 1, 6);
      break;
    case 2:
      atualizaResultado(true, 1, 7);
      atualizaResultado(true, 1, 11);
      atualizaResultado(true, 1, 12);
      atualizaResultado(true, 1, 13);
      atualizaResultado(true, 1, 14);
      atualizaResultado(true, 1, 15);
      break;
    case 3:
      atualizaResultado(true, 1, 9);
      break;
    case 4:
      atualizaResultado(true, 1, 1);
      atualizaResultado(true, 1, 2);
      break;
    case 5:
      atualizaResultado(true, 1, 8);
      break;
    case 6:
      atualizaResultado(true, 1, 16);
      atualizaResultado(true, 1, 17);
      break;
    default:
      break;
  }
}

function tela9() {
  let id = 'p9-';
  let duvida = ['sim', 'nao', 'nsei'];
  let resposta = [];
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 3; j++) {
      if (document.getElementById(id + String.fromCharCode(97 + i) + '-' + duvida[j]).checked) {
        resposta[i] = j;
        break;
      }
    }
  }

  //Primeira parte.
  let primeira = [7, 11, 12, 13, 14, 15];
  let segunda = [5, 10];
  let terceira = [1, 2, 6, 10, 16];
  let quarta = [3, 4];
  let quinta = [8, 9, 16, 17];

  let casas = [primeira, segunda, terceira, quarta, quinta];

  let adiciona = true;
  let quantidade = 0;

  for (var i = 0; i < resposta.length; i++) {
    if (resposta[i] == 0) {
      adiciona = true;
      quantidade = 1;
    }
    if (resposta[i] == 1) {
      adiciona = false;
      quantidade = 1;
    }
    if (resposta[i] == 2) {
      adiciona = true;
      quantidade = 0;
    }

    for (var j = 0; j < casas[i].length; j++) {
      atualizaResultado(adiciona, quantidade, casas[i][j]);
    }
  }



}

function tela10() {
  let id = 'p10-';
  let resposta = [false, false, false, false, false, false];

  for (var i = 0; i < 6; i++) {
    if (document.getElementById(id + String.fromCharCode(97 + i)).checked)
      resposta[i] = true;
  }

  if (resposta[0]) {
    atualizaResultado(true, 3, 2);
    atualizaResultado(true, 3, 7);
    atualizaResultado(true, 3, 11);
    atualizaResultado(true, 3, 12);
    atualizaResultado(true, 3, 13);
    atualizaResultado(true, 3, 14);
    atualizaResultado(true, 3, 15);
  }

  if (resposta[1]) {
    atualizaResultado(true, 3, 3);
    atualizaResultado(true, 3, 6);
  }

  if (resposta[2]) {
    atualizaResultado(true, 3, 4);
  }

  if (resposta[3]) {
    atualizaResultado(true, 3, 9);
  }

  if (resposta[4]) {
    atualizaResultado(true, 3, 1);
    atualizaResultado(true, 3, 5);
    atualizaResultado(true, 3, 10);
    atualizaResultado(true, 3, 16);
  }

  if (resposta[5]) {
    atualizaResultado(true, 3, 8);
    atualizaResultado(true, 3, 17);
  }

}

function calculaResultado() {
  tela1();
  tela2();
  tela3();
  tela4();
  tela5();
  tela6();
  tela7();
  tela8();
  tela9();
  tela10();

  var maximo = resultado.reduce(function(a, b) {
    return Math.max(a, b);
  });

  for (var i = 0; i < resultado.length; i++) {
    if(resultado[i] == maximo)
      perfis.push(i);
  }
  console.log(resultado);
  console.log(perfis);
}

avancar = document.querySelectorAll('#executa')[0];

avancar.addEventListener('click', calculaResultado);
