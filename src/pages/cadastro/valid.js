if (usuario === '' || funcionario === '' || nome === '' || dataNascimento === '' || cpf === '' || genero === '' || celular === '' || logradouro === '' || bairro === '' || cidade === '' || pais === '' || email === '' || senha === '' || confirmarSenha === '') {
    alert('Por favor, preencha todos os campos obrigatórios');
    return false;
}

// Verifica se o e-mail é válido
const regexEmail = /\S+@\S+\.\S+/;
if (!regexEmail.test(email)) {
    alert('Por favor, insira um e-mail válido');
    return false;
}

// Verifica se a senha tem pelo menos 8 caracteres
if (senha.length < 8) {
    alert('A senha deve ter pelo menos 8 caracteres');
    return false;
}

// Verifica se as senhas são iguais
if (senha !== confirmarSenha) {
    alert('As senhas não coincidem');
    return false;
}

// Verifica se o CPF é válido
const regexCpf = /^[0-9]{11}$/;
if (!regexCpf.test(cpf)) {
    alert('Por favor, insira um CPF válido');
    return false;
}

// Verifica se o número de celular é válido
const regexCelular = /^\([1-9]{2}\) [9]{1}[0-9]{4}-[0-9]{4}$/;
if (!regexCelular.test(celular)) {
    alert('Por favor, insira um número de celular válido');
    return false;
}

// Verifica se o número de telefone é válido
const regexTelefone = /^\([1-9]{2}\) [0-9]{4}-[0-9]{4}$/;
if (!regexTelefone.test(telefone)) {
    alert('Por favor, insira um número de telefone válido');
    return false;
}