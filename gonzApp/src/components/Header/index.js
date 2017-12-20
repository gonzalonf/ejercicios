import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
	const { title } = props;
	return (
		<header className="contents-header">
			<h1>{ title }</h1>
			<nav >
				<a href="/">Index</a>
				<a href="content">Content</a>
				<Link to="/other-content"> Other </Link>
				<Link to="/another"> Another </Link>
			</nav>
		</header>
	);
};

export default Header;
