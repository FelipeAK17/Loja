const chaveProdutos = 'PRODUTOS'; // key para uso no localstorage

function cargaInicial() {
  var valores = [

  ];

  valores = JSON.stringify(valores); // converte o array em string pra salvar no localstorage
  localStorage.setItem(chaveProdutos, valores); // salva o array como string no localstorage
}

function mostraValores() {
  var valores = localStorage.getItem(chaveProdutos); // pega os valores como string no localstorage
  valores = JSON.parse(valores); // converte a string em array

  const grid = document.getElementById('grid');
  grid.innerHTML = '';


  valores.forEach((valor) => { // para cada registro no array executa o processo abaixo
    const divCard = document.createElement('div'); // cria uma div
    divCard.className = 'card col'; // insere a classe do bootstrap
    divCard.setAttribute('style', 'width: 18rem');

    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';

    const img = document.createElement('img');
    img.setAttribute('src', valor.url);
    img.setAttribute('style', 'max-height: 190px; width: fit-content; align-self: center;'); // seta alguns estilos direto na tag

    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerHTML = valor.titulo; // adiciona o conteudo entre a abertura e fechamento da tag

    const p1 = document.createElement('p');
    p1.className = 'card-text';
    p1.innerHTML = valor.preco;

    const p2 = document.createElement('p');
    p2.className = 'card-text';
    p2.innerHTML = valor.descricao;

    divCard.appendChild(img); // insere a img dentro da divCard
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(h5);
    divCardBody.appendChild(p1);
    divCardBody.appendChild(p2);

    const grid = document.getElementById('grid');
  
    grid.appendChild(divCard); // adiciona a divCard dentro do grid
  });
}

function cadastrar() {
  
  var titulo = document.getElementById('nome').value;
  var preco = document.getElementById('preco').value;
  var descricao = document.getElementById('descricao').value;
  var url = document.getElementById('url').value;

  const produto = {
    titulo,
    preco,
    descricao,
    url,
  }

  var valores = localStorage.getItem(chaveProdutos); // pega os valores como string no localstorage
  valores = JSON.parse(valores); // converte a string em array

  if (!valores) {
    valores = []
  }

  valores.push(produto);

  valores = JSON.stringify(valores);
 
  localStorage.setItem(chaveProdutos, valores);
  location.href="index.html"
}

// cargaInicial() // carrega valores iniciais no localstorage
// mostraValores() // renderiza os produtos no documento

function checkInputs(inputs) {
  var filled = true;
  
  inputs.forEach(function(label) {
      
    if(label.value === "") {
        filled = false;
    }
  
  });
  
  return filled;
  
}
var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");
inputs.forEach(function(input) {
    
  input.addEventListener("keyup", function() {
    if(checkInputs(inputs)) {
      button.button = false;
    } else {
      button.button = true;
    }
  });
});