import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
	flex: 1;
	gap: 2px;
`;

const Label = styled.Text`
	font-family: ${fontFamily.semiBold};
	font-size: 12px;
	color: ${colors.gray[500]};
`;

const Value = styled.Text`
	font-family: ${fontFamily.regular};
	font-size: 14px;
	color: ${colors.gray[900]};
`;

const Fields = styled.View`
	flex-direction: row;
	flex: 1;
`;

export { Container, Fields, Label, Value };
