import React from 'react';
import SearchBar from '../SearchBar'; // Asegúrate de que la ruta sea correcta
import styles from './Layout.module.scss';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SearchBar />
      <div className={styles.mainContainer}>
        <main>{children}</main>
      </div>
    </>
  );
};