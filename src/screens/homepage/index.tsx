import SectionTitle from '@/components/atoms/sectionTitle';
import CourtCard from '@/components/molecules/courtCard';
import CourtsFilter from '@/components/organisms/courtsFilter';
import { ECourtCardStyleVariant, ECourtCardVariant } from '@/helpers/enums';
import { ICourt, IRental, courtsMock, rentalsMock } from '@/helpers/mock';
import { colors } from '@/styles/theme';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import Lettering from '../../../assets/logo/Lettering.png';
import * as Styled from './styles';

function Homepage() {
	const [lastRentals, setLastRentals] = useState<IRental[]>([]);
	const [courts, setCourts] = useState<ICourt[]>([]);
	const [filterIsVisible, setFilterIsVisible] = useState(false);

	function getLastRentals() {
		return rentalsMock;
	}

	function getCourts() {
		return courtsMock;
	}

	useEffect(() => {
		const rentals = getLastRentals();
		const courts = getCourts();

		setLastRentals(rentals);
		setCourts(courts);
	}, []);

	return (
		<>
			<Styled.Container stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
				<Styled.Header>
					<Image source={Lettering} style={{ height: 16, width: 120 }} />

					<Styled.Menu onPress={() => console.log('menu')}>
						<MaterialIcons name="menu" size={24} color={colors.gray[600]} />
					</Styled.Menu>
				</Styled.Header>
				<Styled.Body>
					<Styled.RentalSection>
						<SectionTitle>Suas Últimas Reservas</SectionTitle>

						<FlatList
							data={lastRentals}
							horizontal
							keyExtractor={(item) => item.id}
							showsHorizontalScrollIndicator={false}
							renderItem={({ item }) => (
								<CourtCard
									court={item.court}
									rental={item}
									variant={ECourtCardVariant.DASHBOARD}
									styleVariant={ECourtCardStyleVariant.VERTICAL}
								/>
							)}
							contentContainerStyle={{ gap: 12 }}
						/>
					</Styled.RentalSection>
					<Styled.CourtSection>
						<Styled.CourtSectionHeader>
							<SectionTitle>Encontre Sua Quadra</SectionTitle>

							<Styled.CourtsFilter onPress={() => setFilterIsVisible(true)}>
								<Feather name="filter" size={16} color={colors.acent} />

								<Styled.Filter>Filtrar</Styled.Filter>
							</Styled.CourtsFilter>
						</Styled.CourtSectionHeader>

						<FlatList
							data={courts}
							keyExtractor={(item) => item.id}
							showsHorizontalScrollIndicator={false}
							renderItem={({ item }) => (
								<CourtCard
									court={item}
									variant={ECourtCardVariant.DASHBOARD}
									styleVariant={ECourtCardStyleVariant.HORIZONTAL}
								/>
							)}
							contentContainerStyle={{ gap: 12 }}
						/>
					</Styled.CourtSection>
				</Styled.Body>
			</Styled.Container>

			<CourtsFilter isVisible={filterIsVisible} onClose={() => setFilterIsVisible(false)} />

			<Styled.Map onPress={() => console.log('map')} filterIsVisible={filterIsVisible}>
				<Feather name="map" size={16} color={colors.gray[100]} />
				<Styled.MapText>Mapa</Styled.MapText>
			</Styled.Map>
		</>
	);
}

export default Homepage;
