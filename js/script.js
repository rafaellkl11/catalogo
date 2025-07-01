let img = ["img/download.jpeg", "img/images.jpeg","img/206.jpeg","img/palio wk.webp", "img/prisma.jpeg","img/tera.jpeg","img/uno.jpeg"];
let nome = ["Gol", "Gol", "206", "Palio Weekend","Prisma", "Tera", "Uno"] 
let marca = ["Volkswagen", "Volkswagen", "Peugeot", "FIAT", "Chevrolet", "Volkswagen"] 
let versao = ["Power", "GTI", "1.6", "Adventure","LTZ", "Highline"]
let cor = ["Prata","Azul","Prata","Verde", "Azul","Branco"]
let ano = ["2011", "1991","2004", "2014","2018", "2025"]
let motor = []
let cambio = []


var n = 0;
const imgs1 = document.querySelector("#item1 img")
const imgs2 = document.querySelector("#item2 img")
const imgs3 = document.querySelector("#item3 img")
const imgs4 = document.querySelector("#item4 img")
const imgs5 = document.querySelector("#item5 img")
const imgs6 = document.querySelector("#item6 img")
imgs1.src = img[n];
imgs2.src = img[n+1];
imgs3.src = img[n+2];
imgs4.src = img[n+3];
imgs5.src = img[n+4];
imgs6.src = img[n+5];

const h2s1 = document.querySelector("#item1 h2")
const h2s2 = document.querySelector("#item2 h2")
const h2s3 = document.querySelector("#item3 h2")
const h2s4 = document.querySelector("#item4 h2")
const h2s5 = document.querySelector("#item5 h2")
const h2s6 = document.querySelector("#item6 h2")
h2s1.textContent = nome[n]
h2s2.textContent = nome[n+1]
h2s3.textContent = nome[n+2]
h2s4.textContent = nome[n+3]
h2s5.textContent = nome[n+4]
h2s6.textContent = nome[n+5]

const marca1 = document.querySelector("#item1 .marca ")
const marca2 = document.querySelector("#item2 .marca ")
const marca3 = document.querySelector("#item3 .marca ")
const marca4 = document.querySelector("#item4 .marca ")
const marca5 = document.querySelector("#item5 .marca ")
const marca6 = document.querySelector("#item6 .marca ")
marca1.textContent = "Marca: "+marca[n]
marca2.textContent = "Marca: "+marca[n+1]
marca3.textContent = "Marca: "+marca[n+2]
marca4.textContent = "Marca: "+marca[n+3]
marca5.textContent = "Marca: "+marca[n+4]
marca6.textContent = "Marca: "+marca[n+5]

const versao1 = document.querySelector("#item1 .versao ")
const versao2 = document.querySelector("#item2 .versao ")
const versao3 = document.querySelector("#item3 .versao ")
const versao4 = document.querySelector("#item4 .versao ")
const versao5 = document.querySelector("#item5 .versao ")
const versao6 = document.querySelector("#item6 .versao ")
versao1.textContent = "Versão: "+versao[n]
versao2.textContent = "Versão: "+versao[n+1]
versao3.textContent = "Versão: "+versao[n+2]
versao4.textContent = "Versão: "+versao[n+3]
versao5.textContent = "Versão: "+versao[n+4]
versao6.textContent = "Versão: "+versao[n+5]

const cor1 = document.querySelector("#item1 .cor ")
const cor2 = document.querySelector("#item2 .cor ")
const cor3 = document.querySelector("#item3 .cor ")
const cor4 = document.querySelector("#item4 .cor ")
const cor5 = document.querySelector("#item5 .cor ")
const cor6 = document.querySelector("#item6 .cor ")
cor1.textContent = "Cor: "+cor[n]
cor2.textContent = "Cor: "+cor[n+1]
cor3.textContent = "Cor: "+cor[n+2]
cor4.textContent = "Cor: "+cor[n+3]
cor5.textContent = "Cor: "+cor[n+4]
cor6.textContent = "Cor: "+cor[n+5]

