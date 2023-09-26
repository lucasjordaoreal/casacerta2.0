// casas.js

// Dados das casas (exemplo, você pode adicionar mais)
const casas = [
    {
        nome: "Uma deslumbrante casa no Rio Grande do Norte",
        imagem: "/imagens/Produtos/DALL·E 2023-03-10 14.01.35 - beach houses for rent, pool, chateau.png",
    },
    {
        nome: "No coração do Paraná, encontra-se uma linda casa",
        imagem: "/imagens/Produtos/DALL·E 2023-03-10 14.01.29 - beach houses for rent, pool, chateau.png",
    },
    {
        nome: "Linda casa em Pompéia",
        imagem: "/imagens/Produtos/DALL·E 2023-03-10 14.04.32 - houses for rent, pool, brazil, mansion, countryside of São Paulo.png",
    },
    {
        nome: "Casa encantadora em Marília",
        imagem: "/imagens/Produtos/DALL·E 2023-03-10 14.04.29 - houses for rent, pool, brazil, mansion, countryside of São Paulo.png",
    },
    {
        nome: "Uma linda casa em Parapuã",
        imagem: "/imagens/Produtos/DALL·E 2023-03-10 14.04.20 - houses for rent, pool, brazil, mansion, countryside of São Paulo.png",
    },
    {
        nome: "Imóvel localizado em Guarujá",
        imagem: "/imagens/Produtos/DALL·E 2023-03-10 14.03.03 - houses for rent, pool, brazil, mansion.png",
    },
];

// Função para criar elementos HTML das casas
function criarElementosCasa(casa) {
    const produto = document.createElement("div");
    produto.classList.add("produto");

    const link = document.createElement("a");
    link.href = "/paginas/Aviso.html";

    const imagem = document.createElement("img");
    imagem.src = casa.imagem;
    imagem.alt = "Imagem da Casa";

    const nome = document.createElement("h3");
    nome.textContent = casa.nome;

    link.appendChild(imagem);
    produto.appendChild(link);
    produto.appendChild(nome);

    return produto;
}

// Função para adicionar casas ao contêiner
function adicionarCasasAoConteiner() {
    const casasContainer = document.getElementById("casas-container");

    casas.forEach((casa) => {
        const elementoCasa = criarElementosCasa(casa);
        casasContainer.appendChild(elementoCasa);
    });
}

// Chama a função para adicionar as casas quando a página carregar
window.addEventListener("load", adicionarCasasAoConteiner);
