import React from 'react';
import { Dimensions, ImageSourcePropType } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import * as Styled from './styles';

interface ImageCarouselProps {
	images: ImageSourcePropType[];
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = Math.round(Dimensions.get('window').width * 0.6);

function ImageCarousel({ images }: ImageCarouselProps) {
	const carouselCardItem = ({ item, index }: { item: ImageSourcePropType; index: number }) => {
		return <Styled.Image key={index} source={item} itemHeight={ITEM_HEIGHT} />;
	};

	return (
		<Carousel
			data={images}
			renderItem={carouselCardItem}
			width={SCREEN_WIDTH}
			height={ITEM_HEIGHT}
			snapEnabled
			mode="parallax"
			loop={false}
			modeConfig={{
				parallaxScrollingScale: 0.9,
				parallaxScrollingOffset: 50
			}}
		/>
	);
}

export default ImageCarousel;
