import { EButtonVariant } from '@/helpers/enums';
import { fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';
import { ButtonProps } from './index';

type ButtonStyleProps = Pick<ButtonProps, 'color' | 'variant' | 'fullWidth'>;

const Container = styled.TouchableOpacity<ButtonStyleProps>`
	width: ${(props: ButtonStyleProps) => (props.fullWidth ? '100%' : 'fit-content')};
	flex: 1;
	padding: 8px 16px;
	border-radius: 8px;
	border-width: 2px;
	align-self: flex-start;
	align-items: center;

	border-color: ${(props: ButtonStyleProps) => props.color};
	background-color: ${(props: ButtonStyleProps) =>
		props.variant === EButtonVariant.FILL ? props.color : 'transparent'};
`;

const Text = styled.Text<ButtonStyleProps>`
	font-family: ${fontFamily.bold};
	font-size: 16px;

	color: ${(props: ButtonStyleProps) =>
		props.variant === EButtonVariant.FILL ? 'white' : props.color};
`;

export { Container, Text };
