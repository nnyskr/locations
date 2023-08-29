import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const LocationsPage = lazy(() => import('../pages/Locations'));
const Page404 = lazy(() => import('../pages/404'));

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="locations" />} />
      <Route path="locations" element={<LocationsPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
