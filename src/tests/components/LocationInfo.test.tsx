import { render, screen } from '@testing-library/react';
import LocationInfo from '../../components/locations/LocationInfo';

describe('LocationInfo', () => {
  const userCount = 10;
  const createdAt = '2021-03-05T02:11:23.683Z';
  const locationOpenCount = 0;

  it('renders user count information', () => {
    render(
      <LocationInfo
        userCount={userCount}
        createdAt={createdAt}
        locationOpenCount={locationOpenCount}
      />
    );

    const userCountInfo = screen.getByTestId('location-users');
    expect(userCountInfo).toBeInTheDocument();
    expect(userCountInfo).toHaveTextContent(`${userCount} Users`);
  });

  it('renders formatted created at information', () => {
    render(
      <LocationInfo
        userCount={userCount}
        createdAt={createdAt}
        locationOpenCount={locationOpenCount}
      />
    );

    const createdAtInfo = screen.getByTestId('location-createdAt');
    expect(createdAtInfo).toBeInTheDocument();
    expect(createdAtInfo).toHaveTextContent('3:11am (GMT+01:00)');
  });

  it('renders location open count information', () => {
    render(
      <LocationInfo
        userCount={userCount}
        createdAt={createdAt}
        locationOpenCount={locationOpenCount}
      />
    );

    const locationOpenCountInfo = screen.getByTestId('location-views');
    expect(locationOpenCountInfo).toBeInTheDocument();
    expect(locationOpenCountInfo).toHaveTextContent(
      `${locationOpenCount} Views`
    );
  });

  it('renders singular "View" if open count is 1', () => {
    render(
      <LocationInfo
        userCount={userCount}
        createdAt={createdAt}
        locationOpenCount={1}
      />
    );

    const locationOpenCountInfo = screen.getByTestId('location-views');
    expect(locationOpenCountInfo).toHaveTextContent('1 View');
  });

  it('renders plural "Views" if open count is greater than 1', () => {
    render(
      <LocationInfo
        userCount={userCount}
        createdAt={createdAt}
        locationOpenCount={3}
      />
    );

    const locationOpenCountInfo = screen.getByTestId('location-views');
    expect(locationOpenCountInfo).toHaveTextContent('3 Views');
  });
});
