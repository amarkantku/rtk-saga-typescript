import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe('<App /> test suite', () => {
  afterEach(cleanup)

  test('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test('should render learning react testing library', () => {
    const { getByText, getByRole, container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText(/learning react testing library/i)).toBeInTheDocument();
    expect(getByRole('banner')).toBeInTheDocument();
  });
});
