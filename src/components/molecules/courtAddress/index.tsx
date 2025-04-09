import React from 'react';

import { getShortAddress } from '@/helpers/addressFormating';
import { IAddress } from '@/helpers/mock';
import { colors } from '@/styles/theme';
import Feather from '@expo/vector-icons/Feather';
import * as Styled from './styles';

interface CourtAddressProps {
	address: IAddress;
}

function CourtAddress({ address }: CourtAddressProps) {
	return (
		<Styled.Container>
			<Styled.Address>
				<Styled.AddressText>{getShortAddress(address)}</Styled.AddressText>
			</Styled.Address>
			<Feather name="map" size={24} color={colors.gray[600]} />
		</Styled.Container>
	);
}

export default CourtAddress;
