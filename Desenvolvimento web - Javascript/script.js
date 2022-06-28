function aumentarItensNoInicio() {
    let lista = document.getElementsByTagName('ol')[0];
    const conteudo = document.createElement('li');
    conteudo.innerHTML = `Novo Item`;
    lista.insertBefore(conteudo, lista.firstChild);
}

function aumentarItensNoFinal() {
    let lista = document.getElementsByTagName('ol')[1];
    const conteudo = document.createElement('li');
    conteudo.innerHTML = `Novo Item`;
    lista.appendChild(conteudo);
}

function corrigriTitulos() {
    let titulo = document.getElementsByTagName('h1')[0];
    let subTitulo = document.getElementsByTagName('h2')[0];
    titulo.innerHTML = `Novo Titulo`;
    subTitulo.innerHTML = `Novo subtítulo`;
}

function addItem() {
    let newItem = document.getElementsByTagName('input')[0].value;
    let lista = document.getElementsByTagName('ol')[0];
    const conteudo = document.createElement('li');
    conteudo.innerHTML = newItem;
    lista.appendChild(conteudo);
    document.getElementsByTagName('input')[0].value = '';
}

function removeItem() {
    let removeItemNumber = document.getElementsByTagName('input')[1].value;
    let list = document.getElementsByTagName('ol')[0];
    let itemToBeRemoved = document.getElementsByTagName('li')[removeItemNumber - 1];
    let listSize = document.getElementsByTagName('ol')[0].childElementCount;
    if (listSize > removeItemNumber - 1) {
        list.removeChild(itemToBeRemoved);
    } else {
        alert("❌ Numero de item inválido");
    }
    document.getElementsByTagName('input')[1].value = '';
}

function sortItens() {
    let itens = document.getElementsByTagName('li');
    let listSize = document.getElementsByTagName('ol')[0].childElementCount;
    let aux;
    let iterations = 0;
    while (iterations < listSize - 1) {
        for (let i = 0; i < listSize - 1; i++) {
            if (itens[i].textContent > itens[i + 1].textContent) {
                aux = itens[i].textContent;
                itens[i].textContent = itens[i + 1].textContent;
                itens[i + 1].textContent = aux;
            }
        }
        iterations += 1;
    }
}

//exercicio 3


function zoomIn() {
    let img = document.getElementsByClassName("zoom");
    let qtdImg = document.getElementById("container").childElementCount;

    if (img[0].classList.contains("d450")) {
        console.log("tamanho máximo");
    } else if (img[0].classList.contains("d150")) {
        for (let i = 0; i < qtdImg; i++) {
            img[i].classList.remove("d150");
            img[i].classList.add("d300");
        }
    } else if (img[0].classList.contains("d300")) {
        for (let i = 0; i < qtdImg; i++) {
            img[i].classList.remove("d300");
            img[i].classList.add("d450");
        }
    }
}

function zoomOut() {
    let img = document.getElementsByClassName("zoom");
    let qtdImg = document.getElementById("container").childElementCount;

    if (img[0].classList.contains("d450")) {
        for (let i = 0; i < qtdImg; i++) {
            img[i].classList.remove("d450");
            img[i].classList.add("d300");
        }
    } else if (img[0].classList.contains("d150")) {
        console.log("tamanho mínimo");
    } else if (img[0].classList.contains("d300")) {
        for (let i = 0; i < qtdImg; i++) {
            img[i].classList.remove("d300");
            img[i].classList.add("d150");
        }
    }
}

//exercicios apostila 1 
// 1- Faça um código JavaScript que apresente um popup na tela com a mensagem “Hello World”

//window.onload(alert("Hello World!"));

/* 2 - Faça um código JavaScript que solicite a entrada de dois números inteiros. Então o
programa deve mostrar um popup contendo a soma entre eles, um popup contendo a
média, um popup contendo a diferença entre o primeiro e o segundo número e um popup
contendo o produto deles.*/

function contas(number1, number2) {
    let soma = number1 + number2;
    let media = (number1 + number2) / 2;
    let diferenca = number1 - number2;
    let produto = number1 * number2;
    alert(number1 + " + " + number2 + " = " + soma);
    alert(" Média entre " + number1 + number2 + " = " + media);
    alert(number1 + " - " + number2 + " = " + diferenca);
    alert(number1 + " x " + number2 + " = " + produto);
}

