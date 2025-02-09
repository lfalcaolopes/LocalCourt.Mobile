import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-between;
	padding: 16px;
`;

const Menu = styled.View`
	width: 100%;
	gap: 20px;
`;

const Options = styled.View`
	gap: 8px;
`;

const Option = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 4px 0;
`;

const OptionText = styled.Text`
	font-family: ${fontFamily.regular};
	font-size: 14px;
	color: ${colors.gray[800]};
`;

const Version = styled.Text`
	font-family: ${fontFamily.regular};
	font-size: 10px;
	color: ${colors.gray[400]};
`;

export { Container, Menu, Option, OptionText, Options, Version };
