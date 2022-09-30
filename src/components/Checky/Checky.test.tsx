import {
  fireEvent,
  render,
  screen,
  act,
  waitFor
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Checky from './Checky';

describe('<Checky /> component test suite', () => {
  describe('act + mock timers', () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    test('updates state with delay - act() + mock timers', async () => {
      act(() => {
        render(<Checky />);
      });

      // screen.debug();
      let label = screen.getByLabelText('false');
      expect(label).toBeInTheDocument();

      act(() => {
        fireEvent.click(label);
        jest.advanceTimersByTime(2000);
      });

      // screen.debug()
      expect(screen.getByLabelText('true')).toBeInTheDocument();
    });
  });

  describe('async utils', () => {
    test('updates state with delay - RTL async utils', async () => {
      render(<Checky />);

      let label = await screen.findByLabelText('false');
      expect(label).toBeInTheDocument();

      // screen.debug();

      fireEvent.click(label);

      // expect(await screen.findByLabelText("true")).toBeInTheDocument();
      expect(
        await screen.findByLabelText('true', {}, { timeout: 2500 })
      ).toBeInTheDocument();
      // await waitFor(() => screen.getByLabelText("true"), { timeout: 2000 });

      // screen.debug()
    });
  });
});
