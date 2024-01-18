import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '@/styles/id.module.css'; 

import { GetStaticProps } from 'next'
import { Character, SingleCharacterProps } from '@/types/types'


export const getStaticPaths = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  const paths = data.results.map((character) => ({
    params: { id: character.id.toString() },
  }));

  return { paths, fallback: 'blocking' };
}


export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character: Character  = await response.json();
  return {
    props: {
      character,
    },
  };
};



export default function SingleCharacter({ character }: SingleCharacterProps) {
  
  const router = useRouter()
  const currentCharacter = parseInt(router.query.id as string);
 
    const handleChangeCharacter = (id: number) => {
    router.push(`/character/${id}`);
  };
  
  const handleBackClick = () => {
    router.push('/characters/1')
  }


  return (
    <>
      <Head>
        <title>{character.name}</title>
        <meta name="description" content={`${character.name} details`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container} >
        <div className={styles.buttonsContainer}>
          <button className={styles.buttonBack}  onClick={handleBackClick}>Back to list...</button>
        </div>
        <div className={styles.infoContainer }>
        <div>
        <img  src={character.image} alt={character.name} />
        
        </div>
        <div className={styles.info}>
          <h1>{character.name}</h1> 
          <p>Gender:{character.gender}</p>
          <p>Species:{character.species}</p>
          <p>Status:{character.status}</p>
            <p>Origin:{character.origin.name}</p>
            <p>Appears in {character.episode.length} episodes</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}  onClick={() => handleChangeCharacter(currentCharacter - 1)}
            disabled={currentCharacter === 1} >prev</button>
          <button className={styles.button}  onClick={() => handleChangeCharacter(currentCharacter + 1)}
             >next</button>
        </div>
      </div>
    </>
  );
}