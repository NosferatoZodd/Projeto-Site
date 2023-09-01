import { catalogo } from "./utilidades.js";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `
      <div class='border-solid border-2 border-zinc-800 w-56 m-3' id="card-produto-${produtoCatalogo.id}">
        <img src="./assets/amg/${produtoCatalogo.Imagem}" style="height: 300px; flex" alt="Produto 1 do magazine hashtag" />
        <p class='marca'>${produtoCatalogo.marca}</p>
        <p>${produtoCatalogo.nome}</p>
        <p>$${produtoCatalogo.preço}</p>
        <button>Adicionar</button>
      </div>
    `;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }
}
