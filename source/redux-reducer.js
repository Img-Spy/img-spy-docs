function appendItemReducer(state, action) {
    if (!state) state = []; // Default state

    switch (action.type) {
        case "APPEND_ITEM":
            return  [ ...state, action.payload ];

        default: // Return always the state!
            return state;
    }
}
