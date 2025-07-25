import clsx from 'clsx';
import React from 'react';
import { useSearchStore } from '../../redux/search/useSearchStore';
import { headerStore } from '../../store/HeaderStore';

interface Props {
	className?: string;
}

export const Search: React.FC<Props> = ({ className }) => {
	const { query, updateQuery } = useSearchStore();
	const searchVisible = headerStore(state => state.searchVisible);
	return (
		<input
			type="search"
			name="search"
			value={query}
			className={clsx(className, ' absolute -right-19 top-10 w-[246px] h-5 border border-[#D6E8EE] rounded-md p-3 bg-white focus:outline-none max-1000px:top-7 max-1000px:right-0 max-1000px:z-10 max-1000px:border-r max-1000px:rounded-r-md')}
			onChange={e => updateQuery(e.target.value)}
			autoFocus={searchVisible}

		/>
	);
};
