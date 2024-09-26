import '../../i18n.ts'
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ItemDetail } from '../../types/types';
import styles from './ProductDetails.module.scss';
import { formattedPrice } from '../../utils';
import { t } from 'i18next';

interface ProductDetailsProps {
  item: ItemDetail;
  categories: string[];
};

export const ProductDetails = ({ item }: ProductDetailsProps) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className={styles.productContainer}>
      <div className={styles.productImageContainer}>
        <div>
          <div className={styles.productImage}>
            <img src={item.picture} alt={item.title} />
          </div>
          <h1 className={styles.productDescriptionTitle}>{t('product_description')}</h1>
          <p className={styles.productDescription}>{item.description}</p>
        </div>
      </div>
      <div className={styles.buyContainer}>
        <p className={styles.condition}>{t(item.condition)} - {item.sold_quantity} {t('sold')}</p>
        <h1 className={styles.productName}>{item.title}</h1>
        <p className={styles.productPrice}>{t(item.price.currency)}{formattedPrice(currentLanguage, item.price)}</p>
        <button className={styles.buyButton}>{t('buy_button')}</button>
      </div>
    </div>
  )
}