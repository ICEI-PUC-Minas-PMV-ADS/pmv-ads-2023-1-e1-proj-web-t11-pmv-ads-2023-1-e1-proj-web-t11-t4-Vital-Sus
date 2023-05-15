export function validarFormulario(generoSelecionado: string) {
  const nome = (
    document.getElementById('nome') as HTMLInputElement
  ).value.trim();
  const dataNascimento = (
    document.getElementById('data-nascimento') as HTMLInputElement
  ).value.trim();
  const cpf = (document.getElementById('cpf') as HTMLInputElement).value.trim();
  const genero = generoSelecionado.trim();
  const celular = (
    document.getElementById('celular') as HTMLInputElement
  ).value.trim();
  const telefone = (
    document.getElementById('telefone') as HTMLInputElement
  ).value.trim();
  const logradouro = (
    document.getElementById('logradouro') as HTMLInputElement
  ).value.trim();
  const bairro = (
    document.getElementById('bairro') as HTMLInputElement
  ).value.trim();
  const complemento = (
    document.getElementById('complemento') as HTMLInputElement
  ).value.trim();
  const cidade = (
    document.getElementById('cidade') as HTMLInputElement
  ).value.trim();
  const pais = (
    document.getElementById('pais') as HTMLInputElement
  ).value.trim();
  const email = (
    document.getElementById('email') as HTMLInputElement
  ).value.trim();
  const senha = (
    document.getElementById('senha') as HTMLInputElement
  ).value.trim();
  const confirmarSenha = (
    document.getElementById('confirmar_senha') as HTMLInputElement
  ).value.trim();

  if (
    nome === '' ||
    dataNascimento === '' ||
    cpf === '' ||
    genero === '' ||
    celular === '' ||
    logradouro === '' ||
    bairro === '' ||
    cidade === '' ||
    pais === '' ||
    email === '' ||
    senha === '' ||
    confirmarSenha === ''
  ) {
    alert('Por favor, preencha todos os campos obrigatórios');
    return; // retorna imediatamente se houver campos em branco
  }

  const regexEmail: RegExp = /\S+@\S+.\S+/;
  if (!regexEmail.test(email)) {
    alert('Por favor, insira um e-mail válido');
    return; // retorna imediatamente se o e-mail for inválido
  }

  if (senha.length < 8) {
    alert('A senha deve ter pelo menos 8 caracteres');
    return; // retorna imediatamente se a senha for muito curta
  }

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem');
    return; // retorna imediatamente se as senhas não coincidem
  }

  // Se chegou até aqui, é porque não houve nenhum erro de validação
  alert('Cadastro efetuado com sucesso');

  // Ofusca a senha antes de armazená-la no JSON
  const senhaOfuscada = senha.replace(/./g, '*');
  const confimarSenhaOfuscada = confirmarSenha.replace(/./g, '*');

  const formData = {
    nome,
    dataNascimento,
    cpf,
    genero,
    celular,
    telefone,
    logradouro,
    bairro,
    complemento,
    cidade,
    pais,
    email,
    senha: senhaOfuscada,
    confirmarSenha: confimarSenhaOfuscada,
  };

  const jsonData = JSON.stringify(formData);

  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/json;charset=utf-8,' + encodeURIComponent(jsonData)
  );
  element.setAttribute('download', 'data.json');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

  window.location.href = '/';
}
