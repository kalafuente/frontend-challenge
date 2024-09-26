import '../../i18n.ts'
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Item } from '../../types/types';
import { formattedPrice } from '../../utils';
import { ProductCard } from '../ProductCard';
import styles from './ProductList.module.scss';

interface ProductListProps {
  items: Item[]
}

export const ProductList = ({ items }: ProductListProps) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div className={styles.listContainer}>
      {items.length > 0 ? (
        items.map((product, index) => (
          <ProductCard
            id={product.id}
            index={index}
            key={product.id}
            image={product.picture}
            price={`${t(product.price.currency)} ${formattedPrice(currentLanguage, product.price)}`}
            description={product.title}
            location={product.location} isFreeShipping={product.free_shipping} />
        ))
      ) : (
        <p>{t('no_results')}</p>
      )}
    </div>
  );
};