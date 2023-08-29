import {
  render,
  screen,
  waitFor,
  fireEvent,
  within,
} from '@testing-library/react';
import { setupServer } from 'msw/node';
import moment from 'moment-timezone';
import { rest } from 'msw';
import { Provider } from 'react-redux';
import { LocationSchema } from '../../components/locations/store/types';
import LocationsPage from '../../pages/Locations';
import store from '../../store/store';

describe('LocationsPage', () => {
  const handlers = [
    rest.get(
      'https://6033c4d8843b15001793194e.mockapi.io/api/locations',
      (req, res, ctx) => {
        const mockResponse: LocationSchema[] = [
          {
            id: '1',
            createdAt: '2022-03-05T12:00:00.000Z',
            name: 'Location 1',
            description: 'Description of Location 1',
            userCount: 10,
          },
          {
            id: '2',
            createdAt: '2022-03-05T14:30:00.000Z',
            name: 'Location 2',
            description: 'Description of Location 2',
            userCount: 20,
          },
        ];
        return res(ctx.status(200), ctx.json(mockResponse));
      }
    ),
  ];

  const server = setupServer(...handlers);
  const mockTimezone = 'Europe/London';
  moment.tz.setDefault(mockTimezone);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it.only('renders loading message initially, then renders items', async () => {
    render(
      <Provider store={store}>
        <LocationsPage />
      </Provider>
    );

    const loadingMessage = screen.getByText('Loading locations...');
    expect(loadingMessage).toBeInTheDocument();

    await waitFor(() => {
      const loader = screen.queryByText('Loading locations...');
      expect(loader).not.toBeInTheDocument();
    });

    const locations = store.getState().locations.locations;
    expect(locations).toBeDefined();

    const getViewCountElementWithin = (withinElement: HTMLElement) => {
      const itemInfoRowViewCountElement =
        within(withinElement).getByTestId('location-views');

      const itemInfoRowViewCountDataElement = within(
        itemInfoRowViewCountElement
      ).getByTestId('info-row-data');

      return itemInfoRowViewCountDataElement;
    };

    const firstLocationItem = screen.getByTestId('location-item-1');
    expect(getViewCountElementWithin(firstLocationItem).textContent).toEqual(
      '0 views'
    );

    fireEvent.click(firstLocationItem);

    expect(getViewCountElementWithin(firstLocationItem).textContent).toEqual(
      '1 views'
    );
    const dialog = await screen.findByTestId('location-dialog-1');
    expect(getViewCountElementWithin(dialog).textContent).toEqual('1 views');

    expect(dialog).toBeInTheDocument();

    const dialogLocationName = within(dialog).getByText('Location 1');
    expect(dialogLocationName).toBeInTheDocument();

    const dialogFormattedCreatedAt =
      within(dialog).getByText('1:00pm (GMT+01:00)');
    expect(dialogFormattedCreatedAt).toBeInTheDocument();

    const doneButton = within(dialog).getByTestId('location-dialog-close');
    fireEvent.click(doneButton);

    const dialogAfterClose = screen.queryByTestId('location-dialog-1');
    expect(dialogAfterClose).not.toBeInTheDocument();
  });
});
