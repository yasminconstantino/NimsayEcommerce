//deixar o pc criar as coisas pra mim, criando variaveis para produto
import { renderizarCatalogo } from "./src/cartaoProduto.js";
import { inicializarFiltros } from "./src/filtrosCatalogo.js";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho.js";


renderizarCatalogo();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();
inicializarCarrinho();
abrirCarrinho();
fecharCarrinho();

