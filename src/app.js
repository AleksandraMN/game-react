import { useState } from 'react';
import { AppLayout } from './components/appLayout';

export const App = () => {
	const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const status =
		isDraw === true
			? 'Ничья'
			: isDraw === false && isGameEnded === true
				? `Победа: ${currentPlayer}`
				: `Ходит: ${currentPlayer}`;


	const handleButton = (index, WIN_PATTERNS) => {
		const dataCopy = data.slice();
		if (dataCopy[index] !== '' || isGameEnded || isDraw) {
			return;
		}
		dataCopy[index] = currentPlayer;
		setData(dataCopy);
		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (dataCopy[a] && dataCopy[a] === dataCopy[b] && dataCopy[a] === dataCopy[c]) {
				setIsGameEnded(true);
				return;
			}
		}
		const isFull = dataCopy.every((item) => item !== '');
		if (isFull && !isGameEnded) {
			setIsDraw(true);
		}
		if (!isGameEnded) {
			setCurrentPlayer((prev) => (prev === 'X' ? '0' : 'X'));
		}
	};


	const handleStartGame = () => {
		setData(Array(9).fill(''));
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	};

	const stateApp = {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		data,
		setData,
		status,
		handleButton,
		handleStartGame,
	};

	return <AppLayout {...stateApp} />;
};
