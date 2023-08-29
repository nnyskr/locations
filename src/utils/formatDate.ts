import moment from 'moment-timezone';

function formatDate(dateString: string): string {
  const localTimezone = moment.tz.guess();

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  const formattedTime = moment(date)
    .tz(localTimezone)
    .format('h:mma [(GMT]Z[)]'); // "2:23pm (GMT+01:00)"

  return formattedTime;
}

export default formatDate;
