import Slider from 'react-slick';
import { SwaggerCartItemType } from '../CardSlider';
import { FC, useState } from 'react';
import './NewCardsSlider.scss';

interface Props {
	cards: SwaggerCartItemType[];
}

const NewCardsSlider: FC<Props> = ({ cards }) => {
	const [isSwiping, setIsSwiping] = useState(false);
	const settings = {
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		className: 'myNewSlick',
		beforeChange: () => setIsSwiping(true),
		afterChange: () => setIsSwiping(false),
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};
	return (
		<div className={` w-full h-full`}>
			<Slider {...settings}>
				{cards.map((item, index) => (
					<div key={index} className={` h-full flex flex-col`}>
						<div
							className={` !flex items-center h-[300px] max-1241px:h-[230px] max-1000px:h-[280px] max-800px:h-[210px] max-700px:h-[280px] max-500px:h-[200px]`}
						>
							<img src={item.images[0]} alt="img" className={''} />
						</div>
						<div className={`flex justify-between items-center mt-auto`}>
							<div className={` w-[50%] text-center`}>{item.name.split('(')[0]}</div>
							<div className={` w-[40%] text-end`}>{item.subproducts?.[0]?.price}</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default NewCardsSlider;
