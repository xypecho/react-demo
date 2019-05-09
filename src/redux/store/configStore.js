import { createStore } from 'redux';
import reducer from '../reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// export default () => createStore(reducer, composeWithDevTools());
const initialState = {
    menuName: ''
}
export default () => createStore(reducer, initialState);