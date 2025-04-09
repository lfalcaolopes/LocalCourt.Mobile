import React from 'react';

import { courtStatusMap } from '@/helpers/courtStatus';
import { ECourtStatus } from '@/helpers/enums';
import Button from '../button';

interface CourtStatusButtonProps {
	status: ECourtStatus;
	courtId: string;
}

function CourtStatusButton({ status, courtId }: CourtStatusButtonProps) {
	return (
		<Button fullWidth onClick={() => console.log(courtId)} color={courtStatusMap[status].color}>
			{courtStatusMap[status].text}
		</Button>
	);
}

export default CourtStatusButton;
