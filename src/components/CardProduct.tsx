import { FC } from 'react';
import { SwaggerCartItemType } from './CardSlider';

interface CardProductType {
	card: SwaggerCartItemType;
}

const CardProduct: FC<CardProductType> = ({ card }) => {
	return (
		<div className={`w-[22%] min-w-[165px] max-950px:w-[30%] max-700px:w-[47%] mb-15 max-500px:mb-5`}>
			<div className={` mb-3`}>
                <img src={card.images[0]} alt="image" />
            </div>
			<div className={` flex justify-between items-center`}>
                <div className={`w-[45%]`}>{card.name.split('(')[0]}</div>
                <div>$ {card.subproducts[0].new_price}</div>
            </div>
		</div>
	);
};

export default CardProduct;
