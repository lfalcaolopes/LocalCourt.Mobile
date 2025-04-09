import React, { useMemo } from 'react';

import { DefaultModalities } from '@/helpers/defaultModalities';
import * as Styled from './styles';

interface RentalModalityProps {
	modality: string;
}

function RentalModality({ modality }: RentalModalityProps) {
	const selectedModality = useMemo(
		() =>
			DefaultModalities.find((modalityItem) => modalityItem.id === modality) || {
				id: '',
				name: '',
				icon: ''
			},
		[modality]
	);

	return (
		<Styled.Container>
			{selectedModality.icon ? (
				React.isValidElement(selectedModality.icon) ? (
					selectedModality.icon
				) : (
					<Styled.Icon source={selectedModality.icon} />
				)
			) : null}
			<Styled.Text>{selectedModality.name}</Styled.Text>
		</Styled.Container>
	);
}

export default RentalModality;
