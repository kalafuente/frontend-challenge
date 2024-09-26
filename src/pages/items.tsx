import '../i18n';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductList } from '../components/ProductList';
import { GetServerSideProps } from 'next';
import { Item } from '../types/types';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';

interface SearchPageProps {
  items: Item[];
  error: string | null;
  categories: string[];
};

const SearchPage = ({ items, error, categories }: SearchPageProps) => {
  const { t } = useTranslation();
  if (error) {
    return <p>{t(error)}</p>;
  }
  return (<>
    {
      <Head>
        <title>{t('searcher')}</title> {/* Establece el título aquí */}
      </Head>
    }
    <Breadcrumb categories={categories} />
    {items && <ProductList items={items} />}
  </>)
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { search } = context.query;
  try {
    const res = await fetch(`${process.env.API_ITEMS_URL}?q=${search}`);
    const data = await res.json();
    return {
      props: data.error
        ? { error: data.error }
        : { items: data.items, categories: data.categories },
    }
  } catch (error) {
    return {
      props: {
        error: 'error_occurred'
      }
    };
  }
};

export default SearchPage;