import { fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';
import { ButtonProps, ButtonVariant } from './index';

type ButtonStyleProps = Pick<ButtonProps, 'color' | 'variant'>;

const Container = styled.View<ButtonStyleProps>`
	width: fit-content;
	padding: 8px 12px;
	border-radius: 8px;
	border-width: 2px;

	border-color: ${(props: ButtonStyleProps) => props.color};
	background-color: ${(props: ButtonStyleProps) =>
		props.variant === ButtonVariant.FILL ? props.color : 'transparent'};
`;

const Text = styled.Text<ButtonStyleProps>`
	font-family: ${fontFamily.bold};
	font-size: 16px;

	color: ${(props: ButtonStyleProps) =>
		props.variant === ButtonVariant.FILL ? 'white' : props.color};
`;

export { Container, Text };
