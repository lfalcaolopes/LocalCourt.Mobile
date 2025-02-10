import React, { useEffect, useState } from 'react';

import { ArrowButton } from '@/components/atoms';
import { CourtCard } from '@/components/molecules';
import { ECourtCardStyleVariant, ECourtCardVariant } from '@/helpers/enums';
import { ICourt, courtsMock } from '@/helpers/mock';
import { View } from 'react-native';
import * as Styled from './styles';

function MyCourts() {
	const [userCourts, setUserCourts] = useState<ICourt[]>([]);

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
					<ArrowButton onPress={() => console.log('back')} />
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
						variant={ECourtCardVariant.MY_COURTS}
						styleVariant={ECourtCardStyleVariant.HORIZONTAL}
						court={court}
					/>
				))}
			</Styled.Courts>
		</Styled.Container>
	);
}

export default MyCourts;
