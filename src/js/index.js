function copiarCodigo() {
    const codigoJava = document.getElementById("codigo-java").innerText;
    navigator.clipboard.writeText(codigoJava).then(() => {
        alert("Código copiado para a área de transferência!");
    }).catch(err => {
        alert("Erro ao copiar o código: " + err);
    });
}

function adicionarCuriosidade() {
    const curiosidades = [
        "Java tem uma forte comunidade open-source.",
        "Java é usado em muitas empresas de grande porte.",
        "É a linguagem preferida para o desenvolvimento Android."
    ];
    const novaCuriosidade = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    const lista = document.getElementById("lista-curiosidades");

    const novoItem = document.createElement("li");
    novoItem.innerText = novaCuriosidade;
    lista.appendChild(novoItem);
}