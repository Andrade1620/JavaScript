// Preços dos produtos
const precos = {
    'parafuso': 0.5,
    'martelo': 25,
    'chave de fenda': 10

}
 // Estoques atualizados
 const estoque = {
    "parafuso": 90,
    "martelo": 5,
    "chave de fenda": 12
};

function calcularPreco() {
    const produto = document.getElementById('produto').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);

    if (!produto || isNaN(quantidade) || quantidade <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, selecione um produto e insira uma quantidade válida.';
        return; //encerrando execução
    }

    if (quantidade > estoque[produto]) {
        document.getElementById('resultado').innerText = `Quantidade disponivel em estoque. Disponíve:  ${estoque[produto]}`;
        return; //encerrar a execução
    }


    const precoTotal = precos[produto] * quantidade; //acessando a posção e calculando preço

    document.getElementById('resultado').innerText = `Total: R$ ${precoTotal.toFixed(2)}`; //acessando h4 e alterando valor
}