import styled from 'styled-components/native';

const Container = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: space-between;
	min-height: 300px;
`;

const Fields = styled.View`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export { Container, Fields };
