document.addEventListener("DOMContentLoaded", function(){
    let nome = localStorage.getItem("nome");
    let telefone = localStorage.getItem("telefone");
    let email = localStorage.getItem("email");
    let comentarios = localStorage.getItem("comentarios");

    // Gracefully handle empty validation data access
    if (!nome || !email) {
        alert("Nenhum dado de contato encontrado. Redirecionando para a página de contato.");
        window.location.href = "contato.html";
        return;
    }

    document.getElementById("mostra-nome").textContent = nome;
    document.getElementById("mostra-telefone").textContent = telefone;
    document.getElementById("mostra-email").textContent = email;
    document.getElementById("mostra-comentarios").textContent = comentarios || "Nenhum comentário enviado.";
});