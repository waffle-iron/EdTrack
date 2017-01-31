import {combineReducers} from 'redux'; 

//import each reducer created so it can be accessed from store
import SampleReducer from '../features/sample/SampleReducer';

const rootReducer = {
	//here goes specific reducers
	samplecall: SampleReducer
};

const reducer = combineReducers(rootReducer);

export default reducer;
