import React, { useEffect, useState } from 'react';

import { RootStackParamList } from '@/app';
import { CourtCard } from '@/components/molecules';
import TitledHeader from '@/components/molecules/titledHeader';
import { ECourtCardStyleVariant, ECourtCardVariant } from '@/helpers/enums';
import { IRental, rentalsMock } from '@/helpers/mock';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Styled from './styles';

function MyRentals() {
	const [userRentals, setUserRentals] = useState<IRental[]>([]);

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'MyRentals'>>();

	function getUserRentals() {
		return rentalsMock;
	}

	useEffect(() => {
		const currentUserRentals = getUserRentals();

		setUserRentals(currentUserRentals);
	}, []);

	return (
		<Styled.Container>
			<Styled.Header>
				<TitledHeader title="Minhas Reservas" />
				<Styled.Description>
					Aqui você encontra o histórico das suas reservas, com informações sobre reservas futuras e
					concluídas.
				</Styled.Description>
			</Styled.Header>
			<Styled.Rentals>
				{userRentals.map((rental) => (
					<CourtCard
						key={rental.id}
						court={rental.court}
						rental={rental}
						onPress={() => navigation.navigate('Rental', { rental: rental })}
						variant={ECourtCardVariant.MY_RENTALS}
						styleVariant={ECourtCardStyleVariant.HORIZONTAL}
					/>
				))}
			</Styled.Rentals>
		</Styled.Container>
	);
}

export default MyRentals;
