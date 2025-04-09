import React from 'react';

import { RootStackParamList } from '@/app';
import { Button, Divisor, RentalStatus } from '@/components/atoms';
import Extras from '@/components/molecules/extras';
import TitledHeader from '@/components/molecules/titledHeader';
import { ERentalStatus } from '@/helpers/enums';
import { colors } from '@/styles/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Image } from 'react-native';

import RentalModality from '@/components/atoms/rentalModality';
import CourtAddress from '@/components/molecules/courtAddress';
import ImageCarousel from '@/components/molecules/imageCarousel';
import { formatTimeRange } from '@/helpers/dateFormating';
import DashedLine from '../../../assets/utils/dashed-line.png';
import * as Styled from './styles';

type RentalScreenProps = NativeStackScreenProps<RootStackParamList, 'Rental'>;

function Rental({ route }: RentalScreenProps) {
	const { rental } = route.params;

	const formattedDate = format(new Date(rental.startRent), "dd 'de' MMMM yyyy", {
		locale: ptBR
	});

	return (
		<Styled.Container>
			<TitledHeader title={rental.court.name} />

			<Styled.Carousel>
				<ImageCarousel images={rental.court.imagesUrl} />
			</Styled.Carousel>

			<Styled.Info>
				<Styled.InfoRow>
					<Styled.InfoText>{formattedDate}</Styled.InfoText>
					<RentalStatus status={rental.status as ERentalStatus} />
				</Styled.InfoRow>
				<Styled.InfoRow>
					<Styled.InfoText>{formatTimeRange(rental.startRent, rental.duration)}</Styled.InfoText>
				</Styled.InfoRow>
			</Styled.Info>

			<Styled.CourtInfo>
				<Divisor />

				<RentalModality modality={rental.modality} />

				<Divisor />

				{rental?.court.additionals.length !== 0 && (
					<>
						<Extras selectedExtras={rental.court?.additionals} />

						<Divisor />
					</>
				)}
			</Styled.CourtInfo>

			<CourtAddress address={rental.court.address} />

			<Image source={DashedLine} style={{ width: '100%', height: 2 }} />

			<Styled.Pricing>
				<Styled.PricingDetails>
					<Styled.InfoRow>
						<Styled.InfoText>Valor por hora:</Styled.InfoText>
						<Styled.InfoText>{`R$ ${rental.price}`}</Styled.InfoText>
					</Styled.InfoRow>
					<Styled.InfoRow>
						<Styled.InfoText>Duração:</Styled.InfoText>
						<Styled.InfoText>{`${rental.duration} ${rental.duration > 1 ? 'Horas' : 'Hora'}`}</Styled.InfoText>
					</Styled.InfoRow>
				</Styled.PricingDetails>
				<Styled.InfoRow>
					<Styled.InfoTextBold>Total:</Styled.InfoTextBold>
					<Styled.InfoTextBold>{`R$ ${rental.price * rental.duration}`}</Styled.InfoTextBold>
				</Styled.InfoRow>
			</Styled.Pricing>

			<Button fullWidth color={colors.error} onClick={() => console.log('cancelado')}>
				Cancelar Reserva
			</Button>
		</Styled.Container>
	);
}

export default Rental;
