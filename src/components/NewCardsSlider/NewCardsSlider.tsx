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
					<div key={index} className={` !flex items-center h-[300px]`}>
						<img src={item.images[0]} alt="img" className={''} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default NewCardsSlider;
