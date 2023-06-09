export const validarEmail = (email: string): boolean => {
  return (
    email != null &&
    email != undefined &&
    email.toString().includes('@') &&
    email.toString().includes('.')
  );
};

export const validarSenha = (senha: string): boolean => {
  return senha != null && senha != undefined && senha.toString().length > 8;
};

export async function aprovarLogin(
  email: string,
  senha: string
): Promise<boolean> {
  const dados = '/dados.json';

  try {
    const response = await fetch(dados);
    if (!response.ok) {
      throw new Error(
        `Erro na requisição: ${response.status} ${response.statusText}`
      );
    }
    const dadosJSON = await response.json();

    if (validarEmail(email) && validarSenha(senha)) {
      for (let i = 0; i < dadosJSON.length; i++) {
        if (dadosJSON[i].email === email && dadosJSON[i].senha === senha) {
          localStorage.setItem('usuarioAutenticado', 'true');
          localStorage.setItem('nomeUsario', dadosJSON[i].nome);
          localStorage.setItem('dataNascimento', dadosJSON[i].dataNascimento);
          localStorage.setItem('emailUsuario', dadosJSON[i].email);
          alert('Login do usuário ' + email + ' aprovado com sucesso');
          return true;
        }
      }
      alert('Email ou senha inválidos');
      return false;
    } else {
      alert('Campos email ou senha inválidos');
      return false;
    }
  } catch (error) {
    console.error('Erro na requisição: ', error);
    throw error;
  }
}
