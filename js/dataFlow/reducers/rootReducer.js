import appReducer from './appReducer';
import {CLEAR_STATE} from '@dataFlow/actions/stateClearActions';

const rootReducer = (state, action) => {
    if (action.type === CLEAR_STATE) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;