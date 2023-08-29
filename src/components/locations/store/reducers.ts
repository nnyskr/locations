import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LocationSchema, LocationsState, LocationsLoadingError } from './types';

const initialState = {
  locations: undefined,
  isLoadingLocations: false,
  loadingLocationsError: null,

  locationOpenCounts: {},
  openLocationId: null,
} as LocationsState;

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    getLocations(state) {
      return {
        ...state,
        isLoadingLocations: true,
        loadingLocationsError: null,
      };
    },
    getLocationsSuccess(
      state,
      { payload }: PayloadAction<{ locations: LocationSchema[] }>
    ) {
      return {
        ...state,
        locations: payload.locations,
        isLoadingLocations: false,
      };
    },
    getLocationsFailure(
      state,
      {
        payload,
      }: PayloadAction<{ loadingLocationsError: LocationsLoadingError }>
    ) {
      return {
        ...state,
        locations: null,
        isLoadingLocations: false,
        loadingLocationsError: payload.loadingLocationsError,
      };
    },
    openLocation(state, { payload }: PayloadAction<{ id: string }>) {
      const locationOpenCounts = { ...state.locationOpenCounts };

      if (locationOpenCounts[payload.id]) {
        locationOpenCounts[payload.id] += 1;
      } else {
        locationOpenCounts[payload.id] = 1;
      }

      return {
        ...state,
        openLocationId: payload.id,
        locationOpenCounts,
      };
    },
    closeLocation(state) {
      return {
        ...state,
        openLocationId: null,
      };
    },
  },
});

export const { reducer, actions, name } = locationsSlice;
export type { LocationsState };
