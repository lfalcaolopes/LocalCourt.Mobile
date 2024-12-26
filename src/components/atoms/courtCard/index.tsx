import React from 'react';
import testImage from '../../../../assets/test-image.png';

import CourtCardDescription from '../courtCardDescription';
import * as Styled from './styles';

interface CourtCardProps {
	variant: 'dashboard' | 'myCourts' | 'myReservations';
	styleVariant: 'horizontal' | 'vertical';
}

function CourtCard({ variant = 'dashboard', styleVariant = 'horizontal' }: CourtCardProps) {
	const modalities = ['Futebol', 'Vôlei', 'Basquete', 'Tênis'];
	const price = 50;

	const noShowModalities = modalities.length - 1;

	return (
		<Styled.Container styleVariant={styleVariant}>
			<Styled.Preview source={testImage} />

			<Styled.Content>
				<Styled.Info>
					<Styled.Title>Nome da quadra</Styled.Title>
					<CourtCardDescription type="location">
						Super Localização da quadra para ser reservada e é isso ai
					</CourtCardDescription>
					<CourtCardDescription type="price">
						{variant === 'myReservations'
							? `R$ ${price.toFixed(2).replace('.', ',')}`
							: `A partir de R$ ${price.toFixed(2).replace('.', ',')}/h`}
					</CourtCardDescription>
				</Styled.Info>

				<Styled.AdditionalInfo>
					<Styled.Modalities>{`${modalities[0]} +${noShowModalities}`}</Styled.Modalities>
					<CourtCardDescription type="rating">4.5</CourtCardDescription>
				</Styled.AdditionalInfo>
			</Styled.Content>
		</Styled.Container>
	);
}

export default CourtCard;
