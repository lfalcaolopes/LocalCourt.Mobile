import React from 'react';

import Loading from '@/components/atoms/loading';
import {
	OpenSans_400Regular,
	OpenSans_600SemiBold,
	OpenSans_700Bold,
	useFonts
} from '@expo-google-fonts/open-sans';
import { Stack } from 'expo-router';

function RootLayout() {
	const [fontsLoaded] = useFonts({
		OpenSans_400Regular,
		OpenSans_600SemiBold,
		OpenSans_700Bold
	});

	if (!fontsLoaded) {
		return <Loading />;
	}

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
		</Stack>
	);
}

export default RootLayout;
