import React, { useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface CollapsibleSectionProps {
	expanded: boolean;
	duration?: number;
	children: React.ReactNode;
}

const CollapsibleSection = ({ expanded, duration = 300, children }: CollapsibleSectionProps) => {
	// State to store the measured height of the content
	const [contentHeight, setContentHeight] = useState(0);
	// Flag to track if we've already measured the content
	const [measured, setMeasured] = useState(false);

	// This callback is attached to an invisible view to capture the height.
	const handleLayout = (event: LayoutChangeEvent) => {
		const { height } = event.nativeEvent.layout;

		if (height > 0 && height !== contentHeight) {
			setContentHeight(height);
			setMeasured(true);
		}
	};

	// Animated style that uses the measured height when expanded
	const animatedStyle = useAnimatedStyle(
		() => ({
			height: withTiming(expanded ? contentHeight : 0, { duration }),
			opacity: withTiming(expanded ? 1 : 0, { duration }),
			transform: [{ translateY: withTiming(expanded ? 0 : -10, { duration }) }]
		}),
		[contentHeight, expanded]
	);

	return (
		<View style={{ position: 'relative' }}>
			{/* Hidden view used only for measuring the content */}
			{!measured && (
				<View style={styles.hiddenContainer} onLayout={handleLayout}>
					{children}
				</View>
			)}
			<Animated.View style={[{ overflow: 'hidden' }, animatedStyle]}>
				<View>{children}</View>
			</Animated.View>
		</View>
	);
};

const styles = StyleSheet.create({
	hiddenContainer: {
		position: 'absolute',
		opacity: 0,
		zIndex: -1,
		left: 0,
		right: 0
	}
});

export default CollapsibleSection;
