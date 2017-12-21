import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
	const { title } = props;
	return (
		<header className="contents-header">
			<h1>{ title }</h1>
			<nav >
				<Link to="/"> HOME </Link>
				<Link to="/todo"> Todo App </Link>
				<Link to="/other-content"> Other </Link>
				<Link to="/another"> Another </Link>
				<Link to="/tic"> TicTacToe! </Link>

			</nav>
		</header>
	);
};

export default Header;
