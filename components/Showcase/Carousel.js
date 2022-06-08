import React, { useEffect, useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
const style = {
	width: '60vw',
	height: '40vh',
	position: 'relative',
	margin: '0 auto',
};
const responsive = {
	0: { items: 1.2 },
	768: { items: 1.2 },
};
export default function Carousel() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// here `window` is available
			window.innerWidth < 768 && setIsMobile(true);
			// setIsMobile(() => window.innerWidth < 768);
		}
	}, []);
	const handleDragStart = (e) => e.preventDefault();

	const items = [
		<div key="vdces" style={style} data-value="1">
			<Image
				src={'/9.svg'}
				alt="product-slide-1"
				layout="fill"
				objectFit={isMobile ? 'contain' : 'cover'}
				onDragStart={handleDragStart}
				style={{ borderRadius: '10px' }}
			/>
		</div>,
		<div key="rfdrf" style={style} data-value="2">
			<Image
				src={'/10.svg'}
				alt="product-slide-1"
				layout="fill"
				objectFit={isMobile ? 'contain' : 'cover'}
				onDragStart={handleDragStart}
				style={{ borderRadius: '10px' }}
			/>
		</div>,
		<div key="bgyh" style={style} data-value="3">
			<Image
				src={'/11.svg'}
				alt="product-slide-1"
				layout="fill"
				objectFit={isMobile ? 'contain' : 'cover'}
				onDragStart={handleDragStart}
				style={{ borderRadius: '10px' }}
			/>
		</div>,
		<div key="refew" style={style} data-value="4">
			<Image
				src={'/12.svg'}
				alt="product-slide-1"
				layout="fill"
				objectFit={isMobile ? 'contain' : 'cover'}
				onDragStart={handleDragStart}
				style={{ borderRadius: '10px' }}
			/>
		</div>,
	];

	return (
		<AliceCarousel
			mouseTracking
			items={items}
			responsive={responsive}
			disableButtonsControls
			disableDotsControls
		/>
	);
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
