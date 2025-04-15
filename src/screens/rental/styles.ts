import { colors, fontFamily } from '@/styles/theme';
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
	gap: 4px;
`;

const InfoRow = styled.View`
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
	gap: 8px;
`;

const InfoText = styled.Text`
	font-family: ${fontFamily.regular};
	font-size: 14px;
	color: ${colors.gray[800]};
`;

const InfoTextBold = styled.Text`
	font-family: ${fontFamily.semiBold};
	font-size: 16px;
	color: ${colors.gray[800]};
`;

const CourtInfo = styled.View`
	gap: 16px;
`;

const Pricing = styled.View`
	gap: 12px;
`;

const PricingDetails = styled.View`
	gap: 2px;
`;

export {
	Carousel,
	Container,
	CourtInfo,
	Info,
	InfoRow,
	InfoText,
	InfoTextBold,
	Pricing,
	PricingDetails
};
