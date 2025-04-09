import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.Text`
	font-family: ${fontFamily.bold};
	font-size: 20px;
	color: ${colors.gray[800]};
`;

export { Container, Title };
