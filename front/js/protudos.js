const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const produtos = [

    {
        id:"1",
        img:["img/img1.jpg","img/img7.jpg"],
        nome:"conjuto shek",
        preco:"R$ 89,00",
        descricao:'A Camiseta Dry Fit Fluid Move na cor chumbo une estilo moderno e desempenho excepcional! Produzida em tecido dry fit leve e respirável, proporciona rápida absorção de suor e secagem ágil, garantindo conforto térmico. Ideal para treinos intensos ou momentos casuais, com um design sofisticado e versátil.'

    },
    {
        id:"2",
        img:["img/img3.jpg","img/img5.jpg"],
        nome:"conjuto shek",
        preco:"R$ 90,00"
    }

];


const produto = produtos.find(function(p){
    return p.id === id;
})

if(produto){

    document.getElementById("nome-produto").textContent = produto.nome;
    document.getElementById("preco-produto").textContent = produto.preco;
    document.getElementById("descricao").textContent = produto.descricao;

};


const imagem_produto = document.getElementById('imagem-produto');

produto.img.forEach(function(imgproduto){
    const imagem = document.createElement('img')
    imagem.src = imgproduto;
    imagem_produto.appendChild(imagem)
});

const tamanhos = document.querySelectorAll('input[name="tamanho1"]');
let tamanhoSelecionado = null;

tamanhos.forEach(tamanho => {
    tamanho.addEventListener('change', function() {
        tamanhoSelecionado = this.id; // salva o tamanho
         

        // remove de todos
       const label01 = document.querySelectorAll('.medidas label')
       label01.forEach(function(l){
            l.classList.remove('ativo');
        });

       // adiciona no label correto
       const label02 = document.querySelectorAll('.medidas label')
       label02.forEach(function(l){

        if(l.getAttribute('for') === this.id) {

             l.classList.add('ativo');   
        }
            
       }.bind(this));

    });

});
