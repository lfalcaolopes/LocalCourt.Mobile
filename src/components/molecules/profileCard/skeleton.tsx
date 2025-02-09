import { colors } from '@/styles/theme';
import React from 'react';
import ContentLoader, { Circle, Rect } from 'react-content-loader/native';
import { useWindowDimensions } from 'react-native';

const Skeleton = () => {
	const { width } = useWindowDimensions();
	return (
		<ContentLoader
			viewBox={`0 0 ${width} 57`}
			backgroundColor={colors.gray[200]}
			foregroundColor={colors.gray[300]}
			speed={3}
			height={57}
			width={'100%'}
		>
			<Circle cx="27" cy="27" r="27" />
			<Rect x="60" y="10" rx="4" ry="4" width="180" height="16" />
			<Rect x="60" y="35" rx="3" ry="3" width="80" height="10" />
		</ContentLoader>
	);
};

export default Skeleton;
