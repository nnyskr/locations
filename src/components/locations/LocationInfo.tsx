import UsersSvg from '../../icons/Users.svg';
import TimezoneSvg from '../../icons/Timezone.svg';
import ViewsSvg from '../../icons/Views.svg';
import InfoRow from '../InfoRow';
import formatDate from '../../utils/formatDate';
import { LocationSchema } from './store/types';

export default function LocationInfo({
  userCount,
  createdAt,
  locationOpenCount,
}: Pick<LocationSchema, 'userCount' | 'createdAt'> & {
  locationOpenCount: number;
}) {
  return (
    <>
      <InfoRow
        data-testid="location-users"
        icon={UsersSvg}
        infoNode={`${userCount} Users`}
      />
      <InfoRow
        data-testid="location-createdAt"
        icon={TimezoneSvg}
        infoNode={formatDate(createdAt)}
      />
      <InfoRow
        data-testid="location-views"
        icon={ViewsSvg}
        infoNode={`${locationOpenCount} views`}
      />
    </>
  );
}
