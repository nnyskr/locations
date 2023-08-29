import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../../store/reducers';
import { LocationSchema } from './types';
import { name } from './reducers';

export const locations = (state: State) => state[name].locations;

export const isLoadingLocations = (state: State) =>
  state[name].isLoadingLocations;

export const loadingLocationsError = (state: State) =>
  state[name].loadingLocationsError;

export const locationOpenCounts = (state: State) =>
  state[name].locationOpenCounts;

export const openLocationId = (state: State) => state[name].openLocationId;

export const openLocation = createSelector(
  locations,
  openLocationId,
  (locations, openLocationId) => {
    return locations?.find((location) => location.id === openLocationId);
  }
);

export const getLocationOpenCount = (id: LocationSchema['id'] | undefined) =>
  createSelector(locationOpenCounts, (locationOpenCounts) => {
    if (!id) {
      return null;
    }
    return locationOpenCounts[id] || 0;
  });

export const shouldDisplayLoader = createSelector(
  locations,
  isLoadingLocations,
  (locations, isLoadingLocations) =>
    isLoadingLocations || locations === undefined
);
