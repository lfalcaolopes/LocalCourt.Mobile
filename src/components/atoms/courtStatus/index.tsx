import React from 'react';

import { courtStatusMap } from '@/helpers/courtStatus';
import { ECourtStatus } from '@/helpers/enums';
import * as Styled from './styles';

interface CourtStatusProps {
	status: ECourtStatus;
}

function CourtStatus({ status }: CourtStatusProps) {
	const statusMap = courtStatusMap[status];

	return <Styled.StatusText color={statusMap.color}>{statusMap.text}</Styled.StatusText>;
}

export default CourtStatus;
