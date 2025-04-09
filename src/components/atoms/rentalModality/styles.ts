import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;

const Icon = styled.Image`
	width: 28px;
	height: 28px;
`;

const Text = styled.Text`
	height: 24px;
	font-family: ${fontFamily.semiBold};
	font-size: 16px;
	color: ${colors.gray[700]};
`;

export { Container, Icon, Text };
