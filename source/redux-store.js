// Play it on JsFiddle: https://jsfiddle.net/9s57z0om/2/
const store = createStore(aggReducer, {});

store.subscribe(() => {
    const currState = store.getState();
    render(containerA, getItems(currState));
    render(containerB, getItemsSubset(currState));
    counter.innerHTML = currState.counter;
});

store.dispatch(appendItem("Item 1"));
store.dispatch(appendItem("Item 2"));
store.dispatch(appendItem("AnotherItem 1"));

button.addEventListener("click", () => {
	store.dispatch(increaseCounter());
});