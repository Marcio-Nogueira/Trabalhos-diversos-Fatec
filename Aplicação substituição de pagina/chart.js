let screen = document.getElementById("screen");
let ctx = screen.getContext("2d");

const p1 = [1, 2, 3];
const p2 = [4, 5];
const p3 = [6];
const nested = [
    [7, 8, 9],
    [10, 11, 12]
];

console.log(nested);

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
    if (name !='' && nPagesFormated != '') {
    processList.push(createProcess(name, nPagesFormated));
    // printList();
    alert("✔️ Processo adcionado com sucesso");
    document.getElementById("processName").value = '';
    document.getElementById("qtMemoryPages").value = '';
} else {
    alert("❌ Todos os campos devem ser preenchidos para adcionar um processo");
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
    console.log(processList[0].pagesArray);
    console.log(processList[1].pagesArray);
    console.log(processList[2].pagesArray);
    console.log(processList[3].pagesArray);
}

function totalSize() {
    let totalSize = 0;
    processList.forEach(process => {
        totalSize += process.memoryPages;
    })
    return totalSize;
}

toArray();
console.log(processList[0].pagesArray);

function mergeProccess() {
    const merged = [];
    // merged.push(...[...p1, ...p2, ...p3, ...nested.flat()]);
    processList.forEach(process => {
        merged.push(...process.pagesArray);
    });
    merged.sort((a, b) => a - b);

    return merged;
}

console.log(mergeProccess().length);


function screenSize() {
    let cloneList = processList.slice();
    screen.width = (mergeProccess().length * 20) + 60;
    screen.height = (cloneList.length * 20);
    console.log(screen.width);
    console.log(screen.height);
}


function drawChart() {
    screenSize();
    console.log(screen.width);
    for (let j = 60; j < screen.width; j += 20) {
        for (let i = 0; i < screen.height; i += 20) {
            ctx.rect(j, i, 20, 20);
            ctx.stroke();
        }
    }
    printName();
    // fillChart();
}
console.log(processList[0].name)
function printName() {
    // let cloneList = processList.slice();
    ctx.font = '20px serif';
    index = -1;
    for (let i = 20; i < screen.height + 20; i += 20) {
        ctx.fillText(processList[++index].name.substr(-20, 4), 0, i - 2);
        ctx.moveTo(0, i);
        ctx.lineTo(60, i);
        ctx.stroke();
    }
}

function run() {
    drawChart();
}
