import styles from './LoadMoreButton.module.css'
export const LoadMoreButton = ({ onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			Load more
		</button>
	)
}
