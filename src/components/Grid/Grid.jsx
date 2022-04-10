import Masonry from 'react-masonry-css'
import { Card } from '../Card'
import styles from './Grid.module.css'
export const Grid = ({ items }) => {
	const breakpointColumnsObj = {
		default: 4,
		1100: 3,
		700: 2,
		500: 1,
	}
	return (
		<Masonry
			breakpointCols={breakpointColumnsObj}
			columnClassName={styles.grid_column}
			className={styles.grid}
		>
			{items.map(({ id, url, images, title }, index) => (
				<div key={index}>
					<Card
						id={id}
						url={url}
						previewUrl={images.preview_gif.url}
						title={title}
					/>
				</div>
			))}
		</Masonry>
	)
}
