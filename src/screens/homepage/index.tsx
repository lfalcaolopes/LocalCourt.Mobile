import { RootStackParamList } from '@/app';
import SectionTitle from '@/components/atoms/sectionTitle';
import CourtCard from '@/components/molecules/courtCard';
import CourtsFilter from '@/components/organisms/courtsFilter';
import { ECourtCardStyleVariant, ECourtCardVariant } from '@/helpers/enums';
import { ICourt, IRental, courtsMock, rentalsMock } from '@/helpers/mock';
import { colors } from '@/styles/theme';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import Lettering from '../../../assets/logo/Lettering.png';
import * as Styled from './styles';

function Homepage() {
	const [lastRental, setLastRental] = useState<IRental>();
	const [courts, setCourts] = useState<ICourt[]>([]);
	const [filterIsVisible, setFilterIsVisible] = useState(false);

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Homepage'>>();

	function getLastRental() {
		return rentalsMock[0];
	}

	function getCourts() {
		return courtsMock;
	}

	useEffect(() => {
		const rental = getLastRental();
		const courts = getCourts();

		setLastRental(rental);
		setCourts(courts);
	}, []);

	return (
		<>
			<Styled.Container>
				<Styled.Header>
					<Image source={Lettering} style={{ height: 16, width: 120 }} />

					<Styled.Menu onPress={() => navigation.navigate('Menu')}>
						<MaterialIcons name="menu" size={24} color={colors.gray[600]} />
					</Styled.Menu>
				</Styled.Header>
				<FlatList
					data={courts}
					keyExtractor={(item) => item.id}
					showsHorizontalScrollIndicator={false}
					ListHeaderComponent={() => (
						<Styled.ListHeader>
							{lastRental && (
								<Styled.RentalSection>
									<SectionTitle>Última Reserva</SectionTitle>

									<CourtCard
										court={lastRental.court}
										rental={lastRental}
										onPress={() =>
											navigation.navigate('Court', { court: lastRental.court, isAdmin: false })
										}
										variant={ECourtCardVariant.DASHBOARD}
										styleVariant={ECourtCardStyleVariant.HORIZONTAL}
									/>
								</Styled.RentalSection>
							)}

							<Styled.CourtSectionHeader>
								<SectionTitle>Encontre Sua Quadra</SectionTitle>

								<Styled.CourtsFilter onPress={() => setFilterIsVisible(true)}>
									<Feather name="filter" size={16} color={colors.acent} />

									<Styled.Filter>Filtrar</Styled.Filter>
								</Styled.CourtsFilter>
							</Styled.CourtSectionHeader>
						</Styled.ListHeader>
					)}
					contentContainerStyle={{ gap: 12, paddingBottom: 120 }}
					renderItem={({ item }) => (
						<CourtCard
							court={item}
							onPress={() => navigation.navigate('Court', { court: item, isAdmin: false })}
							variant={ECourtCardVariant.DASHBOARD}
							styleVariant={ECourtCardStyleVariant.VERTICAL}
						/>
					)}
				/>
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
