import { FC, MutableRefObject, useRef } from "react";
import { useOnClickOutside } from "../helpers/clickOutside";

interface SortByProps {
    setShowSort: (bool: boolean) => void;
    sortButtonRef: MutableRefObject<HTMLElement | null>;
}

const SortBy: FC<SortByProps> = ({setShowSort, sortButtonRef}) => {

    const sortingOptions = [
        'The lowest price',
        'The highest price',
        'Bestsellers',
        'Popularity',
        'Novelty',
        'Rating',
    ];

    const sortByRef = useRef(null)

    useOnClickOutside(sortByRef, (e) => {
        if (sortButtonRef.current && sortButtonRef.current.contains(e.target as Node)) {
			return;
		}
        setShowSort(false);
    })

	return <div className={` absolute top-10 py-6 pl-5 bg-white w-[200px] font-sarabun font-extralight shadow-lg`} ref={sortByRef}>
        <ul className={`flex flex-col gap-[14px]`}>
            {sortingOptions.map((item, index) => (
                <li key={item} className={` min-w-max`}>
                    <span className={` cursor-pointer`}>
                        {item}
                    </span>
                </li>
            ))}
        </ul>
    </div>;
};

export default SortBy;
