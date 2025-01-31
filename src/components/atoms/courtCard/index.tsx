import React from 'react';

import ReservationStatus from '@/components/atoms/reservationStatus';
import { formatRentalDateTime } from '@/helpers/dateFormating';
import {
	ECourtCardStyleVariant,
	ECourtCardVariant,
	ECourtStatus,
	EReservationStatus
} from '@/helpers/enums';
import { ICourt, IRental } from '@/helpers/mock';
import CourtCardDescription from '../courtCardDescription';
import CourtStatus from '../courtStatus';
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

	return (
		<Styled.Container styleVariant={styleVariant}>
			<Styled.Preview source={court.imagesUrl[0]} />

			<Styled.Content>
				<Styled.Info>
					<Styled.Title>{court.name}</Styled.Title>
					<CourtCardDescription type="location">
						{`${court.address.district}, ${court.address.city}`}
					</CourtCardDescription>
					<CourtCardDescription type="price">
						{variant === ECourtCardVariant.MY_RESERVATIONS
							? `R$ ${rental?.price.toFixed(2).replace('.', ',')}`
							: `A partir de R$ ${court.price.toFixed(2).replace('.', ',')}/h`}
					</CourtCardDescription>
				</Styled.Info>

				{/* row reversed */}
				<Styled.AdditionalInfo>
					{variant === ECourtCardVariant.DASHBOARD && (
						<>
							<CourtCardDescription type="rating">{court.rating}</CourtCardDescription>
							<Styled.ModalitiesText>{`${court.modalities[0]} +${noShowModalities}`}</Styled.ModalitiesText>
						</>
					)}
					{variant === ECourtCardVariant.MY_COURTS && (
						<>
							<CourtStatus status={court.status ? ECourtStatus.ACTIVE : ECourtStatus.INACTIVE} />
						</>
					)}
					{variant === ECourtCardVariant.MY_RESERVATIONS && (
						<>
							<ReservationStatus status={rental?.status as EReservationStatus} />
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
