import { memo } from 'react'
import { DisplayOutput } from './DisplayOutput'
import { DisplayPages } from './DisplayPages'
import { ItemsSearch } from './ItemsSearch'
import { ItemsSortBy } from './ItemsSortBy'
import style from './display.module.scss'
import { useDisplay } from './useDisplay'

const Display = memo(() => {
	const {
		data,
		handleInteraction,
		isError,
		isLoading,
		onBlurInput,
		onChangeInput,
		onFocusInput,
		page,
		value,
	} = useDisplay()

	return (
		<div className={style.items}>
			<div className={style.items__filters}>
				<ItemsSearch
					value={value}
					onChange={onChangeInput}
					onFocus={onFocusInput}
					onBlur={onBlurInput}
					onKeyDown={handleInteraction}
				/>
				<ItemsSortBy />
			</div>
			<div className={style.items__items}>
				<DisplayOutput isLoading={isLoading} data={data} isError={isError} />
				<DisplayPages
					data={data}
					handleInteraction={handleInteraction}
					page={page}
				/>
			</div>
		</div>
	)
})

export { Display }
