import React from 'react';
import { View } from 'react-native';

import { ArrowButton } from '@/components/atoms';
import { useNavigation } from 'expo-router';
import * as Styled from './styles';

interface TitledHeaderProps {
	title: string;
}

function TitledHeader({ title }: TitledHeaderProps) {
	const navigation = useNavigation();

	return (
		<Styled.Container>
			<ArrowButton onPress={() => navigation.goBack()} />
			<Styled.Title>{title}</Styled.Title>
			<View style={{ width: 24 }} />
		</Styled.Container>
	);
}

export default TitledHeader;
