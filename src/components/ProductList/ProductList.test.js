import '../../i18nForTests';
import { render, screen } from '@testing-library/react';
import { ProductList } from '../ProductList';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockItems = [
  {
    "id": "MLA1141657890",
    "title": "Apple iPhone 11 (128 Gb) - Negro - Distribuidor Autorizado",
    "price": {
      "currency": "ARS",
      "amount": 1123517,
      "decimals": 0
    },
    "picture": "http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg",
    "condition": "new",
    "free_shipping": true,
    "location": "Piñeyro"
  },
  {
    "id": "MLA1907018634",
    "title": "Apple iPhone 11 (128 Gb) - Negro",
    "price": {
      "currency": "ARS",
      "amount": 770000,
      "decimals": 0
    },
    "picture": "http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg",
    "condition": "new",
    "free_shipping": true,
    "location": "Velez sarsfield"
  },
];

describe('ProductList', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders product\'s list correctly', () => {
    render(<ProductList items={mockItems} />);
    const productCards = screen.getAllByTestId('product-list');
    expect(productCards.length).toBe(2);

    expect(screen.getByText('$ 1.123.517')).toBeInTheDocument();
    expect(screen.getByText('Apple iPhone 11 (128 Gb) - Negro - Distribuidor Autorizado')).toBeInTheDocument();
    expect(screen.getByText('Piñeyro')).toBeInTheDocument();

    expect(screen.getByText('$ 770.000')).toBeInTheDocument();
    expect(screen.getByText('Apple iPhone 11 (128 Gb) - Negro')).toBeInTheDocument();
    expect(screen.getByText('Velez sarsfield')).toBeInTheDocument();
  });


});
