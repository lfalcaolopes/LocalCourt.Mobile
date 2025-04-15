import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
const Info = styled.View`
	flex-direction: row;
	align-items: center;
	gap: 8px;
`;
const Image = styled.Image`
	height: 50px;
	width: 50px;
	border-radius: 50px;
	border: 1px solid ${colors.gray[400]};
`;

const DefaultImage = styled.View`
	height: 50px;
	width: 50px;
	border-radius: 50px;
	border: 1px solid ${colors.gray[400]};
	background-color: ${colors.gray[200]};
	align-items: center;
	justify-content: center;
`;

const Details = styled.View`
	gap: 4px;
`;
const Name = styled.Text`
	font-family: ${fontFamily.bold};
	font-size: 16px;
	color: ${colors.gray[800]};
`;
const ShowMore = styled.Text`
	font-family: ${fontFamily.regular};
	font-size: 12px;
	color: ${colors.gray[800]};
`;

export { Container, DefaultImage, Details, Image, Info, Name, ShowMore };
