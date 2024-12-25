import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
`;

const Title = styled.Text`
	font-family: ${fontFamily.semiBold};
	color: ${colors.gray[900]};
	font-size: 16px;
`;

const Divider = styled.View`
	width: 100%;
	max-width: 80px;
	height: 1px;
	border-radius: 1px;
	background-color: ${colors.acent};
`;

export { Container, Divider, Title };
