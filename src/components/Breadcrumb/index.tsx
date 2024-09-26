import React from 'react';
import styles from './Breadcrumb.module.scss';

interface BreadcrumbProps {
  categories: string[]
}

export const Breadcrumb = ({ categories }: BreadcrumbProps) => {
  return (
    <nav className={styles.breadcrum}>
      {categories.length > 0 ? <ul className={styles.breadcrumbList}>
        {categories.map((category, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            <span>{category}</span>
            {index < categories.length - 1 && <span className={styles.breadcrumbSeparator}>></span>}
          </li>
        ))}
      </ul> : <span></span>}
    </nav>
  );
};