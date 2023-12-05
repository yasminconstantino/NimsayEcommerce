/* utilidades */

const catalogooo = [
    { 
        id: "1", 
        marca: 'MOD', 
        nome: 'Top Cami Cadarço', 
        preco: 55, 
        imagem: 'produto1.png', 
        roupa: true, 
    }, 
    { 
        id: "2", 
        marca: 'EZwear', 
        nome: 'Short Xadrez Algodão', 
        preco: 40, 
        imagem: 'produto2.png', 
        roupa: true, 
    }, 
    { 
        id: "3", 
        marca: 'EZwear', 
        nome: 'Jaqueta Couro Botões', 
        preco: 128, 
        imagem: 'produto3.png', 
        roupa: true, 
    }, 
    { 
        id: "4", 
        marca: 'ROMWE GOTH', 
        nome: 'Coturno Goth Cadarço', 
        preco: 178, 
        imagem: 'produto4.png', 
        roupa: false, 
    }, 
    { 
        id: "5", 
        marca: 'ROMWE X', 
        nome: 'Camisa Halloween', 
        preco: 50, 
        imagem: 'produto5.png', 
        roupa: true, 
    }, 
    { 
        id: "6", 
        marca: 'DAZY', 
        nome: 'Calça Jeans preta', 
        preco: 130, 
        imagem: 'produto6.png', 
        roupa: true, 
    }, 
    { 
        id: "7", 
        marca: 'ROMWE PUNK', 
        nome: 'Jaqueta Couro Zip', 
        preco: 180, 
        imagem: 'produto7.png', 
        roupa: true, 
    }, 
    { 
        id: "8", 
        marca: 'ROMWE GOTH', 
        nome: 'Corturno Fivela', 
        preco: 210, 
        imagem: 'produto8.png', 
        roupa: false, 
    }
];
 function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
  }
  
 function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
  }
  
 function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
  }
  
 function desenharProdutoCarrinhoSimples(
    idProduto,
    idContainerHtml,
    quantidadeProduto
  ) {
    const produto = catalogooo.find((p) => p.id === produto.id);
    const containerProdutosCarrinho = document.getElementById(idContainerHtml);
  
    const elementoArticle = document.createElement("article"); //<article></article>
    const articleClasses = [
      "flex",
      "bg-neutral-200",
      "rounded-lg",
      "p-1",
      "relative",
      "mb-2",
      "w-96",
    ];
  
    for (const articleClass of articleClasses) {
      elementoArticle.classList.add(articleClass);
    }
    //<article class="flex bg-slate-100 rounded-lg p-1 relative"></article>
  
    const cartaoProdutoCarrinho = `
      <img
        src="./assets/img/${produto.imagem}"
        alt="Carrinho: ${produto.nome}"
        class="h-24 rounded-lg"
      />
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">
          ${produto.nome}
        </p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
      </div>
      <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
          <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
      </div>`;
    //<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>
  
    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);
  }

/* pedido */


  const elementoPedido = document.createElement("p");
  elementoPedido.classList.add('text-xl', 'text-bold', 'my-4');
  elementoPedido.textContent = new Date(pedidoComData.dataPedido).toLocaleDateString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
    
    function criarPedidoHistorico(pedidoComData) {
      const elementoPedido = `<p class='text-xl text-bold my-4' >${new Date(
        pedidoComData.dataPedido
      ).toLocaleDateString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      })}
      </p>
        <section id='container-pedidos-${
          pedidoComData.dataPedido
        }' class='bg-slate-300 p-3 rounded-md' ></section>
        `;
      const main = document.getElementsByTagName("main")[0];
      main.innerHTML += elementoPedido;
    
      for (const idProduto in pedidoComData.pedido) {
        desenharProdutoCarrinhoSimples(
          idProduto,
          `container-pedidos-${pedidoComData.dataPedido}`,
          pedidoComData.pedido[idProduto]
        );
      }
    }
    
    function renderizarHistoricoPedidos() {
      const historico = lerLocalStorage("historico");
  if (historico) {
    for (const pedidoComData of historico) {
      criarPedidoHistorico(pedidoComData);
    }
  }
    }
    
    renderizarHistoricoPedidos();

  /* menu carrinho */

