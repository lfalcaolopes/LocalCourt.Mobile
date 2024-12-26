import { colors } from '@/styles/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';

import * as Styled from './styles';

interface CourtCardDescriptionProps {
	children: React.ReactNode;
	type: 'location' | 'rating' | 'price';
}

function CourtCardDescription({ type, children }: CourtCardDescriptionProps) {
	return (
		<Styled.Container>
			<Styled.Icon>
				{type === 'location' && <FontAwesome6 name="location-dot" size={10} color={colors.acent} />}
				{type === 'price' && <FontAwesome6 name="money-bill" size={10} color={colors.acent} />}
				{type === 'rating' && <FontAwesome name="star" size={12} color="#EBC351" />}
			</Styled.Icon>
			<Styled.Text numberOfLines={1} ellipsizeMode="tail" isRating={type === 'rating'}>
				{children}
			</Styled.Text>
		</Styled.Container>
	);
}

export default CourtCardDescription;
