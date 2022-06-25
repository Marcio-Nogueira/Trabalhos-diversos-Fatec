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