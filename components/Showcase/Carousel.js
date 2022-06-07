import React, { useRef, useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
const style = {
	width: '70vw',
	height: '50vh',
	position: 'relative',
	margin: '0 auto',
};
const responsive = {
	0: { items: 1 },
	768: { items: 1.2 },
};
export default function Carousel() {
	const handleDragStart = (e) => e.preventDefault();

	const items = [
		<div key="vdces" style={style}>
			<Image
				src={'/9.svg'}
				alt="product-slide-1"
				layout="fill"
				objectFit="cover"
				onDragStart={handleDragStart}
				role="presentation"
			/>
		</div>,
		<div key="rfdrf" style={style}>
			<Image
				src={'/10.svg'}
				alt="product-slide-1"
				layout="fill"
				objectFit="cover"
				onDragStart={handleDragStart}
				role="presentation"
			/>
		</div>,
		<div key="bgyh" style={style}>
			<Image
				src={'/11.svg'}
				alt="product-slide-1"
				layout="fill"
				objectFit="cover"
				onDragStart={handleDragStart}
				role="presentation"
			/>
		</div>,
		<div key="refew" style={style}>
			<Image
				src={'/12.svg'}
				alt="product-slide-1"
				layout="fill"
				objectFit="cover"
				onDragStart={handleDragStart}
				role="presentation"
			/>
		</div>,
	];

	return <AliceCarousel mouseTracking items={items} responsive={responsive} />;
}

// <Swiper
// 	effect={'cards'}
// 	grabCursor={true}
// 	modules={[EffectCards]}
// 	className="mySwiper"
// >
// 	<SwiperSlide>
// 		<Image
// 			src={'/9.svg'}
// 			alt="product-slide-1"
// 			layout="fill"
// 			objectFit="cover"
// 		/>
// 	</SwiperSlide>
// 	<SwiperSlide>
// 		<Image
// 			src={'/10.svg'}
// 			alt="product-slide-2"
// 			layout="fill"
// 			objectFit="cover"
// 		/>
// 	</SwiperSlide>
// 	<SwiperSlide>
// 		<Image
// 			src={'/11.svg'}
// 			alt="product-slide-3"
// 			layout="fill"
// 			objectFit="cover"
// 		/>
// 	</SwiperSlide>
// 	<SwiperSlide>
// 		<Image
// 			src={'/12.svg'}
// 			alt="product-slide-4"
// 			layout="fill"
// 			objectFit="cover"
// 		/>
// 	</SwiperSlide>
// </Swiper>
