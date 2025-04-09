import React, { useEffect, useState } from 'react';

import { IUser, usersMock } from '@/helpers/mock';
import { colors } from '@/styles/theme';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Skeleton from './skeleton';
import * as Styled from './styles';

function ProfileCard() {
	const [currentUser, setCurrentUser] = useState<IUser>();
	const [isLoading, setIsLoading] = useState(false);

	function getUser() {
		return usersMock[0];
	}

	useEffect(() => {
		setIsLoading(true);

		const currentUser = getUser();

		setIsLoading(false);
		setCurrentUser(currentUser);
	}, []);

	return (
		<Styled.Container>
			{isLoading ? (
				<Skeleton />
			) : (
				<Styled.Info>
					{currentUser?.image ? (
						<Styled.Image source={{ uri: currentUser?.image }} />
					) : (
						<Styled.DefaultImage>
							<MaterialIcons name="person-outline" size={30} color={colors.gray[600]} />
						</Styled.DefaultImage>
					)}
					<Styled.Details>
						<Styled.Name>{currentUser?.name}</Styled.Name>
						<Styled.ShowMore>Mostrar Perfil</Styled.ShowMore>
					</Styled.Details>
				</Styled.Info>
			)}
			<Feather name="chevron-right" size={16} color={colors.gray[600]} />
		</Styled.Container>
	);
}

export default ProfileCard;
