import React, { ReactNode } from 'react';

import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import * as Styled from './styles';

export interface ChipProps {
	children: React.ReactNode;
	icon?: ImageSourcePropType | ReactNode;
	selected?: boolean;
	onPress?: () => void;
}

function Chip({ children, icon, selected, onPress }: ChipProps) {
	const content = (
		<Styled.Container selected={selected}>
			{icon ? React.isValidElement(icon) ? icon : <Styled.Icon source={icon} /> : null}
			<Styled.Text>{children}</Styled.Text>
		</Styled.Container>
	);

	if (!onPress) {
		return content;
	}

	return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
}

export default Chip;
