import { colors } from '@/styles/theme';
import { ERentalStatus } from './enums';

const rentalStatusMap = {
	[ERentalStatus.CONFIRMED]: {
		color: colors.acent,
		text: 'Confirmado'
	},
	[ERentalStatus.AWAITING_PAYMENT]: {
		color: colors.warning,
		text: 'Pendente'
	},
	[ERentalStatus.CANCELLED]: {
		color: colors.error,
		text: 'Cancelado'
	},
	[ERentalStatus.CONCLUDED]: {
		color: colors.gray[500],
		text: 'Finalizado'
	}
};

export { rentalStatusMap };
