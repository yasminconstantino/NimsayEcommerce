/*import {
    lerLocalStorage,
    desenharProdutoCarrinhoSimples,
  } from "./src/utilidades";


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
  */
 
  import { lerLocalStorage, desenharProdutoCarrinhoSimples } from "./src/utilidades";

function criarPedidoHistorico(pedidoComData) {
  const main = document.getElementById("mainped");

  const elementoPedido = document.createElement("p");
  elementoPedido.classList.add('text-xl', 'text-bold', 'my-4');
  elementoPedido.textContent = new Date(pedidoComData.dataPedido).toLocaleDateString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  main.appendChild(elementoPedido);

  const containerPedidos = document.createElement("section");
  containerPedidos.id = `container-pedidos-${pedidoComData.dataPedido}`;
  containerPedidos.classList.add('bg-slate-300', 'p-3', 'rounded-md');
  main.appendChild(containerPedidos);

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

document.addEventListener("DOMContentLoaded", renderizarHistoricoPedidos);
