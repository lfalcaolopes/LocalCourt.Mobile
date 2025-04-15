import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(ScrollView).attrs({
	contentContainerStyle: {
		gap: 28,
		padding: 16
	}
})``;

const Carousel = styled.View`
	margin: -20px 0;
	margin-left: -16px;
`;

const Info = styled.View`
	gap: 8px;
`;

const InfoRow = styled.View`
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
	gap: 8px;
`;

const AdminButtons = styled.View`
	flex-direction: row;
	gap: 16px;
`;

export { AdminButtons, Carousel, Container, Info, InfoRow };
