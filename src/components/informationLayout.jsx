import styles from './informationLayout.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ status }) => {
	return (
		<div className={styles.container}>
			<output className={styles.output}>{status}</output>
		</div>
	);
};

InformationLayout.propTypes = {
	status: PropTypes.string,
};
