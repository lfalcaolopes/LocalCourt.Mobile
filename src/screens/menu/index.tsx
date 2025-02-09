import React, { ReactNode } from 'react';
import { Text } from 'react-native';

import ArrowButton from '@/components/atoms/arrowButton';
import Divisor from '@/components/atoms/divisor';
import ProfileCard from '@/components/molecules/profileCard';
import { colors } from '@/styles/theme';
import Feather from '@expo/vector-icons/Feather';
import * as Styled from './styles';

interface IActionButton {
	id: string;
	name: string;
	page: ReactNode;
}

const ActionButtons = [
	{
		id: '1',
		name: 'Configuração',
		page: <Text>Configuração</Text>
	},
	{
		id: '2',
		name: 'Minhas Reservas',
		page: <Text>Minhas Reservas</Text>
	},
	{
		id: '3',
		name: 'Minhas Quadras',
		page: <Text>Minhas Quadras</Text>
	},
	{
		id: '4',
		name: 'Notificações',
		page: <Text>Notificações</Text>
	},
	{
		id: '5',
		name: 'Ajuda',
		page: <Text>Ajuda</Text>
	},
	{
		id: '6',
		name: 'Sobre o App',
		page: <Text>Sobre o App</Text>
	}
] as IActionButton[];

function Menu() {
	return (
		<Styled.Container>
			<Styled.Menu>
				<ArrowButton onPress={() => console.log('back')} direction="left" />

				<ProfileCard />

				<Divisor />

				<Styled.Options>
					{ActionButtons.map((x) => (
						<Styled.Option key={x.id} onPress={() => console.log(x.name)}>
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
