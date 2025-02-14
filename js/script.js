document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnAdicionar").addEventListener("click", adicionarNaTabela);
});

function adicionarNaTabela() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var insta = document.getElementById("insta").value;

    if (nome === "" || idade === " " || insta === " ") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow();

    var celNome = novaLinha.insertCell(0);
    var celIdade = novaLinha.insertCell(1);
    var celInsta = novaLinha.insertCell(2);

    celNome.textContent = nome;
    celIdade.textContent = idade;
    celInsta.textContent = insta;

    document.getElementById("formulario").reset();
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ordenarNome").addEventListener("click", ordenarTabela);
    document.getElementById("ordenarIdade").addEventListener("click", ordenarTabelaIdade);
    document.getElementById("ordenarInsta").addEventListener("click", ordenarTabelaInsta);
});

var ordemAscendente = true;
function ordenarTabela() {
    var tabela = document.getElementById("tabela");
    var tbody = tabela.getElementsByTagName("tbody")[0];
    var linhas = Array.from(tbody.getElementsByTagName("tr"));

    linhas.sort(function (a, b) {
        var nomeA = a.cells[0].textContent.trim().toLowerCase();
        var nomeB = b.cells[0].textContent.trim().toLowerCase();
        return ordemAscendente ? nomeA.localeCompare(nomeB) : nomeB.localeCompare(nomeA);
    });

    linhas.forEach(linha => tbody.appendChild(linha));
    ordemAscendente = !ordemAscendente;
}

var ordemAscendenteIdade = true;
function ordenarTabelaIdade() {
    var tabela = document.getElementById("tabela");
    var tbody = tabela.getElementsByTagName("tbody")[0];
    var linhas = Array.from(tbody.getElementsByTagName("tr"));

    linhas.sort(function (a, b) {
        var idadeA = parseInt(a.cells[1].textContent.trim());
        var idadeB = parseInt(b.cells[1].textContent.trim());
        return ordemAscendenteIdade ? idadeA - idadeB : idadeB - idadeA;
    });

    linhas.forEach(linha => tbody.appendChild(linha));
    ordemAscendenteIdade = !ordemAscendenteIdade;
}

var ordemAscendenteInsta = true;
function ordenarTabelaInsta() {
    var tabela = document.getElementById("tabela");
    var tbody = tabela.querySelector("tbody");
    var linhas = Array.from(tbody.querySelectorAll("tr"));

    linhas.sort(function (a, b) {
        var instaA = a.cells[2].textContent.trim().toLowerCase();
        var instaB = b.cells[2].textContent.trim().toLowerCase();
        return ordemAscendenteInsta ? instaA.localeCompare(instaB) : instaB.localeCompare(instaA);
    });

    linhas.forEach(linha => tbody.appendChild(linha));
    ordemAscendenteInsta = !ordemAscendenteInsta;
}
