import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
`;

const Address = styled.View`
	width: 70%;
	flex-direction: row;
	align-items: center;
`;

const AddressText = styled.Text`
	font-family: ${fontFamily.semiBold};
	font-size: 14px;
	color: ${colors.gray[800]};
`;

export { Address, AddressText, Container };
