let screen = document.getElementById("screen");
let ctx = screen.getContext("2d");

let processList = [
    createProcess("A", 6),
    createProcess("B", 8),
    createProcess("C", 4),
    createProcess("D", 2)
];

function createProcess(name, memoryPages) {
    return {
        name: name,
        memoryPages: memoryPages,
        pagesArray: []
    }
}

function addProcess() {
    let name = document.getElementById("processName").value;
    let nPages = document.getElementById("qtMemoryPages").value;
    let nPagesFormated = parseInt(nPages);
    if (name != '' && nPagesFormated != '') {
        processList.push(createProcess(name, nPagesFormated));
        // printList();
        alert("✔️ Processo adcionado com sucesso");
        document.getElementById("processName").value = '';
        document.getElementById("qtMemoryPages").value = '';
    } else {
        alert("❌ Todos os campos devem ser preenchidos para adcionar um novo processo");
    }
}

function toArray() {
    totalSize();
    let size = totalSize();
    processList.forEach(process => {
        for (let i = process.memoryPages; i > 0; i--) {
            process.pagesArray.push(size);
            size -= 1;
        }
        // process.pagesArray.sort((a, b) => a - b);
    });
    // console.log(processList[0].pagesArray);
    // console.log(processList[1].pagesArray);
    // console.log(processList[2].pagesArray);
    // console.log(processList[3].pagesArray);
}

function totalSize() {
    let totalSize = 0;
    processList.forEach(process => {
        totalSize += process.memoryPages;
    })
    return totalSize;
}

toArray();
// console.log(processList[0].pagesArray);

function mergeProccess() {
    const merged = [];
    processList.forEach(process => {
        merged.push(...process.pagesArray);
    });
    merged.sort((a, b) => a - b);

    return merged;
}

// console.log(mergeProccess().length);

function memoryFrames() {
    let memoryFrames = document.getElementById("memoryFrames").value;
    let memoryFramesFormated = parseInt(memoryFrames);
    // console.log("teste" + memoryFramesFormated)
    return memoryFramesFormated;
}

function referenceString() {
    let refString = document.getElementById("refString").value;
    let refStringArray = [...refString];
    let numberArray = refStringArray.map(Number);
    // console.log(numberArray);
    // console.log(refStringArray);
    return refStringArray;
}

function screenSize() {
    let cloneList = processList.slice();
    screen.width = (referenceString().length * 20) + 60;
    screen.height = ((memoryFrames() + 1) * 20);
    // console.log(screen.width);
    // console.log(screen.height);
    // console.log(memoryFrames());
}

function drawChart() {
    screenSize();
    // console.log(screen.width);
    for (let j = 60; j < screen.width; j += 20) {
        for (let i = 0; i < screen.height; i += 20) {
            ctx.rect(j, i, 20, 20);
            ctx.stroke();
        }
    }
    printName();
    // fillChart();
}
// console.log(processList[0].name)

function printName() {
    ctx.font = '20px serif';
    index = 0;
    // console.log(referenceString()[index]);
    ctx.fillText("Ref.", 5, 18);
    ctx.moveTo(0, 20);
    ctx.lineTo(60, 20);
    ctx.stroke();
    for (let j = 60; j < screen.width; j += 20) {
        ctx.fillText(referenceString()[index], j + 5, 18);
        index += 1;
    }
    index = 1;
    for (let i = 40; i < screen.height + 20; i += 20) {
        ctx.fillText("F." + index, 0, i - 2);
        ctx.moveTo(0, i);
        ctx.lineTo(60, i);
        ctx.stroke();
        index += 1;
    }
}

function fifo() {
    index = 0;
    let cloneArray = referenceString().slice();
    let compareArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // console.log(referenceString()[index]);
    // console.log(cloneArray[index]);
    ctx.fillText(referenceString()[0], 0 * 20 + 62, 0 * 20 + 38);
    compareArray[0] = referenceString()[0];
    ctx.fillText(referenceString()[1], 1 * 20 + 62, 1 * 20 + 38);
    compareArray[1] = referenceString()[0];
    ctx.fillText(referenceString()[2], 2 * 20 + 62, 2 * 20 + 38);
    compareArray[2] = referenceString()[0];

    for (let i = 0; i < (screen.height + 20) / 20; i++) {
        for (let j = 0; j < (screen.width / 20); j++) {
            if (compareArray[i].includes(referenceString()[j]) == true) {
                ctx.fillText(referenceString()[j], j * 20 + 62, i * 20 + 38);
                compareArray[i] = referenceString()[j];
            }
            // if (referenceString()[j] == cloneArray[j] && i < memoryFrames() && referenceString()[j] != compareArray[j]) {
            //     console.log(compareArray[j]);
            //     console.log(compareArray[j - 1]);
            //     ctx.fillText(referenceString()[j], j * 20 + 62, i * 20 + 38);
            //     compareArray[j] = referenceString()[j];
            //     console.log(referenceString()[j]);
            //     console.log(cloneArray[j]);
            //     console.log(i);
            //     index += 1;
            // }

        }


    }
}

function run() {
    drawChart();
    fifo();
}