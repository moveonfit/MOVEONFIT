const params = new URLSearchParams(window.location.search);
const id = params.get('id');



/* 
  {
    id:"",
    img:["img/.jpg","img/.jpg","img/.jpg"],
    nome:"",
    preco:"R$ 00,00",
    tamanhos:["","",""],
    cores:[{ nome: '', cor: ''}],
    descricao:''
  }

*/

// BANCO DE DADOS / DADOS DE PRODUTOS
const produtos = [

    {
        id:"1",
        img:["img/maquinho01.jpg","img/maquinho02.jpg","img/maquinho03.jpg"],
        nome:"Macaquinho Essence",
        preco:"R$ 120,00",
        tamanhos:["P","M","G"],
        cores:[{ nome: 'verde', cor: '#006414',}],
        descricao:'Roupa fitness feminina confeccionada em tecido poliamida, com toque macio, alta elasticidade e ajuste perfeito ao corpo. Oferece respirabilidade, secagem rápida e máximo conforto durante os treinos. Ideal para atividades físicas e uso diário, unindo desempenho, estilo e durabilidade'

    },
    {
        id:"2",
        img:["img/conjunto-vermelho02.jpg","img/conjunto-vermelho01.jpg"],
        nome:"Conjunto Poliamida",
        preco:"R$ 140,00",
        tamanhos:['P','M'],
        cores:[{ nome: 'verde', cor: '#e80729',}],
        descricao:'Roupa fitness feminina confeccionada em tecido poliamida, com toque macio, alta elasticidade e ajuste perfeito ao corpo. Oferece respirabilidade, secagem rápida e máximo conforto durante os treinos. Ideal para atividades físicas e uso diário, unindo desempenho, estilo e durabilidade'
    },
    {
        id:"3",
        img:["img/conjunto-canelado01.jpg","img/conjunto-canelado02.jpg","img/conjunto-canelado03.jpg"],
        nome:"Conjunto Canelado",
        preco:"R$ 50,00",
        tamanhos:['P','M'],
        cores:[{ nome: 'marrom', cor: '#722F37'}],
        descricao:'Roupa fitness feminina confeccionada em tecido poliamida, com toque macio, alta elasticidade e ajuste perfeito ao corpo. Oferece respirabilidade, secagem rápida e máximo conforto durante os treinos. Ideal para atividades físicas e uso diário, unindo desempenho, estilo e durabilidade'
    },
    {
        id:"4",
        img:["img/conjunto-ocean01.jpg","img/conjunto-ocean02.jpg","img/conjunto-ocean03.jpg"],
        nome:"Conjunto Ocean Move",
        preco:"R$ 110,00",
        tamanhos:['P','M'],
        cores:[{ nome: 'branco', cor: '#ffff'}],
        descricao:'Roupa fitness feminina confeccionada em tecido poliamida, com toque macio, alta elasticidade e ajuste perfeito ao corpo. Oferece respirabilidade, secagem rápida e máximo conforto durante os treinos. Ideal para atividades físicas e uso diário, unindo desempenho, estilo e durabilidade'
    },
    {
        id:"5",
        img:["img/conjunto-power01.jpg","img/conjunto-power02.jpg","img/conjunto-power03.jpg"],
        nome:"Conjunto Canelado Power",
        preco:"R$ 110,00",
        tamanhos:['P','M'],
        cores:[{ nome: 'azul', cor: '#1E90FF'}],
        descricao:'Roupa fitness feminina confeccionada em tecido poliamida, com toque macio, alta elasticidade e ajuste perfeito ao corpo. Oferece respirabilidade, secagem rápida e máximo conforto durante os treinos. Ideal para atividades físicas e uso diário, unindo desempenho, estilo e durabilidade'
    },
    {
    id:"6",
    img:["img/conjunto-vinho.jfif","img/conjunto-verde03.jfif","img/conjunto-vinho01.jfif","img/conjunto-verde04.jfif"],
    nome:"Conjunto Vinho",
    preco:"R$ 99,99",
    tamanhos:["P","M"],
    cores:[{ nome: 'vinho', cor: '#722F37'},
           { nome: 'azul', cor: '#1E90FF'},
           { nome: 'verde', cor: 'rgb(17, 238, 17)'}
    ],
    descricao:'Roupa fitness feminina confeccionada em tecido poliamida, com toque macio, alta elasticidade e ajuste perfeito ao corpo. Oferece respirabilidade, secagem rápida e máximo conforto durante os treinos. Ideal para atividades físicas e uso diário, unindo desempenho, estilo e durabilidade'
  },
    {
    id:"7",
    img:["img/conjunto-maquinho-power03.jfif","img/conjunto-maquinho-power02.jfif","img/conjunto-maquinho-power01.jfif"],
    nome:"Conjunto Maquinho Power",
    preco:"R$ 90,00",
    tamanhos:["P","M"],
    cores:[{ nome: 'marron', cor: '#8D4925'},
           { nome: 'azul', cor: '#1E90FF'}
    ],
    descricao:'Roupa fitness feminina confeccionada em tecido poliamida, com toque macio, alta elasticidade e ajuste perfeito ao corpo. Oferece respirabilidade, secagem rápida e máximo conforto durante os treinos. Ideal para atividades físicas e uso diário, unindo desempenho, estilo e durabilidade'
  },
    {
    id:"8",
    img:["img/conjunto-azul-power01.jfif","img/conjunto-azul-power02.jfif"],
    nome:"Conjunto Power",
    preco:"R$ 80,00",
    tamanhos:["P","M"],
    cores:[{ nome: 'azul marinho', cor: '#1E90FF'}],
    descricao:'Roupa fitness feminina confeccionada em tecido poliamida, com toque macio, alta elasticidade e ajuste perfeito ao corpo. Oferece respirabilidade, secagem rápida e máximo conforto durante os treinos. Ideal para atividades físicas e uso diário, unindo desempenho, estilo e durabilidade'
  },
    {
    id:"9",
    img:["img/short-marron01.jfif","img/short-marron02.jfif","img/short-marron03.jfif"],
    nome:"Short",
    preco:"R$ 40,00",
    tamanhos:["P","M","G","GG"],
    cores:[{ nome: 'marrom', cor: '#8D4925'},
           { nome: 'vermelho', cor: '#e80729'},
           { nome: 'branco', cor: '#ffff'},
           { nome: 'lilás', cor: '#C8A2C8'}
    ],
    descricao:'Roupa fitness feminina confeccionada em tecido poliamida, com toque macio, alta elasticidade e ajuste perfeito ao corpo. Oferece respirabilidade, secagem rápida e máximo conforto durante os treinos. Ideal para atividades físicas e uso diário, unindo desempenho, estilo e durabilidade'
  },
    {
    id:"10",
    img:["img/conjunto-primium01.jfif"],
    nome:"Conjunto Premium",
    preco:"R$ 140,00",
    tamanhos:["GG"],
    cores:[{ nome: 'verde pistache', cor: '#93C572'}],
    descricao:'Roupa fitness feminina confeccionada em tecido poliamida, com toque macio, alta elasticidade e ajuste perfeito ao corpo. Oferece respirabilidade, secagem rápida e máximo conforto durante os treinos. Ideal para atividades físicas e uso diário, unindo desempenho, estilo e durabilidade'
  },
  {
    id:"11",
    img:["img/calça-leggings02.jfif"],
    nome:"Calça Legging",
    preco:"R$ 45,00",
    tamanhos:["M","G","GG"],
    cores:[{ nome: 'vermelho', cor: '#e80729'},
           { nome: 'lilás', cor: '#C8A2C8'},
           {nome:'cinza', cor:'#B0B0B0'},
           { nome: 'verde militar', cor: '#4B5320'},
           { nome: 'azul marinho', cor: '#265b91'}
    ],
    descricao:'Roupa fitness feminina confeccionada em tecido poliamida, com toque macio, alta elasticidade e ajuste perfeito ao corpo. Oferece respirabilidade, secagem rápida e máximo conforto durante os treinos. Ideal para atividades físicas e uso diário, unindo desempenho, estilo e durabilidade'
  },
  {
    id:"12",
    img:["img/camisa-adidas01.jfif"],
    nome:"Camisa Adidas",
    preco:"R$ 35,00",
    tamanhos:["M","GG"],
    cores:[{nome:'bege', cor:'#F5F5DC'},
           { nome: 'preto', cor: '#000000'},
           { nome: 'vinho', cor: '#6A0F1C'}],
    descricao:'Roupa fitness feminina confeccionada em tecido poliamida, com toque macio, alta elasticidade e ajuste perfeito ao corpo. Oferece respirabilidade, secagem rápida e máximo conforto durante os treinos. Ideal para atividades físicas e uso diário, unindo desempenho, estilo e durabilidade'
  },
  {
    id:"13",
    img:["img/camisa-nike01.jfif"],
    nome:"Camisa Nike",
    preco:"R$ 40,00",
    tamanhos:["M","G","GG"],
    cores:[{ nome: 'rosa', cor: '#F48FB1'},
           { nome: 'azul', cor: '#42A5F5'}
    ],
    descricao:'Roupa fitness feminina confeccionada em tecido poliamida, com toque macio, alta elasticidade e ajuste perfeito ao corpo. Oferece respirabilidade, secagem rápida e máximo conforto durante os treinos. Ideal para atividades físicas e uso diário, unindo desempenho, estilo e durabilidade'
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
let corSelecionada = null;

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

    if (produto.cores && produto.cores.length > 0 && !corSelecionada) {
        mostrarAlerta('Selecione uma cor', 'erro');
        return;
    }

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


const listaCores = document.getElementById('lista-cores');

if (!produto.cores || produto.cores.length === 0) {
    listaCores.style.display = 'none';
} else {
    listaCores.innerHTML = '';

    produto.cores.forEach(c => {
        const span = document.createElement('span');
        span.style.backgroundColor = c.cor;
        span.title = c.nome;

        span.addEventListener('click', () => {
            // salva a cor escolhida
            corSelecionada = c.nome;

            // marca visualmente o span
            document.querySelectorAll('.cores span').forEach(s => s.classList.remove('ativo'));
            span.classList.add('ativo');
        });

        listaCores.appendChild(span);
    });
}



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
*Cor*: ${corSelecionada}

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

const telefone = '5511942697064';
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

// ABRIR MENU
btnMenu.addEventListener('click', () => {
    menuLateral.classList.add('ativo');
    menuOverlay.classList.add('ativo');
});

// FUNÇÃO PARA FECHAR MENU
function fecharMenu() {
    menuLateral.classList.remove('ativo');
    menuOverlay.classList.remove('ativo');
}

// FECHAR MENU
menuFechar.addEventListener('click', fecharMenu);
menuOverlay.addEventListener('click', fecharMenu);
