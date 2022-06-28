let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");


function screenSize() {
    let cloneList = processList.slice();
    tela.width = (sumProcessingTime() * 20) + 60;
    tela.height = (cloneList.length * 20);
    console.log(tela.width);
    console.log(tela.height);
}


function drawChart() {
    screenSize();
    console.log(tela.width);
    for (let j = 60; j < tela.width; j += 20) {
        for (let i = 0; i < tela.height; i += 20) {
            ctx.rect(j, i, 20, 20);
            ctx.stroke();
        }
    }
    printName();
    fillChart();
}

function printName() {
    let cloneList = processList.slice();
    ctx.font = '20px serif';
    index = -1;
    for (let i = 20; i < tela.height + 20; i += 20) {
        ctx.fillText(cloneList[++index].name.substr(-20, 4), 0, i - 2);
        ctx.moveTo(0, i);
        ctx.lineTo(60, i);
        ctx.stroke();
    }
}

function fillChart() {
    let cloneList = processList.slice();
    let quantum = 2;
    console.log(cloneList);
    let counter = 0;
    let iQuantum = 0;
    index = 0;


    for (let j = 60; j < tela.width; j += 20) {

        if (cloneList[index].graphicExecution > 0 && iQuantum < quantum) {
            ctx.fillRect(j, cloneList[index].generatedProcessNumber * 20, 20, 20);
            cloneList[index].graphicExecution -= 1;
            iQuantum += 1;
            console.log(counter + " -if1- " + index);
        }
        if (cloneList[index].graphicExecution <= 0) {
            console.log("processo " + cloneList[index].name + " Finalizado");
            cloneList.splice(index, 1);
            iQuantum = 0;
            console.log(counter + " -if2- " + index);
        }
        if (iQuantum == quantum) {
            index += 1;
            iQuantum = 0;
            console.log(counter + " -if3- " + index);
        }
        if (index == cloneList.length) {
            index = 0;
            iQuantum = 0;
            console.log(counter + " -if4- " + index);
        }
        console.log(cloneList[index]);
        console.log(counter);
        counter++
    }
}