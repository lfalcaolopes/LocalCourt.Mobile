import React, { useEffect, useState } from 'react';

import { RootStackParamList } from '@/app';
import { CourtCard } from '@/components/molecules';
import TitledHeader from '@/components/molecules/titledHeader';
import { ECourtCardStyleVariant, ECourtCardVariant } from '@/helpers/enums';
import { ICourt, courtsMock } from '@/helpers/mock';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
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
