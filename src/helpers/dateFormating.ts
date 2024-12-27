function formatRentalDateTime(dateTimeString: string, duration: number) {
	const date = new Date(dateTimeString);

	const rentalDate = date.toLocaleDateString('pt-BR');
	const rentalStartTime = date.toLocaleTimeString('pt-BR', {
		hour: '2-digit',
		minute: '2-digit'
	});

	const endDate = new Date(date.getTime() + duration * 60 * 60 * 1000);
	const rentalEndTime = endDate.toLocaleTimeString('pt-BR', {
		hour: '2-digit',
		minute: '2-digit'
	});

	return { rentalDate, rentalStartTime, rentalEndTime };
}

export { formatRentalDateTime };
