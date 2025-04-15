import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View<{ isRating: boolean }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${({ isRating }: { isRating: boolean }) => (isRating ? '4px' : '8px')};
`;

const Icon = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 14px;
`;

interface TextProps {
	isRating: boolean;
}

const Text = styled.Text<{ isRating: TextProps }>`
	${({ isRating }: TextProps) => !isRating && 'flex: 1'};
	font-family: ${fontFamily.regular};
	font-size: 12px;
	color: ${({ isRating }: TextProps) => (isRating ? colors.gray[800] : colors.gray[600])};
`;

export { Container, Icon, Text };
