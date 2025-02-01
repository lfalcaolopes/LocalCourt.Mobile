import React from 'react';

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
	fullWidth?: boolean;
}

function Button({
	children,
	onClick,
	color,
	variant = ButtonVariant.FILL,
	fullWidth = false
}: ButtonProps) {
	return (
		<Styled.Container onPress={onClick} color={color} variant={variant} fullWidth={fullWidth}>
			<Styled.Text color={color} variant={variant}>
				{children}
			</Styled.Text>
		</Styled.Container>
	);
}

export default Button;
