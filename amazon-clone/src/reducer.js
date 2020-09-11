// implement an empty arr as our [default] initial cart state 
export const initialState = {
	basket: [],
}

// context api & redux aren't the same but use the same patter: A global store for your app with patterns that dispatch actions into the store 
// use reducer to listen for events & dispatch actions and compile them accodingly (ex. add/remove an item from cart)
const reducer = (state, action) => {
	// console.log(action)

	switch(action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		
		default:
			return state;	
	}
};

export default reducer;