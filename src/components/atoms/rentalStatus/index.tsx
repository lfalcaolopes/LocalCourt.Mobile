import React from 'react';

import { ERentalStatus } from '@/helpers/enums';
import { rentalStatusMap } from '@/helpers/rentalStatus';
import * as Styled from './styles';

interface RentalStatusProps {
	status: ERentalStatus;
}

function RentalStatus({ status }: RentalStatusProps) {
	const statusMap = rentalStatusMap[status];

	return <Styled.StatusText color={statusMap.color}>{statusMap.text}</Styled.StatusText>;
}

export default RentalStatus;
