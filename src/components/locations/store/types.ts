export interface LocationSchema {
  id: string;
  createdAt: string;
  name: string;
  description: string;
  userCount: number;
}

export interface LocationsLoadingError {
  key: string;
  meta?: Object;
}

export interface LocationsState {
  locations: undefined | null | LocationSchema[];
  isLoadingLocations: boolean;
  loadingLocationsError: null | LocationsLoadingError;
  locationOpenCounts: Record<string, number>;
  openLocationId: null | string;
}