const ano1 = document.querySelector("#item1 .ano ")
const ano2 = document.querySelector("#item2 .ano ")
const ano3 = document.querySelector("#item3 .ano ")
const ano4 = document.querySelector("#item4 .ano ")
const ano5 = document.querySelector("#item5 .ano ")
const ano6 = document.querySelector("#item6 .ano ")
ano1.textContent = "Ano: "+ano[n]
ano2.textContent = "Ano: "+ano[n+1]
ano3.textContent = "Ano: "+ano[n+2]
ano4.textContent = "Ano: "+ano[n+3]
ano5.textContent = "Ano: "+ano[n+4]
ano6.textContent = "Ano: "+ano[n+5]

   function proxPagina(){
    console.log(img[n]);
    console.log(n);
    n = n+6;
    if (n >= img.length){
        n = 0
    }

    imgs1.src = img[n];
    imgs2.src = img[n+1];
    imgs3.src = img[n+2];
    imgs4.src = img[n+3];
    imgs5.src = img[n+4];
    imgs6.src = img[n+5];

    h2s1.textContent = nome[n]
    h2s2.textContent = nome[n+1]
    h2s3.textContent = nome[n+2]
    h2s4.textContent = nome[n+3]
    h2s5.textContent = nome[n+4]
    h2s6.textContent = nome[n+5]

    marca1.textContent = "Marca: "+marca[n]
    marca2.textContent = "Marca: "+marca[n+1]
    marca3.textContent = "Marca: "+marca[n+2]
    marca4.textContent = "Marca: "+marca[n+3]
    marca5.textContent = "Marca: "+marca[n+4]
    marca6.textContent = "Marca: "+marca[n+5]

    versao1.textContent = "Versão: "+versao[n]
    versao2.textContent = "Versão: "+versao[n+1]
    versao3.textContent = "Versão: "+versao[n+2]
    versao4.textContent = "Versão: "+versao[n+3]
    versao5.textContent = "Versão: "+versao[n+4]
    versao6.textContent = "Versão: "+versao[n+5]

    cor1.textContent = "Cor: "+cor[n]
    cor2.textContent = "Cor: "+cor[n+1]
    cor3.textContent = "Cor: "+cor[n+2]
    cor4.textContent = "Cor: "+cor[n+3]
    cor5.textContent = "Cor: "+cor[n+4]
    cor6.textContent = "Cor: "+cor[n+5]
    
    ano1.textContent = "Ano: "+ano[n]
    ano2.textContent = "Ano: "+ano[n+1]
    ano3.textContent = "Ano: "+ano[n+2]
    ano4.textContent = "Ano: "+ano[n+3]
    ano5.textContent = "Ano: "+ano[n+4]
    ano6.textContent = "Ano: "+ano[n+5]

}
function antPagina(){
    console.log(img[n]);
    console.log(n);
    n = n-6;
    if (n <= -1){
        n = img.length - 1
    }
    imgs1.src = img[n];
    imgs2.src = img[n+1];
    imgs3.src = img[n+2];
    imgs4.src = img[n+3];
    imgs5.src = img[n+4];
    imgs6.src = img[n+5];

    h2s1.textContent = nome[n]
    h2s2.textContent = nome[n+1]
    h2s3.textContent = nome[n+2]
    h2s4.textContent = nome[n+3]
    h2s5.textContent = nome[n+4]
    h2s6.textContent = nome[n+5]

    versao1.textContent = "versao: "+versao[n]
    versao2.textContent = "versao: "+versao[n+1]
    versao3.textContent = "versao: "+versao[n+2]
    versao4.textContent = "versao: "+versao[n+3]
    versao5.textContent = "versao: "+versao[n+4]
    versao6.textContent = "versao: "+versao[n+5]

    cor1.textContent = "Cor: "+cor[n]
    cor2.textContent = "Cor: "+cor[n+1]
    cor3.textContent = "Cor: "+cor[n+2]
    cor4.textContent = "Cor: "+cor[n+3]
    cor5.textContent = "Cor: "+cor[n+4]
    cor6.textContent = "Cor: "+cor[n+5]

    ano1.textContent = "Ano: "+ano[n]
    ano2.textContent = "Ano: "+ano[n+1]
    ano3.textContent = "Ano: "+ano[n+2]
    ano4.textContent = "Ano: "+ano[n+3]
    ano5.textContent = "Ano: "+ano[n+4]
    ano6.textContent = "Ano: "+ano[n+5]

}