import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Select from './Select';

describe('<Select /> component test suite', () => {
  test('should correctly set default option', () => {
    render(<Select />);
    expect(
      screen.getByRole<HTMLOptionElement>('option', {
        name: 'Select a country'
      }).selected
    ).toBeTruthy();
  });

  test('should display the correct number of options', () => {
    render(<Select />);
    expect(screen.getAllByRole('option').length).toBe(4);
  });

  test('should allow user to change country', async () => {
    render(<Select />);
    await userEvent.selectOptions(
      screen.getByRole<HTMLSelectElement>('combobox'),
      screen.getByRole<HTMLOptionElement>('option', { name: 'Ireland' })
    );
    expect(
      screen.getByRole<HTMLOptionElement>('option', { name: 'Ireland' })
        .selected
    ).toBe(true);
  });
});
