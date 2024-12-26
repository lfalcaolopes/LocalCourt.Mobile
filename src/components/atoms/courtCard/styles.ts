import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

interface ContainerProps {
	styleVariant: 'horizontal' | 'vertical';
}

const Container = styled.View<{ styleVariant: ContainerProps }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	padding: 8px;
	background-color: ${colors.gray[100]};
	border: 1px solid ${colors.gray[300]};
	border-radius: 8px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);

	${({ styleVariant }: ContainerProps) =>
		styleVariant === 'horizontal' &&
		`
    flex-direction: row;
  `}
	${({ styleVariant }: ContainerProps) =>
		styleVariant === 'vertical' &&
		`
    flex-direction: column;
    width: 144px;
    height: 160px;
  `}
`;

const Preview = styled.Image`
	width: 128px;
	height: 64px;
	border-radius: 8px;
`;

const Content = styled.View`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	gap: 8px;
`;

const Info = styled.View`
	display: flex;
	gap: 2px;
`;

const Title = styled.Text`
	font-size: 10px;
	font-family: ${fontFamily.bold};
	color: ${colors.gray[900]};
`;

const AdditionalInfo = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Modalities = styled.Text`
	font-size: 10px;
	font-family: ${fontFamily.regular};
	color: ${colors.gray[800]};
`;

export { AdditionalInfo, Container, Content, Info, Modalities, Preview, Title };
