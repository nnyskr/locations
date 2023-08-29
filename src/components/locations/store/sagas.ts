import { put, all, fork, takeLatest, cancel, call } from 'redux-saga/effects';
import { SagaIterator, Task } from 'redux-saga';
import * as locationApi from '../../../api/location';
import { LocationSchema } from './types';
import { actions } from './reducers';

function* getLocationsWatch(): SagaIterator {
  yield takeLatest(
    actions.getLocations.toString(),
    function* (action: ReturnType<typeof actions.getLocations>) {
      const task: Task = yield fork(getLocations, action);

      yield takeLatest(
        actions.getLocations.toString(),
        function* (action: ReturnType<typeof actions.getLocations>) {
          yield cancel(task);
        }
      );
    }
  );

  function* getLocations(
    action: ReturnType<typeof actions.getLocations>
  ): SagaIterator {
    try {
      const response: Response = yield call(locationApi.getLocations);
      if (response.status !== 200) {
        throw new Error('ERROR');
      }
      const locations: LocationSchema[] = yield call([response, 'json']);
      yield put(actions.getLocationsSuccess({ locations }));
    } catch (error) {
      yield put(
        actions.getLocationsFailure({
          loadingLocationsError: { key: 'COULD NOT LOAD' },
        })
      );
    }
  }
}

export default function* () {
  yield all([getLocationsWatch()]);
}
