import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 4px;
`;

const Icon = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 12px;
`;

interface TextProps {
	isRating: boolean;
}

const Text = styled.Text<{ isRating: TextProps }>`
	font-family: ${fontFamily.regular};
	font-size: ${({ isRating }: TextProps) => (isRating ? '10px' : '8px')};
	color: ${({ isRating }: TextProps) => (isRating ? colors.gray[800] : colors.gray[600])};
`;

export { Container, Icon, Text };
