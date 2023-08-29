import { all } from 'redux-saga/effects';
import authSagas from '../components/locations/store/sagas';

const rootSaga = function* () {
  yield all([authSagas()]);
};

export default rootSaga;
