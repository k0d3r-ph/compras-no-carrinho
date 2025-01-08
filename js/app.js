let totalPrecos = []; // Definimos uma lista para receber os preços

// Função para armazenar o valor inicial presente no carrinho
function carregaTotalInicial () {
  let totalElemento = document.getElementById('valor-total');
  if (totalElemento) {
    let valorInicial = parseFloat(totalElemento.textContent.replace('R$', '').replace(',', '.'));
    if(!isNaN(valorInicial)) {
      totalPrecos.push(valorInicial);
    }
  }
}

// Função para adicionar os itens no carrinho
function adicionar() {
    let produtoEValor = document.getElementById('produto').value.split('-');
    let produto = produtoEValor[0];
    let valorTexto = produtoEValor[1];
    let quantidade = document.getElementById('quantidade').value;

    let valorReal = valorTexto.split('R$')[1];
    let preco = valorReal * quantidade;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${preco}</span>
  </section>`;

    totalPrecos.push(preco);
    
    let total = totalPrecos.reduce((acc, curr) => acc + curr, 0);

    let totalElemento = document.querySelector('p');
    totalElemento.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${total}</span>`
}

// Função para limpar os itens do carrinho
function limpar() {
  if (confirm('Deseja realmente limpar o seu carrinho?')) {
    totalPrecos = [];

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';
  
    let totalElemento = document.getElementById('valor-total');
    totalElemento.textContent = 'R$0.00';
  }
}

// Também informamos a função para quando a tela carregar
window.onload = carregaTotalInicial;

