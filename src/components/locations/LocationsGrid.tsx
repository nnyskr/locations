import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/locations-grid.css';
import LocationsItem from './LocationsItem';
import { actions } from './store/reducers';
import * as selectors from './store/selectors';

export default function LocationsGrid() {
  const dispatch = useDispatch();

  const locations = useSelector(selectors.locations);
  const shouldDisplayLoader = useSelector(selectors.shouldDisplayLoader);
  const loadingLocationsError = useSelector(selectors.loadingLocationsError);

  const getLocations = useCallback(
    () => dispatch(actions.getLocations()),
    [dispatch]
  );

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  if (shouldDisplayLoader) {
    return (
      <div className="typography-l locations-loading-message">
        Loading locations...
      </div>
    );
  }

  if (loadingLocationsError) {
    return (
      <div className="typography-l locations-loading-message">
        Loading locations error...
      </div>
    );
  }

  return (
    <div className="locations-container">
      {locations?.map((location) => {
        return <LocationsItem key={location.id} {...location} />;
      })}
    </div>
  );
}
