import { ICourt } from '@/helpers/mock';
import { Welcome } from '@/screens';
import Court from '@/screens/court';
import Homepage from '@/screens/homepage';
import Menu from '@/screens/menu';
import MyCourts from '@/screens/myCourts';
import MyRentals from '@/screens/myRentals';
import { colors } from '@/styles/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export type RootStackParamList = {
	Homepage: undefined;
	Court: { court?: ICourt; isAdmin: boolean };
	Menu: undefined;
	MyCourts: undefined;
	MyRentals: undefined;
	Welcome: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function index() {
	return (
		<SafeAreaView style={{ height: '100%', padding: 0, backgroundColor: colors.gray[100] }}>
			<StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Stack.Navigator initialRouteName="Homepage" screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Homepage" component={Homepage} />
					<Stack.Screen name="Court" component={Court} initialParams={{ isAdmin: true }} />
					<Stack.Screen name="Menu" component={Menu} />
					<Stack.Screen name="MyCourts" component={MyCourts} />
					<Stack.Screen name="MyRentals" component={MyRentals} />
					<Stack.Screen name="Welcome" component={Welcome} />
				</Stack.Navigator>
			</GestureHandlerRootView>
		</SafeAreaView>
	);
}

export default index;
