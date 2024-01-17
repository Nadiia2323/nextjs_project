import { GetStaticProps } from 'next'
import React from 'react'
import { Character } from './characters'


// export const getStaticProps:GetStaticProps<Character> = async() => {
  
// }

export default function SingleCharacter({character}:Character) {
  return (
    <div>S</div>
  )
}
