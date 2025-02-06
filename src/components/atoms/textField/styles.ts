import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';
import { TextFieldProps } from './index';

type iconPositionType = Pick<TextFieldProps<never>, 'iconPosition'>;

const Container = styled.View`
	flex-shrink: 1;
	display: flex;
	flex-direction: column;
	gap: 1px;
`;

const TextField = styled.Pressable<iconPositionType>`
	width: 100%;
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
	flex: 1;
	height: 100%;
	outline-width: 0;
`;

const Error = styled.Text`
	height: 4px;
	font-family: ${fontFamily.semiBold};
	color: ${colors.error};
	font-size: 10px;
`;

export { Container, Error, TextField, TextInput };
