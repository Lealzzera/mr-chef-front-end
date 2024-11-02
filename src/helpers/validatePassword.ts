type ValidatePasswordType = {
  password: string;
  confirmPassword: string;
};

export function validatePassword({
  password,
  confirmPassword,
}: ValidatePasswordType) {
  const passwordAchieveMinimumRequirement =
    /(?=.*[0-9])(?=.*[!@#\$%\^\&*\)\(+=._-])/;
  if (password !== confirmPassword) {
    return { valid: false, message: "As senhas digitadas não conferem." };
  }

  if (password.length < 8) {
    return { valid: false, message: "A senha precisa conter 8 caracteres." };
  }

  if (!passwordAchieveMinimumRequirement.test(password)) {
    return {
      valid: false,
      message: "A senha deve conter ao menos 1 número e 1 caractere especial.",
    };
  }

  return { valid: true, message: "Senha Válida" };
}
