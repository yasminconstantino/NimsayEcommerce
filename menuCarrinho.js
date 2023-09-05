import { catalogooo, salvarLocalStorage, lerLocalStorage } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

function abrirCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[-360px]");
    document.getElementById("carrinho").classList.add("right-[0px]");
}

function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");
}

function irParaCheckout() {
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }
  window.location.href = "./checkout.html";
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
    const botaoIrParaCheckout = document.getElementById("finalizar-compra");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
    botaoIrParaCheckout.addEventListener("click", irParaCheckout);
}

function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQuantidade[idProduto];
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho();
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto) {
  if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoNoCarrinho (idProduto) {
  const produto = catalogooo.find((p) => p.id === idProduto);
  const containerProdutoCarrinho = document.getElementById("produtos-carrinho")

  const elementoArticle =  document.createElement("article");
  const articleClasses = ["flex", "bg-neutral-300", "rounded-lg", "p-2", "relative"];

  //<article class="flex bg-neutral-300 rounded-lg p-2 relative"> </article>`

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `
    <button id="remover-item-${idProduto}" class="absolute top-0 right-1">
      <i class="fa-solid fa-circle-xmark text-fuchsia-700 hover:text-fuchsia-950" ></i>
    </button>
    <img src="./assets/img/${produto.imagem}" alt="${produto.nome}" class="h-24 rounded-lg">
    <div class="flex flex-col p-2 justify-between">
      <p class="text-neutral-800 text-sm">${produto.nome}</p>
      <p class="text-neutral-500 text-xs">Tamanho: M</p>
      <p class="text-green-900 text-lg">$${produto.preco}</p>
    </div>
    <div class="flex text-neutral-800 items-end absolute bottom-0 right-1 text-lg">
      <button id="decrementar-produto-${idProduto}">
        -
      </button>
      <p id="quantidade-${idProduto}" class="ml-2">
        ${idsProdutoCarrinhoComQuantidade[produto.id]}
      </p>
      <button class="ml-2" id="incrementar-produto-${idProduto}">
        +
      </button>
    </div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutoCarrinho.appendChild(elementoArticle);

  document.getElementById(`decrementar-produto-${idProduto}`).addEventListener('click', () => decrementarQuantidadeProduto(produto.id));
  document.getElementById(`incrementar-produto-${idProduto}`).addEventListener('click', () => incrementarQuantidadeProduto(produto.id));
  document.getElementById(`remover-item-${idProduto}`).addEventListener('click', () => removerDoCarrinho(produto.id));
}

export function renderizarProdutosCarrinho(){
  const containerProdutoCarrinho = document.getElementById("produtos-carrinho")
  containerProdutoCarrinho.innerHTML = "";
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoNoCarrinho(idProduto);
  }
}

export function adicionarAoCarrinho(idProduto) {
    if (idProduto in idsProdutoCarrinhoComQuantidade) {
      incrementarQuantidadeProduto(idProduto);
      return;  
    }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  desenharProdutoNoCarrinho(idProduto);
  atualizarPrecoCarrinho();
}

export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById(`preco-total`);
  let precoTotalCarrinho = 0;
  for ( const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
    precoTotalCarrinho += catalogooo.find((p) => p.id === idProdutoNoCarrinho) * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
  }
  precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`
}