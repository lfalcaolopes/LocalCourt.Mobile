const formatPrice = (value: string) => {
	if (!value) return '';

	const cleanValue = value.replace(/\D/g, '');

	// Convert stored string (e.g. "1234") to number (12.34) and format using Intl:
	const numberValue = parseInt(cleanValue, 10) / 100;
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	}).format(numberValue);
};

const parsePrice = (value: string) => {
	const rawValue = parseInt(value.replace(/\D/g, ''), 10) || 0;

	return rawValue / 100;
};

const formatZipCode = (value: string) => {
	if (!value) return '';

	const cleanValue = value.replace(/\D/g, '');
	const match = cleanValue.match(/^(\d{0,5})(\d{0,3})$/);

	if (!match) return '';

	const [, firstPart, secondPart] = match;

	if (!secondPart) return firstPart;
	return `${firstPart}-${secondPart}`;
};

const parseZipCode = (value: string) => {
	return value.replace(/\D/g, '');
};

export { formatPrice, formatZipCode, parsePrice, parseZipCode };
