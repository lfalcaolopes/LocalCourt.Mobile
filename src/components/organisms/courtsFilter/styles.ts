import { colors, fontFamily } from '@/styles/theme';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

const Container = styled(BottomSheetScrollView).attrs({
	contentContainerStyle: {
		gap: 40,
		paddingTop: 24,
		paddingRight: 16,
		paddingBottom: 32,
		paddingLeft: 16
	}
})``;

const Header = styled.View`
	flex-direction: row;
	align-items: end;
	justify-content: space-between;
`;

const Title = styled.Text`
	line-height: 24px;
	font-family: ${fontFamily.semiBold};
	font-size: 24px;
	color: ${colors.gray[800]};
`;

const Body = styled.View`
	width: 100%;
	gap: 32px;
`;

const FilterSection = styled.View`
	gap: 12px;
`;

const FilterTitle = styled.Text`
	font-family: ${fontFamily.semiBold};
	font-size: 16px;
	color: ${colors.gray[800]};
`;

const Options = styled.View`
	flex-direction: row;
	gap: 6px;
	flex-wrap: wrap;
`;

const SearchTermShield = styled.View`
	position: absolute;
	width: 100%;
	height: 40px;
	flex-direction: row;
	gap: 8px;
	padding: 8px 12px;
	align-items: center;
	background-color: ${colors.gray[300]};
	border: 1px solid ${colors.gray[500]};
	border-radius: 8px;
`;

const SearchTerm = styled.Text`
	flex: 1;
	font-family: ${fontFamily.semiBold};
	font-size: 16px;
	color: ${colors.gray[600]};
`;

const PriceHeader = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const PriceDescription = styled.Text`
	font-family: ${fontFamily.regular};
	font-size: 12px;
	color: ${colors.gray[800]};
`;

const AvailabilityHeader = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const Availability = styled.View`
	margin-top: 12px;
	flex-direction: row;
	align-items: center;
	gap: 8px;
`;

export {
	Availability,
	AvailabilityHeader,
	Body,
	Container,
	FilterSection,
	FilterTitle,
	Header,
	Options,
	PriceDescription,
	PriceHeader,
	SearchTerm,
	SearchTermShield,
	Title
};
