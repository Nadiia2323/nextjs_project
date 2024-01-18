import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '@/styles/characters.module.css'; 

import { GetServerSideProps } from 'next';
import React from 'react'
import { PageProps } from '@/types/types';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.params?.page || 1;
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = await response.json();
  return {
    props: {
      info: data.info,
      result: data.results,
    },
  };
};




export default function Page({ info, result }: PageProps) {
  const router = useRouter();
  const currentPage = parseInt(router.query.page as string) || 1;

  const handlePagination = (page: number) => {
    router.push(`/characters/${page}`);
  };
  const handleChracterClick = (id:number) => {
    router.push(`/character/${id}`)
  }

  return (
    <>
      <Head>
        <title>Characters - Page {currentPage}</title>
        <meta name="description" content="List of Characters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <p className={styles.test}>List of Characters - Page {currentPage}</p>
        <div className={styles.characters}>
          {result.map((character) => (
            <div key={character.id} className={styles.characterContainer}>
              <img className={styles.character} src={character.image} alt={character.name} />
              <div className={styles.learnContainer}>
                <p className={styles.learn} onClick={() => handleChracterClick(character.id)}>Learn more</p>
              </div>
          

            </div>
          ))}
        </div>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.button}
            onClick={() => handlePagination(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className={styles.button}
            onClick={() => handlePagination(currentPage + 1)}
            disabled={currentPage >= info.pages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

