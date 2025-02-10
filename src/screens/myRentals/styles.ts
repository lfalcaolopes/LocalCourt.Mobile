import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
	padding: 16px;
	gap: 40px;
`;

const Header = styled.View`
	gap: 28px;
`;

const TitleHeader = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.Text`
	font-family: ${fontFamily.bold};
	font-size: 20px;
	color: ${colors.gray[800]};
`;

const Description = styled.Text`
	font-family: ${fontFamily.regular};
	font-size: 12px;
	color: ${colors.gray[800]};

	text-align: center;
`;

const Rentals = styled.View`
	gap: 8px;
`;

export { Container, Description, Header, Rentals, Title, TitleHeader };
