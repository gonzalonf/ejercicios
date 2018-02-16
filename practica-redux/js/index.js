import { createStore } from 'redux';

// DOM cache
const resultEl = document.getElementById('result__number');
const inputEl = document.getElementById('input');
const add = document.getElementById('add');
const substract = document.getElementById('substract');
const reset = document.getElementById('reset');

const initialState = 0;


function counter(state = initialState, action) {
	switch (action.type) {
		case 'ADD':
			if (inputEl.value !== '' && !isNaN(inputEl.value)) {
				console.log('es numero');
				console.log(inputEl.value);
				return state + parseInt(inputEl.value);
			}
		case 'SUBSTRACT':
			if (inputEl.value !== '' && !isNaN(inputEl.value)) {
				return state - parseInt(inputEl.value);
			}
		case 'RESET':
			return 0;
		default:
			return state;
	}
}

const store = createStore(counter);


function render(state) {
	console.log('render');
	console.log(state);
	resultEl.innerHTML = state;
	input.value = '';
}

store.subscribe(() => {
	render(store.getState());
});

add.addEventListener('click', () => {
	store.dispatch({ type: 'ADD' });
});
substract.addEventListener('click', () => {
	store.dispatch({ type: 'SUBSTRACT' });
});
reset.addEventListener('click', () => {
	store.dispatch({ type: 'RESET' });
});
