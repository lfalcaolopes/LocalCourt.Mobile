import React from 'react';
import { TouchableOpacity } from 'react-native';

import * as Styled from './styles';

export enum ButtonVariant {
	FILL = 'fill',
	OUTLINE = 'outline'
}

export interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	color: string;
	variant?: ButtonVariant;
}

function Button({ children, onClick, color, variant = ButtonVariant.FILL }: ButtonProps) {
	return (
		<TouchableOpacity onPress={onClick}>
			<Styled.Container color={color} variant={variant}>
				<Styled.Text color={color} variant={variant}>
					{children}
				</Styled.Text>
			</Styled.Container>
		</TouchableOpacity>
	);
}

export default Button;
