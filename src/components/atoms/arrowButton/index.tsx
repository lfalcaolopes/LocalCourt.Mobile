import React from 'react';
import { TouchableOpacity } from 'react-native';

import { colors } from '@/styles/theme';
import Feather from '@expo/vector-icons/Feather';

interface ArrowButtonProps {
	onPress: () => void;
	direction: 'up' | 'right' | 'down' | 'left';
	size?: number;
	color?: string;
}

function ArrowButton({
	onPress,
	direction,
	size = 24,
	color = colors.gray[800]
}: ArrowButtonProps) {
	return (
		<TouchableOpacity onPress={onPress}>
			<Feather name={`chevron-${direction}`} size={size} color={color} />
		</TouchableOpacity>
	);
}

export default ArrowButton;
