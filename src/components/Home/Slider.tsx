import clsx from 'clsx';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Container } from '../Container/Container';

export type IBanner = {
	title: string;
	color?: string;
	text_color?: string;
	img: string;
};
interface Props {
	banner: IBanner[];
}

export const MySlider: React.FC<Props> = ({ banner }) => {
	const AnySlider = Slider as unknown as React.ComponentType<any>;
	const settings = {
		dots: false,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className="slider mb-30 max-1000px:mb-20 max-600px:mb-[50px] ">
			<div className="relative w-screen">
				<AnySlider {...settings}>
					{banner.map((item, index) => (
						<div key={index} className={`relative max-1300px:px-8`}>
							<div className=" mx-auto flex items-center justify-center max-w-[1200px] w-full">
								<div
									className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full flex h-3/5 z-10 items-center justify-between"
									style={{ backgroundColor: item.color || 'transparent' }}
								></div>

								<div className="relative w-full flex h-full items-center justify-between max-w-[1200px]">
									<div className="relative z-10 w-1/2 flex items-center justify-center p-10 -left-[50px] max-700px:-left-[20px] max-700px:pr-0 max-600px:pl-0 max-600px:-left-[10px]">
										<h2
											className={clsx(
												'text-[46px]/[1.3] font-normal max-w-[500px] uppercase max-1200px:text-[40px] max-1050px:text-[30px] max-850px:text-[22px] max-700px:text-[16px]',
												item.text_color ? `text-[${item.text_color}]` : 'text-white'
											)}
											style={{ fontFamily: 'Libre Caslon Display' }}
										>
											{item.title}
										</h2>
									</div>

									<div className="w-1/2 z-10">
										<img className="w-full h-full object-cover min-h-[300px]" src={item.img} alt="slider"/>
									</div>
								</div>
							</div>
						</div>
					))}
				</AnySlider>
			</div>
		</div>
	);
};
