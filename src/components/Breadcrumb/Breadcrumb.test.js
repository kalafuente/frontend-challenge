import '../../i18nForTests';
import { render, screen } from '@testing-library/react';
import { Breadcrumb } from '../Breadcrumb';

describe('Breadcrumb', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders the correct number of categories', () => {
    const categories = ['Home', 'Electronics', 'Mobile Phones'];
    render(<Breadcrumb categories={categories} />);
    const breadcrumbItems = screen.getAllByText(/Home|Electronics|Mobile Phones/);
    expect(breadcrumbItems.length).toBe(categories.length);
    const separators = screen.getAllByText('>');
    expect(separators.length).toBe(categories.length - 1);
  });

  test('Renders an empty breadcrumb when no categories are provided', () => {
    render(<Breadcrumb categories={[]} />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();

    const breadcrumbItems = screen.queryByRole('listitem');
    expect(breadcrumbItems).not.toBeInTheDocument();
  });

  test('Renders correctly with only one category', () => {
    const categories = ['Home'];
    render(<Breadcrumb categories={categories} />);

    const breadcrumbItem = screen.getByText('Home');
    expect(breadcrumbItem).toBeInTheDocument();

    const separator = screen.queryByText('>');
    expect(separator).not.toBeInTheDocument();
  });

});
