import { FC, useRef } from 'react';
import { useOnClickOutside } from '../../helpers/clickOutside';

interface MobileBurgerMenuProps {
	setIsShowBurgerMenu: (bool: boolean) => void;
	isShowBurgerMenu: boolean;
}

const MobileBurgerMenu: FC<MobileBurgerMenuProps> = ({ setIsShowBurgerMenu, isShowBurgerMenu }) => {

    const mobileBurgerRef = useRef(null);

    useOnClickOutside(mobileBurgerRef, () => setIsShowBurgerMenu(false));

	return (
		<div className={` absolute left-0 top-5 w-[390px] bg-[#EFEFEF] z-50`} ref={mobileBurgerRef}>
			<div className={` h-[46px] px-5 flex justify-between bg-[#D6E8EE]`}>
				<img src="/Main_logo.png" alt="main logo" />
				<img
					src="/closeIcon.svg"
					alt="close"
					width={24}
					onClick={() => setIsShowBurgerMenu(!isShowBurgerMenu)}
                    className={` cursor-pointer`}
				/>
			</div>
			<div className={`  px-5 pt-[10px]`}>
				<div
					className={` flex flex-col items-start py-[10px] gap-[6px] font-sarabun font-extralight border border-[#D6E8EE] pl-[10px] mb-[10px]`}
				>
					<button>Jewelry</button>
					<button>Collections</button>
				</div>
			</div>
		</div>
	);
};

export default MobileBurgerMenu;
