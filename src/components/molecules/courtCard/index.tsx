import React from 'react';

import CourtCardDescription from '@/components/atoms/courtCardDescription';
import CourtStatus from '@/components/atoms/courtStatus';
import RentalStatus from '@/components/atoms/rentalStatus';
import { formatRentalDateTime } from '@/helpers/dateFormating';
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
	rental?: IRental;
}

function CourtCard({
	variant = ECourtCardVariant.DASHBOARD,
	styleVariant = ECourtCardStyleVariant.VERTICAL,
	court,
	rental
}: CourtCardProps) {
	const noShowModalities = court.modalities.length - 1;
	const { rentalDate, rentalStartTime, rentalEndTime } = formatRentalDateTime(
		rental?.startRent ?? '',
		rental?.duration ?? 0
	);

	function handleCardPress() {
		console.log(variant, court.name, rental?.id);
	}

	return (
		<Styled.Container onPress={handleCardPress} styleVariant={styleVariant}>
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
							<Styled.ModalitiesText>{`${court.modalities[0]} +${noShowModalities}`}</Styled.ModalitiesText>
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
