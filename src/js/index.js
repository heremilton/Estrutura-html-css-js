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
        "É a linguagem preferida para o desenvolvimento Android.","O nome Java foi inspirado no café que era consumido pelo time de desenvolvimento, que vinha da ilha de Java.","A linguagem Java tem apenas 52 palavras reservadas.","O Java foi criado pela Sun Microsystems e lançado em 1995.","O Java é uma linguagem orientada a objetos, o que permite criar programas modulares e código reutilizável.","O Minecraft foi programado em Java pela empresa Mojave.","O Java é utilizado para criar aplicativos móveis e Web, software empresarial, dispositivos de Internet das Coisas (IoT), jogos, Big Data, entre outros tipos.","A linguagem que ajudou a explorar Marte.","Mapeamento do genoma humano"
    ];
    const novaCuriosidade = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    const lista = document.getElementById("lista-curiosidades");

    const novoItem = document.createElement("li");
    novoItem.innerText = novaCuriosidade;
    lista.appendChild(novoItem);
}