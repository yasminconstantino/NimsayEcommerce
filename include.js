document.addEventListener("DOMContentLoaded", function () {
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

    const containerProduto = document.getElementById('container-produto');
    

    // Loop through the catalog and create HTML elements for each product
    catalogooo.forEach(product => {
        const productElement = document.createElement('div');
        const quantidadeProduto = 1; // Replace this with your logic to get the quantity

        productElement.innerHTML = `
            <div class="produto">
                <img src="img/${product.imagem}" alt="${product.nome}">
                <p class="pnome">${product.nome}</p>
                <p class="pmarca">${product.marca}</p>
                <p class="ppreco">$${product.preco}</p>

                <div class="quanti"><p id='quantidade-${product.id}' >${quantidadeProduto}</p></div>
            </div>
        `;
        containerProduto.appendChild(productElement);
    });
});
