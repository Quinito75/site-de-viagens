document.addEventListener("DOMContentLoaded", function(){ //Evento de carregamento da página
    let form = document.getElementById("form-contato");

    form.onsubmit = function (event){
        event.preventDefault(); // Evita enviar de verdade, que a página recarregue
        
        // Captura dos valores
        let nome = document.getElementById("nome").value.trim();
        let telefone = document.getElementById("telefone").value.trim();
        let email = document.getElementById("email").value.trim();
        let comentarios = document.getElementById("comentarios").value.trim();

        // Validação de campos obrigatórios
        if (nome === "" || telefone === "" || email === ""){
            alert ("Favor, preencher todos campos indicados com *");
            return;
        }

        // Validação básica de e-mail
        if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um e-mail válido.");
        return;
        }

        // Validação de número de telefone
        if (telefone.length < 9) {
            alert("Por favor, insira um número de telefone válido.");
            return;
        }

        //Gravação de dados em "localStorage", para a próxima página poder obter os dados
        localStorage.setItem("nome", nome);
        localStorage.setItem("telefone", telefone);
        localStorage.setItem("email", email);
        localStorage.setItem("comentarios", comentarios);

        // Redirecionamento da página de "contato.html" para "validacao.html"
        window.location.href="validacao.html";
    };

});