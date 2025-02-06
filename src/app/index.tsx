import { Homepage } from '@/screens';
import { colors } from '@/styles/theme';
import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

function index() {
	return (
		<SafeAreaView style={{ height: '100%', padding: 0, backgroundColor: colors.gray[100] }}>
			<StatusBar barStyle="dark-content" />
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Homepage />
			</GestureHandlerRootView>
		</SafeAreaView>
	);
}

export default index;
