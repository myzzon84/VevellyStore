import clsx from 'clsx';
import React from 'react';
import { useSearchStore } from '../../redux/search/useSearchStore';
import { headerStore } from '../../store/HeaderStore';

interface Props {
	className?: string;
}

export const Search: React.FC<Props> = ({ className }) => {
	const { query, updateQuery } = useSearchStore();
	const setSearchVisible = headerStore(state => state.setSearchVisible)
	return (
		<input
			type="search"
			name="search"
			value={query}
			className={clsx(className, ' absolute right-8.5 w-[246px] h-5 border border-r-0 border-[#D6E8EE] rounded-l-md p-3')}
			onChange={e => updateQuery(e.target.value)}
			onBlur={() => setSearchVisible(false)}
			autoFocus

		/>
	);
};
