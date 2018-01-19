import React from 'react';

const Tasks = (props) => {
	const { data } = props;
	const { onClick } = props;
	const itemList = data.map((item) => {
		return (
		<li key={item.id}>
			<b>{`${item.text}  `}</b>
			{item.complete ? 'COMPLETED' : 'PENDING'}
			<button className="delete-btn" onClick={onClick} id={item.id}>DELETE</button>
		</li>);
	})
	return (
		<ul>{ itemList }</ul>
	);
};

export default Tasks;
