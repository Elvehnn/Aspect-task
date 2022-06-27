import { INITIAL_STATE } from './constants';
import { deepClone } from '../utils/deepClone';
import { getObjectFromString } from '../utils/getObjectFromString';

export default function contentReducer(state = INITIAL_STATE, action) {
  const { payload } = action;
  const newState = deepClone(state);

  switch (action.type) {
    case 'content/change': {
      const destination = payload.path.slice(1).reduce((acc, item) => acc[item], newState);
      let object = payload.path.slice(1, -1).reduce((acc, item) => acc[item], newState);
      const index = payload.path.slice(-1).toString();

      if (
        destination &&
        typeof destination === 'boolean' &&
        payload.newValue === ('false' || 'true')
      ) {
        object[index] = payload.newValue === 'true' ? true : false;

        return newState;
      }

      if (destination && typeof destination === 'string') {
        object[index] = payload.newValue;

        return newState;
      }

      if (destination && typeof destination === 'object' && /^\{.*\}$/.test(payload.newValue)) {
        object[index] = getObjectFromString(payload.newValue);

        return newState;
      }

      if (!destination && /^\{.*\}$/.test(payload.newValue)) {
        object.push(getObjectFromString(payload.newValue));

        return newState;
      }

      return newState;
    }

    default:
      return state;
  }
}
