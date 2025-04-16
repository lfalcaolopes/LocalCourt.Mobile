import { colors, fontFamily } from '@/styles/theme';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(ScrollView).attrs({
	contentContainerStyle: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1
	}
})``;

const Header = styled.View`
	margin: 40px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	padding: 0 16px;
`;

const Info = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`;

const Title = styled.Text`
	font-family: ${fontFamily.semiBold};
	color: ${colors.gray[900]};
	font-size: 24px;
`;

const Description = styled.Text`
	width: 250px;
	font-family: ${fontFamily.regular};
	color: ${colors.gray[600]};
	font-size: 14px;
	text-align: center;
`;

const Buttons = styled.View`
	display: flex;
	flex-direction: row;
`;

interface ButtonProps {
	isSelected: boolean;
}

const Button = styled.TouchableOpacity<{ isSelected: ButtonProps }>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 1;

	padding-bottom: 8px;
	border-bottom-width: 2px;
	border-bottom-color: ${({ isSelected }: ButtonProps) =>
		isSelected ? colors.acent : 'transparent'};
`;

const ButtonText = styled.Text<{ isSelected: ButtonProps }>`
	letter-spacing: 0.6px;
	font-family: ${fontFamily.semiBold};
	color: ${({ isSelected }: ButtonProps) => (isSelected ? colors.acent : colors.gray[400])};
	font-size: 12px;
`;

const FormContainer = styled.View`
	display: flex;
	flex-grow: 1;
	padding: 40px 30px 80px;
`;

export { Button, ButtonText, Buttons, Container, Description, FormContainer, Header, Info, Title };
