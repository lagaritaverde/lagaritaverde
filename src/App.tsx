import blackLogo from './assets/lagaritaverde-logo-sintypo-trans.png'
import styles from './app.module.css'

function App() {
	return (
		<div className={styles.container}>
			<img
				className={styles.landingLogo}
				src={blackLogo}
				alt='logo'
			/>
			<p className={styles.headline}>
				<strong className={styles.highlight}>La Garita Verde</strong>
			</p>
			<small className={styles.register}>coming soon..</small>
		</div>
	)
}

export default App
