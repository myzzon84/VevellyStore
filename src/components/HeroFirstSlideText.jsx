const HeroFirstSlideText = () => {
	return (
		<div>
			<h2 className={` font-shippori-mincho-B1 text-[123px]/[.79] text-[#27697F] uppercase !mb-6 -tracking-[6%] relative max-1300px:text-[100px] max-1100px:text-[80px] max-850px:text-[70px] max-850px:flex max-850px:flex-col max-850px:w-min max-750px:text-[50px] max-550px:text-[38px]`}>
				Your journey
                <span className={` absolute right-0 top-19 font-vujahday-script text-[40px]/[.89] lowercase font-normal max-1300px:top-14 max-1300px:left-[295px] max-1100px:left-[235px] max-1100px:top-12 max-1100px:text-[30px] max-850px:static max-850px:block max-850px:text-end max-850px:w-min max-850px:self-end max-750px:text-[25px]`}>unique jewelry</span>
			</h2>
            <p className={` font-sarabun max-w-[485px] text-[#27697F] font-extralight text-[18px]/[.99] !mb-4 max-900px:hidden`}>
                Unique keepsales for once-in-a-lifetime moments. Every gift becomes part of the heart. Each Piece is chosen just for you. Let your jewelry tell your story
            </p>
            <a href="#" className={` inline-block p-[10px] font-sarabun font-extralight text-[18px]/[1.3] !text-[#27697F] border border-[#27697F] rounded-[4px] max-900px:hidden`}>Make it yours</a>
		</div>
	);
};

export default HeroFirstSlideText;
