import { fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const StatusText = styled.Text<{ color: string; large?: boolean }>`
	font-size: ${({ large }: { large?: boolean }) => (large ? '14px' : '10px')};
	font-family: ${fontFamily.semiBold};
	color: ${({ color }: { color: string }) => color};
`;

export { StatusText };
