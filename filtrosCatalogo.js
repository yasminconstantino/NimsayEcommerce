const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalogoProdutos.getElementsByClassName(`hidden`)
  );

  for (const produto of produtosEscondidos) {
    produto.classList.remove(`hidden`);
  }
}

function esconderShoes() {
  exibirTodos();
  const produtosShoes = Array.from(
    catalogoProdutos.getElementsByClassName(`shoes`)
  );

  for (const produto of produtosShoes) {
    produto.classList.add(`hidden`);
  }
}

function esconderRoupa() {
  exibirTodos();
  const produtosRoupas = Array.from(
    catalogoProdutos.getElementsByClassName(`roupa`)
  );

  for (const produto of produtosRoupas) {
    produto.classList.add(`hidden`);
  }
}

export function inicializarFiltros() {
  document
    .getElementById(`exibir-todos`)
    .addEventListener("click", exibirTodos);
  document
    .getElementById(`exibir-shoes`)
    .addEventListener("click", esconderRoupa);
  document
    .getElementById(`exibir-roupa`)
    .addEventListener("click", esconderShoes);
}