import '../../i18nForTests';
import { ProductCard } from '../ProductCard';
import { useRouter } from 'next/router';
import { render, screen, fireEvent, act } from '@testing-library/react';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockItem =
{
  "id": "MLA1141657890",
  "price": '$100',
  "image": "http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg",
  "isFreeShipping": true,
  "location": "Piñeyro",
  "description": "Una descripción"
}

describe('ProductList', () => {
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

  test('Renders the product card with correct information', () => {
    render(<ProductCard {...mockItem} index={0} />);

    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('Una descripción')).toBeInTheDocument();
    const shippingIconElement = screen.getByAltText('Envío gratis');
    expect(shippingIconElement).toBeInTheDocument();
  });

  test.only('Triggers navigation when the card is clicked', async () => {
    render(<ProductCard {...mockItem} index={0} />);

    const cardElement = screen.getByTestId('product-list');

    await act(async () => {
      fireEvent.click(cardElement);
    });

    expect(pushMock).toHaveBeenCalledWith('/items/MLA1141657890');
  });

  test('Displays SpinnerOverlay while loading', () => {
    render(<ProductCard {...mockItem} index={0} />);
    const cardElement = screen.getByTestId('product-list');
    fireEvent.click(cardElement);
    expect(screen.getAllByTestId('spinner')).toBeInTheDocument();
  });

});
