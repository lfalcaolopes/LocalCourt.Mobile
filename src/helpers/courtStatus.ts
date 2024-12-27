import { colors } from '@/styles/theme';
import { ECourtStatus } from './enums';

const courtStatusMap = {
	[ECourtStatus.ACTIVE]: {
		color: colors.acent,
		text: 'Ativo'
	},
	[ECourtStatus.INACTIVE]: {
		color: colors.error,
		text: 'Inativo'
	}
};

export { courtStatusMap };
