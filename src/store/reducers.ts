import {
  reducer as locationsReducer,
  name as locationsReducerName,
  LocationsState,
} from '../components/locations/store/reducers';

export type State = {
  [reducerKey: string]: LocationsState;
};

const rootReducers = {
  [locationsReducerName]: locationsReducer,
};

export default rootReducers;
