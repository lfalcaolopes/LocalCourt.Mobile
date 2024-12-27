import { colors } from '@/styles/theme';
import { EReservationStatus } from './enums';

const reservationStatusMap = {
	[EReservationStatus.CONFIRMED]: {
		color: colors.acent,
		text: 'Confirmado'
	},
	[EReservationStatus.AWAITING_PAYMENT]: {
		color: colors.warning,
		text: 'Aguardando pagamento'
	},
	[EReservationStatus.CANCELLED]: {
		color: colors.error,
		text: 'Cancelado'
	},
	[EReservationStatus.CONCLUDED]: {
		color: colors.gray[500],
		text: 'Finalizado'
	}
};

export { reservationStatusMap };
