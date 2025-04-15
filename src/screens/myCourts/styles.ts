import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
	padding: 16px;
`;

const Header = styled.View``;

const Description = styled.Text`
	font-family: ${fontFamily.regular};
	font-size: 14px;
	color: ${colors.gray[800]};

	text-align: center;
`;

export { Container, Description, Header };
