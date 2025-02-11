import React from 'react';

import { EButtonVariant } from '@/helpers/enums';
import * as Styled from './styles';

export interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	color: string;
	variant?: EButtonVariant;
	fullWidth?: boolean;
}

function Button({
	children,
	onClick,
	color,
	variant = EButtonVariant.FILL,
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
