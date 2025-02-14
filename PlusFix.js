let disp = document.getElementById("display")
disp.innerHTML = " ";

function b0() {
    disp.innerHTML += 0;
}

function b1(){
    disp.innerHTML += 1;
}

function b2(){
    disp.innerHTML += 2;
}

function b3(){
    disp.innerHTML += 3;
}

function b4(){
    disp.innerHTML += 4;
}

function b5(){
    disp.innerHTML += 5;
}

function b6(){
    disp.innerHTML += 6;
}

function b7(){
    disp.innerHTML += 7;
}

function b8(){
    disp.innerHTML += 8;
}

function b9(){
    disp.innerHTML += 9;
}

function add() {
    disp.innerHTML += '+';
}

function sub(){
    disp.innerHTML += '-';
}

function mul(){
    disp.innerHTML += '*';
}

function div(){
    disp.innerHTML += '/';
}

function floordiv(){
    disp.innerHTML += '//';
}

function mod(){
    disp.innerHTML += '%';
}

function log() {
    disp.innerHTML += Math.log2(disp.innerHTML);
}

function calc() {
    disp.innerHTML = eval(disp.innerHTML);
}

function Delete() {
    disp.innerHTML = disp.innerHTML.toString().slice(0, -1);
}

function Clear(){
    disp.innerHTML = "  ";
}


document.getElementById("d0").addEventListener("click", b0)
document.getElementById("d1").addEventListener("click", b1)
document.getElementById("d2").addEventListener("click", b2)
document.getElementById("d3").addEventListener("click", b3)
document.getElementById("d4").addEventListener("click", b4)
document.getElementById("d5").addEventListener("click", b5)
document.getElementById("d6").addEventListener("click", b6)
document.getElementById("d7").addEventListener("click", b7)
document.getElementById("d8").addEventListener("click", b8)
document.getElementById("d9").addEventListener("click", b9)

document.getElementById("d10").addEventListener("click", add)
document.getElementById("d11").addEventListener("click", sub)
document.getElementById("d12").addEventListener("click", mul)
document.getElementById("d13").addEventListener("click", div)
document.getElementById("d14").addEventListener("click", floordiv)
document.getElementById("d15").addEventListener("click", mod)
document.getElementById("d16").addEventListener("click", log)
document.getElementById("d17").addEventListener("click", calc)
document.getElementById("d18").addEventListener("click", Delete)
document.getElementById("d19").addEventListener("click", Clear)


 