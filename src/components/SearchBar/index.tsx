import '../../i18n.ts'
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import styles from './SearchBar.module.scss';
import SpinnerOverlay from '../SpinnerOverlay';
import { handleKeyPress } from '../../utils';

const SearchBar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback(() => {
    if (searchQuery.trim()) {
      setIsLoading(true);
      const encodedQuery = encodeURIComponent(searchQuery.trim());
      router.push(`/items?search=${encodedQuery}`).finally(() => setIsLoading(false));
    }
  }, [searchQuery, router]);

  return (
    <>
      {isLoading && <SpinnerOverlay />}
      <div className={styles.searchBarContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.logoImg} src="/Logo_ML.png" alt="Logo" />
        </div>
        <div className={styles.searchContainer}>
          <input
            tabIndex={1}
            type="text"
            placeholder={t('search_placeholder')}
            className={styles.inputField}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, handleSearch)}
          />
          <button tabIndex={2} className={styles.searchButton} onClick={handleSearch}>
            <img className={styles.logoImg} src="/ic_Search.png" alt="Search" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
