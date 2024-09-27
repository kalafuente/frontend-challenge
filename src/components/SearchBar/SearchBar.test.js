import '../../i18nForTests';
import { render, screen, fireEvent, act } from '@testing-library/react';
import SearchBar from '../SearchBar';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('SearchBar', () => {
  let pushMock;

  beforeEach(() => {
    pushMock = jest.fn(() => Promise.resolve({
      finally: jest.fn(),
    }));

    useRouter.mockReturnValue({
      push: pushMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders the SearchBar component', () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText('Nunca dejes de buscar');
    const buttonElement = screen.getByRole('button');
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('No trigger search if input is empty', () => {
    render(<SearchBar />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(pushMock).not.toHaveBeenCalled();
  });

  test('Triggers search when input is filled and button is clicked', async () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText('Nunca dejes de buscar');
    const buttonElement = screen.getByRole('button');
    fireEvent.change(inputElement, { target: { value: 'test 1' } });
    await act(async () => {
      fireEvent.click(buttonElement);
    });
    expect(pushMock).toHaveBeenCalledWith('/items?search=test%201');
  });

  test('Triggers search when Enter key is pressed', async () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText('Nunca dejes de buscar');
    fireEvent.change(inputElement, { target: { value: 'test 2' } });
    await act(async () => {
      fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });
    });
    expect(pushMock).toHaveBeenCalledWith('/items?search=test%202');
  });
});
