import styles from './appLayout.module.css';
import { Field } from './field';
import { Information } from './information';
import PropTypes from 'prop-types';

export const AppLayout = ({
	isGameEnded,
	isDraw,
	handleStartGame,
	...stateApp
}) => {
	return (
		<div className={styles.app}>
			<h1 className={styles.title}>
				Игра <br /> «Крестики-Нолики»
			</h1>
			<Information {...stateApp} />
			<Field {...stateApp} />
			<div
				className={
					isGameEnded === true || isDraw === true ? styles.containerButton : styles.none
				}
			>
				<button
					className={styles.button}
					onClick={handleStartGame}
				>
					начать заново
				</button>
			</div>
		</div>
	);
};

AppLayout.propTypes = {
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	handleStartGame: PropTypes.func,
};
