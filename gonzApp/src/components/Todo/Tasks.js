import React from 'react';

const Tasks = (props) => {
	const { data } = props;
	const itemList = data.map( (item,key) => {
		return (
		<li key={key}>
			<b>{`${item.text}  `}</b>
			{item.complete ? 'COMPLETED' : 'PENDING'}
		</li>);
	})
	return (
		<ul>{ itemList }</ul>
	);
};

export default Tasks;
