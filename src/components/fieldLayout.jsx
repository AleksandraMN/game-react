import styles from './fieldLayout.module.css';
import PropTypes from 'prop-types';
import { WIN_PATTERNS } from '../utils';

export const FieldLayout = ({
	data,
	handleButton,
}) => {
	return (
		<div className={styles.container}>
			{Array.isArray(data) &&
				data.map((item, index) => (
					<button
						className={styles.button}
						key={index}
						onClick={() => handleButton(index, WIN_PATTERNS)}
						disabled={item === '' ? false : true}
					>
						{item}
					</button>
				))}
		</div>
	);
};

FieldLayout.propTypes = {
	data: PropTypes.array,
	handleButton: PropTypes.func,
};
