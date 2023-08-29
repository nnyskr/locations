import { useSelector, useDispatch } from 'react-redux';
import '../../styles/location-dialog.css';
import { isNotNil } from 'ramda';
import CloseSvg from '../../icons/Close.svg';
import Dialog from '../Dialog';
import RoundButton from '../RoundButton';
import Button from '../Button';
import LocationInfo from './LocationInfo';
import { actions } from './store/reducers';
import * as selectors from './store/selectors';

export default function LocationDialog() {
  const dispatch = useDispatch();

  const openLocation = useSelector(selectors.openLocation);
  const locationOpenCount = useSelector(
    selectors.getLocationOpenCount(openLocation?.id)
  );

  const closeLocation = () => dispatch(actions.closeLocation());

  function handleDoneClick() {
    closeLocation();
  }

  return (
    <>
      <Dialog
        open={!!openLocation}
        data-testid={`location-dialog-${openLocation?.id}`}
        tabIndex={undefined}
        className="location-dialog"
        autoFocus={false}
      >
        <div className="location-dialog__header">
          <p className="typography-m">{openLocation?.name}</p>
          <RoundButton
            className="location-dialog__close-button"
            autoFocus={undefined}
            onClick={handleDoneClick}
          >
            <img src={CloseSvg} />
          </RoundButton>
        </div>
        {!!openLocation && isNotNil(locationOpenCount) && (
          <div className="location-dialog__info">
            <LocationInfo
              userCount={openLocation?.userCount}
              createdAt={openLocation?.createdAt}
              locationOpenCount={locationOpenCount}
            />
          </div>
        )}
        <div className="location-dialog__description">
          <p className="typography-s">Description</p>
          <p className="typography-s">{openLocation?.description}</p>
        </div>
        <div className="location-dialog__footer">
          <Button data-testid="location-dialog-close" onClick={handleDoneClick}>
            Done
          </Button>
        </div>
      </Dialog>
    </>
  );
}
