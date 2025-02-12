import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
	flex: 1;
	gap: 4px;
`;

const Label = styled.Text`
	font-family: ${fontFamily.semiBold};
	font-size: 10px;
	color: ${colors.gray[500]};
`;

const Price = styled.View`
	flex-direction: row;
	gap: 4px;
	align-items: flex-end;
`;

const PriceText = styled.Text`
	font-family: ${fontFamily.regular};
	font-size: 14px;
	color: ${colors.gray[900]};
`;

const PerHour = styled.Text`
	font-family: ${fontFamily.regular};
	font-size: 10px;
	color: ${colors.gray[500]};
`;

export { Container, Label, PerHour, Price, PriceText };
