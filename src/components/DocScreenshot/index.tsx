import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function DocScreenshot({src, alt}: {src: string; alt: string}) {
  const url = useBaseUrl(src);
  return (
    <figure className={styles.figure}>
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${alt} — open full-resolution image in a new tab`}>
        <img className={styles.image} src={url} alt={alt} loading="lazy" />
      </a>
    </figure>
  );
}
