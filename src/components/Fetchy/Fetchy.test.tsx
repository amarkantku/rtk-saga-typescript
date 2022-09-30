import { render, screen, act } from '@testing-library/react';
import Fetchy from './Fetchy';

describe.only('Fetchy', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('shows Loading', async () => {
    act(() => {
      render(<Fetchy />);
    });
    screen.debug();
    expect(screen.getByText('Loading')).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    screen.debug();
    expect(screen.getByText('Data:')).toBeInTheDocument();
  });

  // test("shows Loading and Data", async () => {
  //   render(<Fetchy />);
  //   expect(await screen.findByText("Loading")).toBeInTheDocument();
  //   screen.debug();
  //   expect(await screen.findByText("Data:")).toBeInTheDocument();
  //   screen.debug();
  // });

  test("shows Loading and Data", async () => {
    render(<Fetchy />);

    expect(await screen.findByText("Loading", {}, { timeout: 3000 })).toBeInTheDocument();
    screen.debug();

    expect(await screen.findByText("Data:",{}, {timeout: 3001})).toBeInTheDocument();
    screen.debug();
  });
});
