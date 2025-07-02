const out2 = document.getElementById('out2')
const out1 = document.getElementById('out1')
const tema = document.getElementById("tema")
const cor = document.getElementById("cor")
var estado = 1;

function mostraNaTela(digito) {
    out2.value += digito
    if (out2.value.substring(out2.value.length - 1) != '+'
        && out2.value.substring(out2.value.length - 1) != '-'
        && out2.value.substring(out2.value.length - 1) != '*'
        && out2.value.substring(out2.value.length - 1) != '/') {
        out1.value = eval(out2.value)
    }
    else {
        out1.value = eval(out2.value.substring(0, out2.value.length - 1))
    }
    if (out1.value.length > 15) {
        out1.style.fontSize = '37px'
    }
    else {
        out1.style.fontSize = '50px'
    }
}

function backspace() {
    out2.value = out2.value.substring(0, out2.value.length - 1)
    if (out2.value.substring(out2.value.length - 1) != '+'
        && out2.value.substring(out2.value.length - 1) != '-'
        && out2.value.substring(out2.value.length - 1) != '*'
        && out2.value.substring(out2.value.length - 1) != '/') {
        out1.value = eval(out2.value)
    }
    else {
        out1.value = eval(out2.value.substring(0, out2.value.length - 1))
    }
    if (out2.value == "") {
        out1.value = "";
    }
    if (out1.value.length > 15) {
        out1.style.fontSize = '37px'
    }
    else {
        out1.style.fontSize = '50px'
    }
}

function limpar() {
    out2.value = ""
    out1.value = ""
}

function mudartema() {
    if (estado == 1) {
        document.body.style.backgroundImage = "linear-gradient(to left,blue, green, blue)";
        title.style.color = "gold"
        estado = 2
        cor.style.backgroundColor = "orangered"
    }
    else {
        document.body.style.backgroundImage = "linear-gradient(to left,red, orange, red)"
        title.style.color = "brown"
        estado = 1
        cor.style.backgroundColor = "blue"
    }
}

const teclas = [
    '+','-','*','/','Backspace','Delete','.',
    '1','2','3','4','5','6','7','8','9','0'
]
document.addEventListener('keydown',(e)=>{
    for(let t in teclas){
        if(e.key === teclas[t]){
        console.log(teclas[t])
        document.getElementById(teclas[t]).click()
    }
    }
})