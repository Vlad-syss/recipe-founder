import { memo } from 'react'
import { DisplayOutput } from './DisplayOutput'
import { DisplayPages } from './DisplayPages'
import { ItemsSearch } from './ItemsSearch'
import { ItemsSortBy } from './ItemsSortBy'
import style from './display.module.scss'
import { useDisplay } from './useDisplay'

const Display = memo(() => {
	const {
		sortedData,
		handleInteraction,
		isError,
		isFetching,
		onBlurInput,
		onFocusInput,
		page,
		value,
		handlePopular,
		handleRecent,
		isPopular,
		isRecent,
		setIsPopular,
		setIsRecent,
		setValue,
		handlePages,
		isLoaded,
	} = useDisplay()

	return (
		<div className={style.items}>
			<div className={style.items__filters}>
				<ItemsSearch
					value={value}
					setValue={setValue}
					onFocus={onFocusInput}
					onBlur={onBlurInput}
					onKeyDown={handleInteraction}
					onClick={handleInteraction}
					isLoaded={isLoaded}
				/>
				<ItemsSortBy
					handlePopular={handlePopular}
					isPopular={isPopular}
					setIsPopular={setIsPopular}
					handleRecent={handleRecent}
					isRecent={isRecent}
					setIsRecent={setIsRecent}
				/>
			</div>
			<div className={style.items__items}>
				<DisplayOutput
					isLoading={isFetching}
					data={sortedData}
					isError={isError}
				/>
				<DisplayPages
					isLoading={isFetching}
					data={sortedData}
					handlePages={handlePages}
					page={page}
				/>
			</div>
		</div>
	)
})

export { Display }
