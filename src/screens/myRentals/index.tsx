import React, { useEffect, useState } from 'react';

import { RootStackParamList } from '@/app';
import { ArrowButton } from '@/components/atoms';
import { CourtCard } from '@/components/molecules';
import { ECourtCardStyleVariant, ECourtCardVariant } from '@/helpers/enums';
import { IRental, rentalsMock } from '@/helpers/mock';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';
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
				<Styled.TitleHeader>
					<ArrowButton onPress={() => navigation.goBack()} />
					<Styled.Title>Minhas Reservas</Styled.Title>
					<View style={{ width: 24 }} />
				</Styled.TitleHeader>
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
						onPress={() => console.log('press')}
						variant={ECourtCardVariant.MY_RENTALS}
						styleVariant={ECourtCardStyleVariant.HORIZONTAL}
					/>
				))}
			</Styled.Rentals>
		</Styled.Container>
	);
}

export default MyRentals;
