const formatPrice = (value: number): string => {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(value);
};

const parsePrice = (value: string): number => {
	// Remove the "R$" symbol, spaces and thousands separators, then replace comma with period
	const cleaned = value.replace('R$', '').trim().replace(/\./g, '').replace(',', '.');

	return parseFloat(cleaned);
};

const priceMask = (value: string) => {
	const onlyNumbers = Number(value.replace(/\D/g, ''));

	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(onlyNumbers / 100);
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

export { formatPrice, formatZipCode, parsePrice, parseZipCode, priceMask };
