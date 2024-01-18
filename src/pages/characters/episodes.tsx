import React, { useEffect, useState } from "react";
import styles from '@/styles/episodes.module.css'

export default function Episodes() {
      const [episodes, setEpisodes] = useState([]);
  const fetchCharacters = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const graphql = JSON.stringify({
        query:
          "query{\r\nepisodes{\r\n    results{\r\n        name\r\n        characters{\r\n                   image\r\n        }\r\n        }\r\n        \r\n    }\r\n}\r\n\r\n",
        variables: {},
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
      };
      const response = await fetch(
        "https://rickandmortyapi.com/graphql",
        requestOptions
      );

      const result = await response.json();
        console.log("result :>> ", result);
         setEpisodes(result.data.episodes.results);
    } catch (error) {
      console.log("error :>> ", error);
    }
    };
    

  useEffect(() => {
    fetchCharacters();
  }, []);

 return (
    <>
      <div>
        <p>Episodes</p>
        <div>
          <p>Choose a season:</p>
          <select name="" id=""> {/* Options here */}</select>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Featured Characters</th>
              </tr>
            </thead>
            <tbody>
              {episodes.map((episode, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{episode.name}</td>
                  <td>
                    {episode.characters.map((character, charIndex) => (
                      <img 
                        key={charIndex} 
                        src={character.image} 
                        alt={`Character ${charIndex}`} 
                        className={styles.characterImage}
                      />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

}
