import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RoundButton from '../../components/RoundButton';

describe('RoundButton', () => {
  it('renders a button element with the given className', () => {
    render(<RoundButton className="custom-button" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('custom-button');
  });

  it('calls the provided onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<RoundButton onClick={handleClick} />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('passes through additional props', () => {
    render(<RoundButton id="my-button" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('id', 'my-button');
  });
});
