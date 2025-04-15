import React, { useEffect, useState } from 'react';

import { RootStackParamList } from '@/app';
import { CourtCard } from '@/components/molecules';
import TitledHeader from '@/components/molecules/titledHeader';
import { ECourtCardStyleVariant, ECourtCardVariant } from '@/helpers/enums';
import { ICourt, courtsMock } from '@/helpers/mock';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import * as Styled from './styles';

function MyCourts() {
	const [userCourts, setUserCourts] = useState<ICourt[]>([]);

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'MyCourts'>>();

	function getUserCourts() {
		return courtsMock;
	}

	useEffect(() => {
		const currentUserCourts = getUserCourts();

		setUserCourts(currentUserCourts);
	}, []);

	return (
		<Styled.Container>
			<Styled.Header>
				<TitledHeader title="Minhas Quadras" />
			</Styled.Header>
			<FlatList
				data={userCourts}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={() => (
					<Styled.Description>
						Gerencie as quadras que você cadastrou: veja detalhes, edite informações e controle a
						disponibilidade para reservas
					</Styled.Description>
				)}
				ListHeaderComponentStyle={{ paddingTop: 16, paddingBottom: 32 }}
				contentContainerStyle={{ gap: 8, paddingBottom: 32 }}
				renderItem={({ item }) => (
					<CourtCard
						court={item}
						onPress={() => navigation.navigate('Court', { court: item, isAdmin: true })}
						variant={ECourtCardVariant.MY_COURTS}
						styleVariant={ECourtCardStyleVariant.HORIZONTAL}
					/>
				)}
			/>
		</Styled.Container>
	);
}

export default MyCourts;
