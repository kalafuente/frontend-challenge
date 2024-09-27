import '../../i18nForTests';
import { render, screen } from '@testing-library/react';
import { ProductDetails } from '../ProductDetails';

const mockItem = {
  picture: 'http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg',
  title: 'Test Product',
  description: 'This is a test description.',
  condition: 'new',
  sold_quantity: 5,
  price: {
    "currency": "ARS",
    "amount": 1123517,
    "decimals": 0
  },
};

describe('ProductDetails', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders product details with the correct information', () => {
    render(<ProductDetails item={mockItem} categories={['Electronics', 'Laptops']} />);
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('This is a test description.')).toBeInTheDocument();
    expect(screen.getByText('$1.123.517')).toBeInTheDocument();
    expect(screen.getByText('Nuevo - 5 Vendidos')).toBeInTheDocument();
    expect(screen.getByText('Comprar')).toBeInTheDocument();
  });


});
