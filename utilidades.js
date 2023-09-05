export const catalogooo = [
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
export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
  }
  
  export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
  }
  
  export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
  }
  
  export function desenharProdutoCarrinhoSimples(
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