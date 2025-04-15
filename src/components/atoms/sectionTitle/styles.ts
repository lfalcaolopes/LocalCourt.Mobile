import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
`;

const Title = styled.Text`
	white-space: nowrap;
	font-family: ${fontFamily.semiBold};
	color: ${colors.gray[800]};
	font-size: 20px;
`;

const Divider = styled.View`
	width: 100%;
	max-width: 40px;
	height: 1px;
	border-radius: 1px;
	background-color: ${colors.acent};
`;

export { Container, Divider, Title };
