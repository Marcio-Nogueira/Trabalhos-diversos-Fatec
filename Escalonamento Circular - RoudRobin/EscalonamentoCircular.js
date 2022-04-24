let processNumber = 0;

let processList = [
    // createProcess("A", 6),
    // createProcess("B", 8),
    // createProcess("C", 4),
    // createProcess("D", 2)
]

function adcionar() {
    let name = document.getElementById("processName").value;
    let time = document.getElementById("processingTime").value;
    let timeFormated = parseInt(time);
    processList.push(createProcess(name, timeFormated));
    printList();
    document.getElementById("processName").value = '';
    document.getElementById("processingTime").value = '';
}

function printList() {
    let processos = document.getElementById("processos");
    processos.innerHTML += `<p>Nome do processo: ${processList[processList.length-1].name} - Tempo de processamento: ${processList[processList.length-1].executionTime}s</p>`;
}

function createProcess(name, executionTime) {

    return {
        name: name,
        executionTime: executionTime,
        inExecution: executionTime,
        waitTime: 0,
        graphicExecution: executionTime,
        generatedProcessNumber: processNumber++,
    }
}

function sumProcessingTime() {
    let sumTime = 0;
    for (let i = 0; i < processList.length; i++) {
        sumTime += processList[i].executionTime;
    }
    return sumTime;
}


function roundRobin() {
    sumProcessingTime()
    let quantum;
    processingTime = sumProcessingTime();
    let turnAround = 0;
    let tmr = 0;

    let dados = document.getElementById("dados");
    let historico = document.getElementById("historico");
    let index = 0;
    let counter = 0;
    let iterations = Math.ceil(processingTime / processList.length);
    console.log(iterations);
    do {
        for (let i = 0; i < processList.length; i++) {
            quantum = 2;
            if (processList[i].inExecution < quantum) {
                quantum = processList[i].inExecution;
            }
            processList[i].inExecution -= quantum;
            turnAround += quantum;
            if (processList[i].inExecution > 0) {
                historico.innerHTML += `<p>${++index}. Processo ${processList[i].name} Faltam ${processList[i].inExecution}s para terminar o processo </p>`;
            }
            if (processList[i].inExecution <= 0) {
                historico.innerHTML += `<p>${++index}. Processo ${processList[i].name} finalizado </p>`;

                tmr += turnAround;
                processList[i].waitTime = turnAround - processList[i].executionTime;
                dados.innerHTML += `<p>Tempo de turnaround de ${processList[i].name}: ${turnAround}s</p>`;
                dados.innerHTML += `<p>Tempo de espera de ${processList[i].name}: ${processList[i].waitTime}s</p>`;
                processList.splice(i, 1);
            }
        }
        counter++;
    } while (counter <= (iterations + 10));
    dados.innerHTML += `<p>Tempo médio de retorno: ${(tmr/4)}s </p>`;
    dados.innerHTML += `<p>Tempo médio de espera: ${(tmr - processingTime)/4}s </p>`;
    dados.innerHTML += `<p>Tempo de processamento total do processador: ${processingTime}s </p>`;
}

function executar() {
    drawChart();
    roundRobin();
    desfixarFooter();
}

function desfixarFooter() {
    document.getElementById('footer').style.position = "static";
}