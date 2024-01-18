


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