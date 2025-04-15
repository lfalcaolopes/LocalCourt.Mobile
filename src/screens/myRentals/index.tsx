import React, { useEffect, useState } from 'react';

import { RootStackParamList } from '@/app';
import { CourtCard } from '@/components/molecules';
import TitledHeader from '@/components/molecules/titledHeader';
import { ECourtCardStyleVariant, ECourtCardVariant } from '@/helpers/enums';
import { IRental, rentalsMock } from '@/helpers/mock';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
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
			</Styled.Header>
			<FlatList
				data={userRentals}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={() => (
					<Styled.Description>
						Aqui você encontra o histórico das suas reservas, com informações sobre reservas futuras
						e concluídas.
					</Styled.Description>
				)}
				ListHeaderComponentStyle={{ paddingTop: 16, paddingBottom: 32 }}
				contentContainerStyle={{ gap: 8, paddingBottom: 32 }}
				renderItem={({ item }) => (
					<CourtCard
						court={item.court}
						rental={item}
						onPress={() => navigation.navigate('Rental', { rental: item })}
						variant={ECourtCardVariant.MY_RENTALS}
						styleVariant={ECourtCardStyleVariant.HORIZONTAL}
					/>
				)}
			/>
		</Styled.Container>
	);
}

export default MyRentals;
