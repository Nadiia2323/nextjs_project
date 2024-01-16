
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import styles from "@/styles/characters.module.css"

type Character = {
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

interface ComponentProps {
  info: {}; 
  result: Character[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return {
    props: {
      result: data.results
    },
  };
};

export default function Characters({ result }: ComponentProps) {
   
  return (
    <>
      <Head>
        <title>Characters</title>
        {/* ... other head elements */}
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
      </div>
    </>
  );
}


  // const [characters, setCharacters] = useState(null)

  // useEffect(() => {
  //         let controller = new AbortController();
  //         const signal = controller.signal
  //   const fetchChacters = async () => {
  //       try {
  //           const response = await fetch("https://rickandmortyapi.com/api/character", {signal,})

  //           if (response.ok) {
  //               const result = await response.json()
  //               setCharacters(result)
  //           }
  //       } catch (error) {
  //           console.log('error :>> ', error);

  //       }
  //       fetchChacters()
  //       return (() => {
  //           controller.abort()
  //       })
  //         }
  //         console.log('characters :>> ', characters);
  // }, []) //?deleting prev. signal//