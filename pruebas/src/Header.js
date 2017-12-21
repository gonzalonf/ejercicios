import React from 'react';

const Header = ({ name, onClick, onChange }) => (
	<header>
		<h1>{name}</h1>
		{(onClick &&
			<button onClick={onClick}>ClickMe!</button>
		)}
		{(onChange &&
			<input type="text" value={name} onChange={onChange} />
		)}
	</header>
);

export default Header;
