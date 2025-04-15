import { fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const StatusText = styled.Text<{ color: string }>`
	font-size: 10px;
	font-family: ${fontFamily.semiBold};
	color: ${({ color }: { color: string }) => color};
`;

export { StatusText };
