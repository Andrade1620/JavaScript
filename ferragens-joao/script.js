const precos={ //DICIONARIOP
    "Challenger V8 R/T 1971": 649000,
    "Lamborghini Aventador SVJ 2018": 5431000,
}



function calcularpreco() {
    let escolhaProduto = document.getElementById("Produtos").value;
    let QuantidadeDeProdutos = document.getElementById("Quantidade").value;
    document.getElementById("resultado").innerHTML = precos[escolhaProduto]*QuantidadeDeProdutos;

}