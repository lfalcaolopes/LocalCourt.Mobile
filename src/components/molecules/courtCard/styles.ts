import { ECourtCardStyleVariant } from '@/helpers/enums';
import { colors, fontFamily } from '@/styles/theme';
import styled from 'styled-components/native';

interface StyleVariantProps {
	styleVariant: ECourtCardStyleVariant;
}

const Container = styled.Pressable<{ styleVariant: StyleVariantProps }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	padding: 8px;
	background-color: ${colors.gray[100]};
	border: 1px solid ${colors.gray[200]};
	border-radius: 8px;

	${({ styleVariant }: StyleVariantProps) =>
		styleVariant === ECourtCardStyleVariant.HORIZONTAL &&
		`
    flex-direction: row;
		height: fit-content;
		width: 100%;
  `}
	${({ styleVariant }: StyleVariantProps) =>
		styleVariant === ECourtCardStyleVariant.VERTICAL &&
		`
		flex-direction: column;
    width: 100%;
		height: fit-content;
  `}
`;

const Preview = styled.Image<{ styleVariant: StyleVariantProps }>`
	border-radius: 8px;
	${({ styleVariant }: StyleVariantProps) =>
		styleVariant === ECourtCardStyleVariant.HORIZONTAL &&
		`
		height: 90%;
		width: 128px;
	`}
	${({ styleVariant }: StyleVariantProps) =>
		styleVariant === ECourtCardStyleVariant.VERTICAL &&
		`
		height: 160px;
		width: 100%;
	`}
`;

const Content = styled.View<{ styleVariant: StyleVariantProps }>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
	gap: 10px;
	${({ styleVariant }: StyleVariantProps) =>
		styleVariant === ECourtCardStyleVariant.VERTICAL &&
		`
		width: 100%;
		gap: 24px;
	`}
`;

const Info = styled.View`
	display: flex;
	gap: 4px;
`;

const Title = styled.Text`
	font-size: 16px;
	font-family: ${fontFamily.semiBold};
	color: ${colors.gray[800]};
`;

const Description = styled.View``;

const AdditionalInfo = styled.View`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;
`;

const ModalitiesText = styled.Text`
	font-size: 12px;
	font-family: ${fontFamily.regular};
	color: ${colors.gray[800]};
`;

const DateText = styled.Text`
	font-size: 12px;
	font-family: ${fontFamily.semiBold};
	color: ${colors.gray[800]};
`;

export {
	AdditionalInfo,
	Container,
	Content,
	DateText,
	Description,
	Info,
	ModalitiesText,
	Preview,
	Title
};
