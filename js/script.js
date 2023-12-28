//Ativar links do MEnu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
    console.log(link);
  }
}
links.forEach(ativarLink);

//Ativar Links de Orçamento

const parametros = URLSearchParams (location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if(elemento) {
  elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

console.log(parametros);

