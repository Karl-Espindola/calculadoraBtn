let val_1=0;
let val_2=0;

function capturar(){
    val_1=parseFloat(val1.value);
    val_2=parseFloat(val2.value);
}
function visualizar(op){
    operador.innerText=op;
    val2.focus();
}
function AC(){
    operador.innerText="";
    val1.value="";
    val2.value="";
    display.innerHTML="";
}
function resultado(){
    if(operador.innerText!="" && val1.value!="" && val2.value !=""){
        capturar();
        switch(operador.innerHTML){
            case "+":
                display.innerHTML=val_1+val_2;
                break
            case "-":
                display.innerHTML=val_1-val_2;
                break
            case "x":
                display.innerHTML=val_1*val_2;
                break
            case "/":
                (val_2==0)?display.innerHTML="infinito":display.innerHTML=val_1/val_2;
            break
        }
        
    }
}

function teclado_val1_y_op(){
    reg=/[A-Za-z]/;
    regPunto=/\.{1}/;
    let text1=val1.value;
    if(operador.innerHTML=="" && !reg.test(text1)){
        
        text1=text1.toString();
        let letra=text1.charAt(text1.length-1);
        if(text1.length>1){
            switch(letra){
                case "+":
                    text1=text1.substring(0,text1.length-1);
                    visualizar(letra);
                    val2.focus();
                    break
                case "-":
                    text1=text1.substring(0,text1.length-1);
                    visualizar(letra);
                    val2.focus();
                    break
                case "*":
                    text1=text1.substring(0,text1.length-1);
                    visualizar("x");
                    val2.focus();
                    break
                case "/":
                    text1=text1.substring(0,text1.length-1);
                    visualizar(letra);
                    val2.focus();
                    break
            }
        }
        val1.value=text1;
        console.log(text1);
    }
    else if(operador.innerHTML=="" && (!regPunto.test(text1) || reg.test(text1))){
        text1=text1.substring(0,text1.length-1);
        val1.value=parseFloat(text1);
    }
    if(text1.length<1){
        location.reload()
    }
}
function enter_igual(e){
    if(e.code=="Enter" && val2.value!=null){
        resultado();
    }
}
let i=0;
function backspace_borrar(e){
    if(e.code=="Backspace" && val2.value=="" && operador.innerHTML!="" && val1.value!="" && val1.value!=NaN){
        console.log(val2.value);
        i++;
        if(i>2){
            operador.innerHTML="";
        }
    }
    if(e.code=="Backspace" && val2.value=="" && operador.innerHTML=="" && val1.value!="" && val1.value!=NaN){
        i++;
        if(i>2){
            val1.focus();
        }
    }
}
function escribirNum(n){
    if(operador.innerHTML==""){
        val1.value+=n.innerText
        val1.focus();
    }
    else{
        if(n.innerText=="."){
            val2.setAttribute("type","text");
            val2.value=val2.value+n.innerText;
        }
        else{
            val2.value=val2.value+n.innerText;
        }
        val2.focus();
        console.log(val2.value);
    }
}

let val1=document.getElementById("val-1");
let val2=document.getElementById("val-2");
let operador=document.getElementById("operador");
let display=document.getElementById("display");

let suma=document.getElementById("suma");
let resta=document.getElementById("resta");
let multi=document.getElementById("multi");
let division=document.getElementById("division");
let igual=document.getElementById("igual");
let borrar=document.getElementById("borrar");
let numeros=document.getElementsByClassName("numero");

for(let n of numeros){
    n.addEventListener("click",function(){
        escribirNum(n);
    })
}
suma.addEventListener("click",()=>{visualizar("+")});
resta.addEventListener("click",()=>{visualizar("-")});
multi.addEventListener("click",()=>{visualizar("x")});
division.addEventListener("click",()=>{visualizar("/")});
igual.addEventListener("click",resultado);
borrar.addEventListener("click",AC);


document.addEventListener("keyup",function(e){
    teclado_val1_y_op();
    enter_igual(e);
    backspace_borrar(e);
    
});

window.addEventListener("load", function(){
    val1.focus();
});




