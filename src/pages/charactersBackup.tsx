
// import { GetServerSideProps } from "next";
// import Head from "next/head";
// import React from "react";
// import styles from "@/styles/characters.module.css"
// import { Button } from "react-bootstrap";
// import { useRouter } from "next/router";

// export interface Character  {
//   id: number;
//   name: string;
//   status: string;
//   species: string;
//   type: string;
//   gender: string;
//   origin: {
//     name: string;
//     url: string;
//   };
//   location: {
//     name: string;
//     url: string;
//   };
//   image: string;
//   episode: string[];
//   url: string;
//   created: string;
// };

// export interface ComponentProps {
//   info: PageInfo; 
//   result: Character[];
// }
// export type PageInfo = {
//   count: number;
//   pages: number;
//   next: string | null;
//   prev: string | null;
// };
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const page = context.query.page
//   console.log('page :>> ', page);
//   const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
//   const data = await response.json();
//   return {
//     props: {
//       info:data.info,
//       result: data.results
//     },
//   };
// };

// export default function Characters({ info, result }: ComponentProps) {
//   const router = useRouter();

//     const handlePagination = (url: string | null) => {
//     if (url) {
//       const newPage = new URL(url).searchParams.get("page");
//       router.push(`?page=${newPage}`);
//     }
//   };
   
//   return (
//     <>
//       <Head>
//         <title>Characters</title>
//        <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div className={styles.container}>
//         <p className={styles.test}>List of Characters</p>
//         <div className={styles.characters}>
//           {result.map((character) => (
//             <div key={character.id} className={styles.characterContainer}>
//               <img className={styles.character} src={character.image} alt={character.name} />
//               <p className={styles.learn}>Learn more</p>
//             </div>
//           ))}
//         </div>
//         <div className={styles.buttonsContainer}>
//           <button  onClick={() => handlePagination(info.prev)} className={styles.button}>prev</button>
//           <button onClick={() => handlePagination(info.next)} className={styles.button}>next</button>
//         </div>
//       </div>
//     </>
//   );
// }


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