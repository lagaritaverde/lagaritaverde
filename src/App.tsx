import blackLogo from './assets/lgv-logo-horizontal-trans.svg'
import styles from './app.module.css'

function App() {
	return (
		<div className={styles.container}>
			<img
				className={styles.landingLogo}
				src={blackLogo}
				alt='logo'
			/>

			<small className={styles.register}>A software development company</small>
		</div>
	)
}

export default App
