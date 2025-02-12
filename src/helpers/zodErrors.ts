export const zodErrors = {
	requiredField: 'Campo obrigatório',
	emptyString: (fieldName: string) => `O campo de ${fieldName} não pode estar vazio`,
	invalidEmail: 'Email invalido',
	passwordMismatch: 'As senhas não coincidem'
};
