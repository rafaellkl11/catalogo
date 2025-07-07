
var n = 0;

function elementos(){
    fetch("js/dados.json")
        .then(resposta => resposta.json())
        .then(dados => {
            for(let i = 0; i <= 6; i++){
                let j = (i+1).toString();
                const imgs1 = document.querySelector("#item"+j+" img")
                const h2s1 = document.querySelector("#item"+j+" h2")
                const marca1 = document.querySelector("#item"+j+" .marca")
                const versao1 = document.querySelector("#item"+j+" .versao")
                const cor1 = document.querySelector("#item"+j+" .cor")
                const ano1 = document.querySelector("#item"+j+" .ano")
                const motor1 = document.querySelector("#item"+j+" .motor")
                const cambio1 = document.querySelector("#item"+j+" .cambio")

                if (imgs1 && dados.img[n + i]) {
                    imgs1.src = dados.img[n + i];
                    h2s1.textContent = dados.nome[n+i]
                    marca1.textContent = "Marca: "+dados.marca[n+i]
                    versao1.textContent = "Versão: "+dados.versao[n+i]
                    cor1.textContent = "Cor: "+dados.cor[n+i]
                    ano1.textContent = "Ano: "+dados.ano[n+i]
                    motor1.textContent = "Motorização: "+dados.motor[n+i]
                    cambio1.textContent = "Cambio:  "+dados.cambio[n+i]
                }
            }
        })
}

elementos()

function proxPagina(){
    fetch("js/dados.json")
        .then(resposta => resposta.json())
        .then(dados => {
            n = n+6;
            if (n >= dados.img.length){
                n = 0
            }
            elementos()
        })
}
function antPagina(){
    fetch("js/dados.json")
        .then(resposta => resposta.json())
        .then(dados => {
            n = n-6;
            if (n <= -1){
                n = dados.img.length - (dados.img.length % 6)
            }
            elementos()
        })
}
function abrirModal() {
    document.getElementById("fundo").style.display = "flex";
}

function fecharModal() {
    document.getElementById("fundo").style.display = "none";
}
function adicionar(){
    document.getElementById("fundo").style.display = "none";
}