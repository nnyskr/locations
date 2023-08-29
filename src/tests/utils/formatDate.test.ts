import formatDate from '../../utils/formatDate';
import moment from 'moment-timezone';

describe('formatDate', () => {
  test('formats date correctly in a specific timezone [DST off]', () => {
    const mockTimezone = 'Europe/London';
    const mockDate = '2021-03-05T02:11:23.683Z';

    moment.tz.setDefault(mockTimezone);
    const formattedDate = formatDate(mockDate);

    const expectedTime = '3:11am (GMT+01:00)';

    expect(formattedDate).toBe(expectedTime);
  });

  test('formats date correctly in a specific timezone [DST on]', () => {
    const mockTimezone = 'Europe/London';
    const mockDate = '2021-07-07T02:11:23.683Z';

    moment.tz.setDefault(mockTimezone);
    const formattedDate = formatDate(mockDate);

    const expectedTime = '4:11am (GMT+02:00)';

    expect(formattedDate).toBe(expectedTime);
  });
});
