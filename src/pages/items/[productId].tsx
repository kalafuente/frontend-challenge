import '../../i18n';
import { ProductDetails } from '../../components/ProductDetails';
import { ItemDetail } from '../../types/types';
import { Breadcrumb } from '../../components/Breadcrumb';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';

interface ProductPageProps {
  item?: ItemDetail;
  error?: string | null;
  categories?: string[];
};

const ProductPage = ({ item, error, categories }: ProductPageProps) => {
  const { t } = useTranslation();

  if (error) {
    return <p>{t(error)}</p>;
  }

  return (
    <>
      {item && (
        <Head>
          <title>{item.title}</title>
        </Head>
      )}
      {categories && categories.length > 0 && <Breadcrumb categories={categories} />}
      {categories && item && <ProductDetails item={item} categories={categories} />}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { productId } = context.query;
  try {
    const res = await fetch(`${process.env.API_ITEMS_URL}/${productId}`);
    const data = await res.json();
    return {
      props: data.error
        ? { error: data.error }
        : { item: data.item, categories: data.categories },
    }
  } catch (error) {
    return {
      props: {
        error: 'error_occurred'
      }
    };
  }
}

export default ProductPage;