
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clciar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
   window.open("https://web.digitalinnovation.one/");
   //window.location.href = "https://web.digitalinnovation.one/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    alemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value);
}

/*
var validar;
function validaidade(idade){       
        if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual é sua idade");
validaidade(idade);
console.log(validar);*/


/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/

/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

/*
var count;
for(count = 0; count <= 5; count ++){
    alert(count);
}*/

/*
var count = 5;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++;
}*/

/*
var idade = prompt("Qual sua idade ?");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};*/

/*
var frutas = [{nome: "maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);*/

/*
var fruta = {nome: "maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString);
//console.log(lista.join(" - "));

//var nome = "Rômulo Vieira";
//var idade = 33;
//var idade2 = 20;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
