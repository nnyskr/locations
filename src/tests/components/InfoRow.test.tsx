import { render, screen } from '@testing-library/react';
import InfoRow from '../../components/InfoRow';

describe('InfoRow', () => {
  it('renders an icon and infoNode', () => {
    const icon = 'icon-url';
    const infoNode = 'Some information';
    render(<InfoRow icon={icon} infoNode={infoNode} />);
    const iconElement = screen.getByRole('img');
    const infoNodeElement = screen.getByText(infoNode);
    expect(iconElement).toHaveAttribute('src', icon);
    expect(infoNodeElement).toBeInTheDocument();
  });
});
