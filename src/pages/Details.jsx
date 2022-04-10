import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { getOne } from '../api/details'
import styles from './Details.module.css'
import { BackButton } from '../components/BackButton'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const CopyButton = ({ value }) => {
	const [copied, setCopied] = useState(false)
	return (
		<CopyToClipboard text={value} onCopy={() => setCopied(true)}>
			<button className={styles.copyBtn}>
				{!copied ? 'Copy link' : 'Copied'}
			</button>
		</CopyToClipboard>
	)
}

export const Details = () => {
	const params = useParams()

	const [details, setDetail] = useState(undefined)

	const fetchDetails = async () => {
		const { data } = await getOne(params.id)
		console.log(data)
		setDetail(data)
	}
	useEffect(() => {
		fetchDetails()
	}, [params.id])

	return (
		<>
			<Helmet>
				<title>Giphy | Details</title>
			</Helmet>
			<div className={styles.root}>
				<BackButton />
				{details ? (
					<>
						<div className={styles.imageContainer}>
							<img src={details.images.original.url} alt='' />
						</div>
						<div className={styles.descriptionContainer}>
							<ul className={styles.detailsList}>
								<li className={styles.listItem}>{details.title}</li>
								<li className={styles.listItem}>
									<a href={details.url} target='blank' rel='noopener'>
										Open on GIPHY.COM
									</a>
								</li>
								<li className={styles.listItem}>
									<CopyButton value={details.url} />
								</li>
							</ul>
						</div>
					</>
				) : (
					'Loading'
				)}
			</div>
		</>
	)
}
