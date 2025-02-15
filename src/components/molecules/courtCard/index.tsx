import React from 'react';

import CourtCardDescription from '@/components/atoms/courtCardDescription';
import CourtStatus from '@/components/atoms/courtStatus';
import RentalStatus from '@/components/atoms/rentalStatus';
import { formatRentalDateTime } from '@/helpers/dateFormating';
import { DefaultModalities } from '@/helpers/defaultModalities';
import {
	ECourtCardStyleVariant,
	ECourtCardVariant,
	ECourtStatus,
	ERentalStatus
} from '@/helpers/enums';
import { ICourt, IRental } from '@/helpers/mock';
import * as Styled from './styles';

interface CourtCardProps {
	variant: ECourtCardVariant;
	styleVariant: ECourtCardStyleVariant;
	court: ICourt;
	onPress: () => void;
	rental?: IRental;
}

function CourtCard({
	variant = ECourtCardVariant.DASHBOARD,
	styleVariant = ECourtCardStyleVariant.VERTICAL,
	court,
	rental,
	onPress
}: CourtCardProps) {
	const modalities = {
		shownModality: DefaultModalities.find((modality) => modality.id === court.modalities[0]),
		noShowModalities: court.modalities.length - 1
	};
	const { rentalDate, rentalStartTime, rentalEndTime } = formatRentalDateTime(
		rental?.startRent ?? '',
		rental?.duration ?? 0
	);

	return (
		<Styled.Container onPress={onPress} styleVariant={styleVariant}>
			<Styled.Preview source={court.imagesUrl[0]} />

			<Styled.Content>
				<Styled.Info>
					<Styled.Title>{court.name}</Styled.Title>
					<CourtCardDescription type="location">
						{`${court.address.district}, ${court.address.city}`}
					</CourtCardDescription>
					<CourtCardDescription type="price">
						{variant === ECourtCardVariant.MY_RENTALS
							? `R$ ${rental?.price.toFixed(2).replace('.', ',')}`
							: `A partir de R$ ${court.price.toFixed(2).replace('.', ',')}/h`}
					</CourtCardDescription>
				</Styled.Info>

				{/* row reversed */}
				<Styled.AdditionalInfo>
					{variant === ECourtCardVariant.DASHBOARD && (
						<>
							<CourtCardDescription type="rating">{court.rating.toFixed(1)}</CourtCardDescription>
							<Styled.ModalitiesText>
								{modalities.shownModality?.name}
								{modalities.noShowModalities > 0 ? ` +${modalities.noShowModalities}` : ''}
							</Styled.ModalitiesText>
						</>
					)}
					{variant === ECourtCardVariant.MY_COURTS && (
						<>
							<CourtStatus status={court.status ? ECourtStatus.ACTIVE : ECourtStatus.INACTIVE} />
						</>
					)}
					{variant === ECourtCardVariant.MY_RENTALS && (
						<>
							<RentalStatus status={rental?.status as ERentalStatus} />
							<Styled.DateText>
								{`${rentalDate} ${rentalStartTime} - ${rentalEndTime}`}
							</Styled.DateText>
						</>
					)}
				</Styled.AdditionalInfo>
			</Styled.Content>
		</Styled.Container>
	);
}

export default CourtCard;
