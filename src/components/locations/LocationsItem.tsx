import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isNotNil } from 'ramda';
import { LocationSchema } from './store/types';
import '../../styles/location-item.css';
import EditSvg from '../../icons/Edit.svg';
import RoundButton from '../RoundButton';
import LocationInfo from './LocationInfo';
import { actions } from './store/reducers';
import * as selectors from './store/selectors';

export default memo(function LocationsItem({
  id,
  name,
  userCount,
  createdAt,
}: LocationSchema) {
  const dispatch = useDispatch();

  const locationOpenCount = useSelector(selectors.getLocationOpenCount(id));

  const openLocation = (payload: { id: string }) =>
    dispatch(actions.openLocation(payload));

  function handleLocationTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    openLocation({ id });
  }

  function handleLocationClick(event?: React.MouseEvent<HTMLDivElement>) {
    openLocation({ id });
  }

  function handleLocationKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      event.preventDefault();
      openLocation({ id });
    }
  }

  return (
    <div
      className="location-item"
      data-testid={`location-item-${id}`}
      tabIndex={0}
      role="button"
      aria-label="Open location"
      onClick={handleLocationClick}
      onKeyDown={handleLocationKeyDown}
      onTouchEnd={handleLocationTouchEnd}
    >
      <div className="typography-l ellipsis location-item__name">{name}</div>
      {isNotNil(locationOpenCount) && (
        <LocationInfo
          userCount={userCount}
          createdAt={createdAt}
          locationOpenCount={locationOpenCount}
        />
      )}

      <RoundButton className="location-item__edit-button">
        <img src={EditSvg} />
      </RoundButton>
    </div>
  );
});
