let valorTitulo = document.getElementById("TituloPrincipal").innerText;
console.log(valorTitulo);
//Função que altera o conteúdo do título
function AlterarTitulo(){
    document.getElementById("TituloPrincipal").innerHTML = "Titulo alterado com sucesso!";
    window.alert("Titulo alterado com sucesso!");
}

function desfazerAlteracao(){
    document.getElementById("TituloPrincipal").innerHTML = valorTitulo;
    
}