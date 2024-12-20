import React from 'react';

import { colors } from '@/styles/theme';
import { ActivityIndicator } from 'react-native';
import { s } from './styles';

function Loading() {
	return <ActivityIndicator style={s.Container} color={colors.acent} />;
}

export default Loading;
