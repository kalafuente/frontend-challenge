import '../../i18n.ts'
import { useRouter } from 'next/router';
import React from 'react';
import styles from './ProductCard.module.scss';
import { useState } from 'react';
import SpinnerOverlay from '../SpinnerOverlay';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  image: string;
  price: string;
  description: string;
  location: string;
  index: number;
  id: string;
  isFreeShipping: boolean;
}

const SeparatorLine = () => {
  return <div className={styles.separator}></div>
}

export const ProductCard = ({ id, image, price, description, location, index, isFreeShipping }: ProductCardProps) => {
  const router = useRouter();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    router.push(`/items/${id}`).finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <SpinnerOverlay />}
      <a className={styles.cardContainer} tabIndex={index + 2} onClick={handleClick}>
        <div className={styles.card}>
          <img src={image} alt={description} className={styles.image} /> {/* el thumbnail se ve medio pixelado, por diseño esto ex 180x180 */}
          <div className={styles.details}>
            <div>
              <div className={styles.priceAndShipping} >
                <span className={styles.price}>{price}</span>
                {isFreeShipping && <img src="/ic_shipping.png" alt={t('free_shipping')} />}
              </div>
              <p className={styles.description}>{description}</p>
            </div>
            <span className={styles.location}>{location}</span>
          </div>
        </div>
      </a>
      <SeparatorLine />
    </>
  );
};