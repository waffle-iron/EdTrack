export default function SampleReducer(state= {}, action){
	switch(action.type){
		case "SOMETHING":
			return Object.assign({},state, action.payload);
		default:
			return state;
	}
}
