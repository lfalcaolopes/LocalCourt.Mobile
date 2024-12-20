import { colors, fontFamily } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
	container: {
		width: '100%',
		height: 40,
		display: 'flex',
		flexDirection: 'row-reverse',
		gap: 8,
		paddingVertical: 8,
		paddingHorizontal: 12,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.gray[50],
		borderColor: colors.gray[300],
		borderWidth: 1,
		borderRadius: 8
	},
	iconLeft: {
		flexDirection: 'row'
	},
	iconRight: {
		flexDirection: 'row-reverse'
	},
	input: {
		fontFamily: fontFamily.regular,
		width: '100%',
		height: '100%',
		outlineWidth: 0
	}
});
