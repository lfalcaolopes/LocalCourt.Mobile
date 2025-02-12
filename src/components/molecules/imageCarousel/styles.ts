import styled from 'styled-components/native';

const Image = styled.Image<{ itemHeight: number }>`
	border-radius: 8px;
	width: 100%;
	height: ${({ itemHeight }: { itemHeight: number }) => itemHeight}px;
`;

export { Image };
