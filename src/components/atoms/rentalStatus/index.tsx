import React from 'react';

import { ERentalStatus } from '@/helpers/enums';
import { rentalStatusMap } from '@/helpers/rentalStatus';
import * as Styled from './styles';

interface RentalStatusProps {
	status: ERentalStatus;
	large?: boolean;
}

function RentalStatus({ status, large = false }: RentalStatusProps) {
	const statusMap = rentalStatusMap[status];

	return (
		<Styled.StatusText color={statusMap.color} large={large}>
			{statusMap.text}
		</Styled.StatusText>
	);
}

export default RentalStatus;
