import { colors, fontFamily } from '@/styles/theme';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(ScrollView).attrs({
	contentContainerStyle: {
		display: 'flex',
		gap: 24,
		padding: 16
	}
})``;

const Header = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: ${colors.gray[100]};
	padding: 16px 0;
`;

const Menu = styled.TouchableOpacity`
	padding: 8px;
`;

const Body = styled(ScrollView).attrs({
	contentContainerStyle: {
		display: 'flex',
		gap: 30
	}
})``;

const RentalSection = styled.View`
	display: flex;
	gap: 20px;
`;

const Rentals = styled(ScrollView).attrs({
	horizontal: true,
	contentContainerStyle: {
		display: 'flex',
		flexDirection: 'row',
		gap: 12
	}
})``;

const CourtSection = styled.View`
	display: flex;
	gap: 20px;
	padding-bottom: 60px;
`;

const CourtSectionHeader = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const CourtsFilter = styled.Pressable`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 2px;
`;

const Filter = styled.Text`
	font-family: ${fontFamily.semiBold};
	font-size: 12px;
	color: ${colors.gray[800]};
`;

const Courts = styled.View`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding-bottom: 80px;
`;

const Map = styled.Pressable`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 8px 16px;
	border-radius: 16px;

	position: absolute;
	bottom: 20px;
	align-self: center;

	z-index: 1;

	background-color: ${colors.acent};
`;

const MapText = styled.Text`
	font-family: ${fontFamily.semiBold};
	font-size: 16px;
	color: ${colors.gray[100]};
`;

export {
	Body,
	Container,
	CourtSection,
	CourtSectionHeader,
	Courts,
	CourtsFilter,
	Filter,
	Header,
	Map,
	MapText,
	Menu,
	RentalSection,
	Rentals
};
