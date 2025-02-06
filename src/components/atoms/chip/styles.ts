import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';
import { ChipProps } from './index';

type SelectedProps = Pick<ChipProps, 'selected'>;

const Container = styled.View<SelectedProps>`
	background-color: ${colors.gray[50]};
	display: flex;
	flex-direction: row;
	align-items: center;
	align-self: flex-start;
	padding: 4px 8px;
	gap: 4px;
	border: 2px solid ${(props: SelectedProps) => (props.selected ? colors.acent : colors.gray[200])};
	border-radius: 12px;
`;

const Icon = styled.Image`
	width: 16px;
	height: 16px;
`;

const Text = styled.Text`
	height: 16px;
	font-family: ${fontFamily.semiBold};
	font-size: 10px;
	color: ${colors.gray[700]};
`;

export { Container, Icon, Text };
