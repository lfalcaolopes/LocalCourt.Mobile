import React, { useEffect, useState } from 'react';

import { RootStackParamList } from '@/app';
import { ArrowButton } from '@/components/atoms';
import { CourtCard } from '@/components/molecules';
import { ECourtCardStyleVariant, ECourtCardVariant } from '@/helpers/enums';
import { ICourt, courtsMock } from '@/helpers/mock';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';
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
				<Styled.TitleHeader>
					<ArrowButton onPress={() => navigation.goBack()} />
					<Styled.Title>Minhas Quadras</Styled.Title>
					<View style={{ width: 24 }} />
				</Styled.TitleHeader>
				<Styled.Description>
					Gerencie as quadras que você cadastrou: veja detalhes, edite informações e controle a
					disponibilidade para reservas
				</Styled.Description>
			</Styled.Header>
			<Styled.Courts>
				{userCourts.map((court) => (
					<CourtCard
						key={court.id}
						court={court}
						onPress={() => navigation.navigate('Court', { court: court, isAdmin: true })}
						variant={ECourtCardVariant.MY_COURTS}
						styleVariant={ECourtCardStyleVariant.HORIZONTAL}
					/>
				))}
			</Styled.Courts>
		</Styled.Container>
	);
}

export default MyCourts;
