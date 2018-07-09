const getItems = (state) => state.items;

const getItemsSubset = createSelector(
    [getItems],
    (items) => items.filter((item) => item.startsWith("I"))
);
