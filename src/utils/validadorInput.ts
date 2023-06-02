const validarEmail = (email: string): boolean => {
    return (
        email != null &&
        email != undefined &&
        email.toString().includes('@') &&
        email.toString().includes('.')
      );
}

const validarSenha = (senha: string): boolean => {
    return senha != null && senha != undefined && senha.toString().length > 8;
}

export {
    validarEmail,
    validarSenha,
}
