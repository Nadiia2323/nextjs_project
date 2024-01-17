import { GetServerSideProps } from 'next';
import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '@/styles/characters.module.css'; 

 export interface Character  {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export interface ComponentProps {
  info: PageInfo; 
  result: Character[];
}
export type PageInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page
  console.log('page :>> ', page);
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = await response.json();
  return {
    props: {
      info:data.info,
      result: data.results
    },
  };
};






export default function Page({ info, result }: ComponentProps) {
  const router = useRouter();
  const currentPage = parseInt(router.query.page as string) || 1;

  const handlePagination = (page: number) => {
    router.push(`/characters/${page}`);
  };

  return (
    <>
      <Head>
        <title>Characters - Page {currentPage}</title>
        <meta name="description" content="List of Characters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <p className={styles.test}>List of Characters</p>
        <div className={styles.characters}>
          {result.map((character) => (
            <div key={character.id} className={styles.characterContainer}>
              <img className={styles.character} src={character.image} alt={character.name} />
               <p className={styles.learn}>Learn more</p>
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

