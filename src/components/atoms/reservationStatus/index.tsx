import React from 'react';

import { EReservationStatus } from '@/helpers/enums';
import { reservationStatusMap } from '@/helpers/reservationStatus';
import * as Styled from './styles';

interface ReservationStatusProps {
	status: EReservationStatus;
}

function ReservationStatus({ status }: ReservationStatusProps) {
	const statusMap = reservationStatusMap[status];

	return <Styled.StatusText color={statusMap.color}>{statusMap.text}</Styled.StatusText>;
}

export default ReservationStatus;
