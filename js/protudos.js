const params = new URLSearchParams(window.location.search);
const id = params.get('id');

// BANCO DE DADOS / DADOS DE PRODUTOS
const produtos = [

    {
        id:"1",
        img:["img/maquinho01.jpg","img/maquinho02.jpg","img/maquinho03.jpg"],
        nome:"Macaquinho Essence",
        preco:"R$ 120,00",
        tamanhos:["P","M","G"],
        descricao:''

    },
    {
        id:"2",
        img:["img/conjunto-vermelho02.jpg","img/conjunto-vermelho01.jpg"],
        nome:"Conjunto Poliamida",
        preco:"R$ 140,00",
        tamanhos:['P','M'],
        descricao:''
    },
    {
        id:"3",
        img:["img/conjunto-canelado01.jpg","img/conjunto-canelado02.jpg","img/conjunto-canelado03.jpg"],
        nome:"Conjunto Canelado",
        preco:"R$ 50,00",
        tamanhos:['P','M'],
        descricao:''
    },
    {
        id:"4",
        img:["img/conjunto-ocean01.jpg","img/conjunto-ocean02.jpg","img/conjunto-ocean03.jpg"],
        nome:"Conjunto Ocean Move",
        preco:"R$ 110,00",
        tamanhos:['P','M'],
        descricao:''
    },
    {
        id:"5",
        img:["img/conjunto-power01.jpg","img/conjunto-power02.jpg","img/conjunto-power03.jpg"],
        nome:"Conjunto Canelado Power",
        preco:"R$ 110,00",
        tamanhos:['P','M'],
        descricao:''
    }


];

//PARTE INFORMAÇÃO PRODUTO
const produto = produtos.find(function(p){
    return p.id === id;
})

if(produto){

    document.getElementById("nome-produto").textContent = produto.nome;
    document.getElementById("preco-produto").textContent = produto.preco;
    document.getElementById("descricao").textContent = produto.descricao;

    // PARTE IMAGEM
    const imagem_produto = document.getElementById('imagem-produto');

    produto.img.forEach(function(imgproduto){
    const imagem = document.createElement('img')
    imagem.src = imgproduto;
    imagem_produto.appendChild(imagem)
});

    const tamanhosInputs = document.querySelectorAll('input[name="tamanho1"]');

    tamanhosInputs.forEach(input => {
    const label = document.querySelector(`label[for="${input.id}"]`);

    // se o tamanho NÃO existir no produto
    if (!produto.tamanhos.includes(input.id)) {
        input.disabled = true;
        label.classList.add('indisponivel');
        label.innerHTML += '<span class="x">✕</span>';
    }
});


};


// PARTE TAMANHO 
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

const btn_comprar = document.getElementById('btn-comprar');
const exit = document.getElementById('exit');
const btn_enviar = document.getElementById('btn-enviar');
const formulario = document.getElementById('form-dados');


btn_comprar.addEventListener('click',btnComprar)
exit.addEventListener('click',btnExit)
btn_enviar.addEventListener('click',btnEnviar);

// PARTE BOTÃO EXIT
function btnComprar(){

    if(!tamanhoSelecionado){
        mostrarAlerta('Selecione um tamanho', 'erro')
        return;
    };

     formulario.classList.add('ativo')
     
}

function btnExit(){
    formulario.classList.remove('ativo')
}


let bairro = '';
let rua = '';
let cidade = '';
let uf = '';

// CEP / PRENCHIMENTO AUTOMATICO

const inputCep = document.getElementById('cep');

inputCep.addEventListener('input', async function () {

    const cep = this.value.replace(/\D/g, '');

    if (cep.length === 8) {

        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await res.json();

        if (dados.erro) {
            alert('CEP não encontrado');
            return;
        }

        bairro = dados.bairro;
        rua = dados.logradouro;
        cidade = dados.localidade;
        uf = dados.uf;

        document.getElementById('input-bairro').value = bairro;
        document.getElementById('input-rua').value = rua;
        document.getElementById('input-cidade').value = cidade;
        document.getElementById('input-uf').value = uf;
    }
});


// BOTAO ENVIAR / WHASAPP

async function btnEnviar(){

    const nome = document.getElementById('nome').value.trim();
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const numeroCasa = document.getElementById('numero-casa').value
    const complemento = document.getElementById('input-complemento').value.trim();

     if(!nome.trim()){
        mostrarAlerta('Preencha nome','erro');
        return;
    }

    if(cep.length !== 8){
        mostrarAlerta('Preencha o Cep','erro')
        return;
    }

    if(!numeroCasa){
        mostrarAlerta('Preencha o numero','erro')
        return;
    }


const mensagem = `
Olá, Meu nome é ${nome} e gostaria de realizar um pedido com os seguintes dados:

*PRODUTO:*

*Nome*: ${produto.nome}
*Preço*: ${produto.preco}
*Tamanho*: ${tamanhoSelecionado}

*ENDEREÇO DE ENTREGA:*

*Bairro*: ${bairro}
*Rua*: ${rua}
*Número*: ${numeroCasa}
*Cidade/UF*: ${cidade} - ${uf}
*CEP*: ${cep}
*Complemento*: ${complemento}

Fico no aguardo da confirmação.
Muito obrigado! 
`;

const telefone = '5511984210737';
const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

window.open(url, '_blank');
};


// MSG ALERTA

const alerta = document.getElementById('alerta');
const alertaTexto = document.getElementById('alerta-texto');

function mostrarAlerta(mensagem, tipo){
    alertaTexto.textContent = mensagem;

    alerta.classList.remove('erro', 'sucesso');
    alerta.classList.add('ativo', tipo);

    setTimeout(() => {
        alerta.classList.remove('ativo');
    }, 3000);
}

const btnMenu = document.getElementById('menu');
const menuLateral = document.getElementById('menu-lateral');
const menuFechar = document.getElementById('menu-fechar');
const menuOverlay = document.getElementById('menu-overlay');

btnMenu.addEventListener('click', () => {
    menuLateral.classList.add('ativo');
    menuOverlay.classList.add('ativo');
});

menuFechar.addEventListener('click', fecharMenu);
menuOverlay.addEventListener('click', fecharMenu);

function fecharMenu(){
    menuLateral.classList.remove('ativo');
    menuOverlay.classList.remove('ativo');
}
