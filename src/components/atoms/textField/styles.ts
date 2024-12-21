import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';
import { TextFieldProps } from './index';

type iconPositionType = Pick<TextFieldProps, 'iconPosition'>;

const Container = styled.View<iconPositionType>`
	width: 100%;
	height: 40px;
	display: flex;
	flex-direction: ${(props: iconPositionType) =>
		props.iconPosition === 'left' ? 'row' : 'row-reverse'};
	gap: 8px;
	padding: 8px 12px;
	justify-content: center;
	align-items: center;
	background-color: ${colors.gray[50]};
	border: 1px solid ${colors.gray[300]};
	border-radius: 8px;
`;

const TextInput = styled.TextInput`
	font-family: ${fontFamily.regular};
	width: 100%;
	height: 100%;
	outline-width: 0;
`;

export { Container, TextInput };
