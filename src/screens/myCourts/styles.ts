import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
	padding: 16px;
	gap: 40px;
`;

const Header = styled.View`
	gap: 28px;
`;
const Description = styled.Text`
	font-family: ${fontFamily.regular};
	font-size: 12px;
	color: ${colors.gray[800]};

	text-align: center;
`;

const Courts = styled.View`
	gap: 8px;
`;

export { Container, Courts, Description, Header };