const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

function abrirCarrinho() {
  var carrinho = document.getElementById("carrinho");
  carrinho.style.marginRight = "0px";
  carrinho.style.display = "flex";
  carrinho.style.visibility = "visible";
}

function fecharCarrinho() {
  var carrinho = document.getElementById("carrinho");
  carrinho.style.marginRight = "-360px";
  carrinho.style.display = "none";
  carrinho.style.visibility = "hidden";
}


function irParaCheckout() {
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }
  window.location.href = "./checkout.html";
}

 function inicializarCarrinho() {
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

 function renderizarProdutosCarrinho(){
  const containerProdutoCarrinho = document.getElementById("produtos-carrinho")
  containerProdutoCarrinho.innerHTML = "";
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoNoCarrinho(idProduto);
  }
}

 function adicionarAoCarrinho(idProduto) {
    if (idProduto in idsProdutoCarrinhoComQuantidade) {
      incrementarQuantidadeProduto(idProduto);
      return;  
    }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  desenharProdutoNoCarrinho(idProduto);
  atualizarPrecoCarrinho();
}

 function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById(`preco-total`);
  let precoTotalCarrinho = 0;
  for ( const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
    precoTotalCarrinho += catalogooo.find((p) => p.id === idProdutoNoCarrinho) * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
  }
  precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`
}
const catalogoProdutos = document.getElementById("container-produto");

/* filtros catalogo */


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

 function inicializarFiltros() {
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

/*cartao produto*/

function renderizarCatalogo() {
    for (const produtoCatalog of catalogooo){
        //automatizar para q o JS procure as informações desejadas e complete sozinho
        const cartaoProduto = `<div class="shadow-lg group hover:scale-110 duration-300 shadow-neutral-800 rounded-lg p-2 w-80 m-2 flex flex-col justify-between group ${produtoCatalog.roupa ? "roupa" : "shoes"}" id="card-produto-${produtoCatalog.id}">
        <img class="rounded-lg"
        src="./assets/img/${produtoCatalog.imagem}" 
        alt="Produto 1 da Magazine Hashtag"
        style="height: 300px;">
        <p class="text-sm" >${produtoCatalog.marca}</p>
        <p class="text-sm" >${produtoCatalog.nome}</p>
        <p class="preco" >$${produtoCatalog.preco}</p>
        <button id="adicionar-${produtoCatalog.id}" class="bg-neutral-800 hover:bg-fuchsia-700 text-neutral-300"><i class="fa-solid fa-cart-plus"></i></button>
        </div>`
    
        //atritui esse conteudo ao HTML, o JS faz isso sozinho
        document.getElementById("container-produto").innerHTML += cartaoProduto;
    }
    for (const produtoCatalog of catalogooo) {
        document
            .getElementById(`adicionar-${produtoCatalog.id}`)
            .addEventListener("click",() => adicionarAoCarrinho(produtoCatalog.id));
    }
    
}

/* checkout */

function desenharProdutosCheckout() {
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
      desenharProdutoCarrinhoSimples(
        idProduto,
        "container-produtos-checkout",
        idsProdutoCarrinhoComQuantidade[idProduto]
      );
    }
  }
  
  function finalizarCompra(evento) {
    evento.preventDefault();
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
      return;
    }
  
    const dataAtual = new Date();
    const pedidoFeito = {
      dataPedido: dataAtual,
      pedido: idsProdutoCarrinhoComQuantidade,
    };
    const historicoDePedidos = lerLocalStorage("historico") ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];
  
    salvarLocalStorage("historico", historicoDePedidosAtualizado);
    apagarDoLocalStorage("carrinho");
  
    window.location.href = "./pedidos.html";
  }
  
  desenharProdutosCheckout();
  
  document.addEventListener("submit", (evt) => finalizarCompra(evt));

  /* main js */

renderizarCatalogo();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();
inicializarCarrinho();