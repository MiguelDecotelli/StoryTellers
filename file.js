document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio real do formulário
        alert("Obrigado por se registrar!");
        window.location.href = "thankyou.html"; // Redireciona para a página de agradecimento
    });
});