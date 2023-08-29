import '../styles/locations.css';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/locations/LocationsHeader';
import LocationDialog from '../components/locations/LocationDialog';
import Grid from '../components/locations/LocationsGrid';

export default function LocationsPage() {
  return (
    <div className="locations-page">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Grid />
      </ErrorBoundary>
      <LocationDialog />
    </div>
  );
}
