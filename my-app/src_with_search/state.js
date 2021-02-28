let rerenderEntireTree = () => {
	console.log('State changed');
}

let state = {
  period:'2019/2020'
}

window.state = state;

export let setPeriod = (period) => {
  state.period=period;

  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
}

export default state;