// contas(5, 3);

/*3 – Repita o exercício anterior porém dessa vez apresente os resultados na tela do
navegador ao invés de através de popups*/

function contas2(number1, number2) {
    const conteudo = document.getElementById("lista1");
    let soma = number1 + number2;
    let media = (number1 + number2) / 2;
    let diferenca = number1 - number2;
    let produto = number1 * number2;
    conteudo.appendChild(document.createTextNode(number1 + " + " + number2 + " = " + soma + ";\n"));
    conteudo.appendChild(document.createTextNode("Média entre " + number1 + " e " + number2 + " = " + media + ";\n"));
    conteudo.appendChild(document.createTextNode(number1 + " - " + number2 + " = " + diferenca + ";\n"));
    conteudo.appendChild(document.createTextNode(number1 + " x " + number2 + " = " + produto + ";\n"));
}

contas2(5, 3);

/* 4 - Faça um código JavaScript que solicite que seja escolhida a opção 1, opção 2 ou opção
3. Após escolhida a opção, mostre a opção que ele escolheu ou caso ele tenha escolhida
uma opção inexistente, apresente a mensagem “Opção inválida”.*/

function opcoes(opcao) {
    console.log("Digite o número de uma das seguintes opções:\nOpção 1\nOpção 2\nOpção 3");
    // if (opcao === 1) {
    //     console.log("Opção 1");
    // } else if (opcao === 2) {
    //     console.log("Opção 2");
    // } else if (opcao === 3) {
    //     console.log("Opção 3");
    // } else {
    //     console.log("Opção inválida");
    // }
    //if else mais curto...
    (opcao === 1) ? console.log("Opção 1"): (opcao === 2) ? console.log("Opção 2") :
        (opcao === 3) ? console.log("Opção 3") :
        console.log("Opção inválida");
}

opcoes(2);

//Lista 2 
/*• 1 – Dado o array linguagens contendo: ["HTML", "CSS", "JavaScript", "C#", "Assembly“], crie
uma função que recebe um vetor e mostra o conteúdo dele usando a função console.log.*/

let array = ["HTML", "CSS", "JavaScript", "C#", "Assembly"];
const showArray = (array) => {
    console.log(array);
}
showArray(array);

/*• 2 – Crie um objeto endereço com os seguintes atributos:
✓ Rua: Ariovaldo Silveira Franco
✓ Número: 567
✓ Bairro : Jardim 31 de Março
✓ Cidade: Mogi Mirim
✓ UF: SP
• Após criar o objeto, crie uma função que receba o objeto endereço e retorne os seus
atributos*/

const endereco = {
    Rua: "Ariovaldo Silveira Franco",
    Número: "567",
    Bairro: "Jardim 31 de Março",
    Cidade: "Mogi Mirim",
    UF: "SP"
}

const mostrarDados = (dados) => {
    console.log(dados);
}

mostrarDados(endereco);

/*• 3 – Crie uma função que dado um intervalo (entre x e y) exiba todos número pares*/
const imprimirPares = (x, y) => {
    if (x % 2 === 0) {
        for (let i = x; i <= y; i += 2) {
            console.log(i);
        }
    } else {
        for (let i = x + 1; i <= y; i += 2) {
            console.log(i);
        }
    }
}
imprimirPares(6, 18);

/*• 4 – Crie uma página que contenha dois botões. Um deles possui o texto “Fale comigo!”, e
após clicado ele deve mudar o seu texto para “Texto alterado!!” e acima dele deve
aparecer um texto (na página mesmo) “Olá pessoa, deu certo!”. O outro botão deve ter
o texto “Altere a cor do fundo” e ao clicar nele a cor de fundo da página deve ser
alterada para uma cor aleatória*/

function faleComigo() {
    document.getElementById("texto").innerHTML = `Olá pessoa, deu certo!`
    document.getElementById("faleComigo").innerText = `Texto Alterado!!`;
}

function alterarCor() {
    randomRed = Math.floor(Math.random() * 255);
    randomGreen = Math.floor(Math.random() * 255);
    randomBlue = Math.floor(Math.random() * 255);
    novaCor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
    document.body.style.backgroundColor = novaCor;
}