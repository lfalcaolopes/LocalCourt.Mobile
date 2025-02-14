import React from 'react';

import { RootStackParamList } from '@/app';
import ArrowButton from '@/components/atoms/arrowButton';
import Divisor from '@/components/atoms/divisor';
import ProfileCard from '@/components/molecules/profileCard';
import { colors } from '@/styles/theme';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Styled from './styles';

interface IActionButton {
	id: string;
	name: string;
	pageName: Exclude<keyof RootStackParamList, 'Court'>;
}

const ActionButtons = [
	{
		id: '1',
		name: 'Configuração',
		pageName: 'Menu'
	},
	{
		id: '2',
		name: 'Minhas Reservas',
		pageName: 'MyRentals'
	},
	{
		id: '3',
		name: 'Minhas Quadras',
		pageName: 'MyCourts'
	},
	{
		id: '4',
		name: 'Notificações',
		pageName: 'Menu'
	},
	{
		id: '5',
		name: 'Ajuda',
		pageName: 'Menu'
	},
	{
		id: '6',
		name: 'Sobre o App',
		pageName: 'Menu'
	}
] as IActionButton[];

function Menu() {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Menu'>>();

	return (
		<Styled.Container>
			<Styled.Menu>
				<ArrowButton onPress={() => navigation.goBack()} direction="left" />

				<ProfileCard />

				<Divisor />

				<Styled.Options>
					{ActionButtons.map((x) => (
						<Styled.Option key={x.id} onPress={() => navigation.navigate(x.pageName)}>
							<Styled.OptionText>{x.name}</Styled.OptionText>
							<Feather name="chevron-right" size={16} color={colors.gray[600]} />
						</Styled.Option>
					))}

					<Styled.Option onPress={() => console.log('sair')}>
						<Styled.OptionText>Sair</Styled.OptionText>
					</Styled.Option>
				</Styled.Options>
			</Styled.Menu>

			<Styled.Version>Versão do app: 1.0.0</Styled.Version>
		</Styled.Container>
	);
}

export default Menu;
