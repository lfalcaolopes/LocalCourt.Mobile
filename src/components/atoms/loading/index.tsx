import React from 'react';

import { colors } from '@/styles/theme';
import * as Styled from './styles';

function Loading() {
	return <Styled.ActivityIndicator color={colors.acent} />;
}

export default Loading;
