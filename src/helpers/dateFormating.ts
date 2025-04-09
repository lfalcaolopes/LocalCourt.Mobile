import { addHours, parseISO } from 'date-fns';
import { format, toZonedTime } from 'date-fns-tz';

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

function convertToSaoPauloTime(date: Date): string {
	const timeZoneSP = 'America/Sao_Paulo';

	const zonedDate = toZonedTime(date, timeZoneSP);
	const formattedDate = format(zonedDate, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: timeZoneSP });
	return formattedDate;
}

const formatTimeTo24Hour = (date: Date): string => {
	return date.toLocaleTimeString('pt-BR', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});
};

const formatTimeRange = (startDateString: string, duration: number): string => {
	const startDate = parseISO(startDateString);
	const endDate = addHours(startDate, duration);

	const startTime = format(startDate, 'HH:mm');
	const endTime = format(endDate, 'HH:mm');

	return `${startTime} - ${endTime}`;
};

export { convertToSaoPauloTime, formatRentalDateTime, formatTimeRange, formatTimeTo24Hour };
