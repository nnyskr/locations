import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import LocationsItem from '../../components/locations/LocationsItem';
import { reducer } from '../../components/locations/store/reducers';

describe('LocationsItem', () => {
  it('handles click event correctly', () => {
    const store = configureStore({
      reducer: {
        locations: reducer,
      },
    });

    const location = {
      id: '123',
      name: 'Location Name',
      userCount: 5,
      createdAt: '2023-08-29T00:00:00.000Z',
      description: 'Location Description',
    };

    render(
      <Provider store={store}>
        <LocationsItem {...location} />
      </Provider>
    );

    const locationItem = screen.getByRole('button', { name: 'Open location' });
    fireEvent.click(locationItem);

    expect(store.getState().locations.openLocationId).toEqual('123');
  });

  it('handles Enter key event correctly', () => {
    const store = configureStore({
      reducer: {
        locations: reducer,
      },
    });

    const location = {
      id: '123',
      name: 'Location Name',
      userCount: 5,
      createdAt: '2023-08-29T00:00:00.000Z',
      description: 'Location Description',
    };

    render(
      <Provider store={store}>
        <LocationsItem {...location} />
      </Provider>
    );

    const locationItem = screen.getByRole('button', { name: 'Open location' });
    fireEvent.keyDown(locationItem, { key: 'Enter' });

    expect(store.getState().locations.openLocationId).toEqual('123');
  });
});
