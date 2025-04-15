import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
	padding: 16px;
	padding-top: 8px;
`;

const Header = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 16px;
`;

const Menu = styled.TouchableOpacity`
	padding: 8px;
`;

const ListHeader = styled.View`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

const RentalSection = styled.View`
	display: flex;
	gap: 20px;
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
	font-size: 14px;
	color: ${colors.gray[800]};
`;

const Courts = styled.View`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding-bottom: 80px;
`;

const Map = styled.Pressable<{ filterIsVisible: boolean }>`
	display: ${({ filterIsVisible }: { filterIsVisible: boolean }) =>
		filterIsVisible ? 'none' : 'flex'};
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 8px 16px;
	border-radius: 20px;

	position: absolute;
	bottom: 20px;
	align-self: center;

	background-color: ${colors.acent};
`;

const MapText = styled.Text`
	font-family: ${fontFamily.semiBold};
	font-size: 16px;
	color: ${colors.gray[100]};
`;

export {
	Container,
	CourtSectionHeader,
	Courts,
	CourtsFilter,
	Filter,
	Header,
	ListHeader,
	Map,
	MapText,
	Menu,
	RentalSection
};
