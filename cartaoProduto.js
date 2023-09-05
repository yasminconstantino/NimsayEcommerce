import { catalogooo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";
//percorre a lista e executa ela com cada produto da lista.

export function renderizarCatalogo() {
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