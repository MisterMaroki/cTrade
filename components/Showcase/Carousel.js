import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper';
import Image from 'next/image';

export default function Carousel() {
	return (
		<Swiper
			effect={'cards'}
			grabCursor={true}
			modules={[EffectCards]}
			className="mySwiper"
		>
			<SwiperSlide>
				<Image
					src={'/9.svg'}
					alt="product-slide-1"
					layout="fill"
					objectFit="cover"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={'/10.svg'}
					alt="product-slide-2"
					layout="fill"
					objectFit="cover"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={'/11.svg'}
					alt="product-slide-3"
					layout="fill"
					objectFit="cover"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={'/12.svg'}
					alt="product-slide-4"
					layout="fill"
					objectFit="cover"
				/>
			</SwiperSlide>
		</Swiper>
	);
}
