// Função de Login
function handleLogin(event) {
    event.preventDefault(); // Previne o envio do formulário

    const usuario = document.flogin.usuario.value;
    const senha = document.flogin.senha.value;

    // Validação simples
    if (usuario === "admin" && senha === "admin") {
        alert("Login bem-sucedido!");
        window.location.href = "index.html"; // Redireciona após login bem-sucedido
    } else {
        alert("Usuário ou senha inválidos");
        // Limpa os campos de senha após a tentativa
        document.flogin.senha.value = "";
    }
}